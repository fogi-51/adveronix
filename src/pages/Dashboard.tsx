import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Bot, Globe, Inbox, Loader2, LogOut, Mail, RefreshCw, Users } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAdminAuth } from "@/hooks/useAdminAuth";
import { toast } from "sonner";

type ContactRow = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  service: string | null;
  budget: string | null;
  message: string;
  status: string;
  source: string;
  created_at: string;
};

type SubscriberRow = {
  id: string;
  email: string;
  status: string;
  source: string;
  created_at: string;
};

const RANGE_PRESETS = [
  { value: "7", label: "Last 7 days" },
  { value: "30", label: "Last 30 days" },
  { value: "90", label: "Last 90 days" },
  { value: "all", label: "All time" },
  { value: "custom", label: "Custom range" },
];

const formatDate = (value: string) =>
  new Date(value).toLocaleString(undefined, {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

const StatusBadge = ({ status }: { status: string }) => {
  const map: Record<string, string> = {
    new: "bg-accent text-accent-foreground",
    read: "bg-secondary text-secondary-foreground",
    archived: "bg-muted text-muted-foreground",
    subscribed: "bg-accent text-accent-foreground",
    unsubscribed: "bg-muted text-muted-foreground",
  };
  return <Badge className={map[status] ?? "bg-secondary text-secondary-foreground"}>{status}</Badge>;
};

const SourceBadge = ({ source }: { source: string }) => (
  <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
    {source === "mcp" ? (
      <Bot className="h-3.5 w-3.5" aria-hidden="true" />
    ) : (
      <Globe className="h-3.5 w-3.5" aria-hidden="true" />
    )}
    {source === "mcp" ? "AI agent" : "Website"}
  </span>
);

const Dashboard = () => {
  const navigate = useNavigate();
  const { session, isAdmin, loading: authLoading } = useAdminAuth();

  const [range, setRange] = useState("30");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [contactStatus, setContactStatus] = useState("all");
  const [subscriberStatus, setSubscriberStatus] = useState("all");

  const [contacts, setContacts] = useState<ContactRow[]>([]);
  const [subscribers, setSubscribers] = useState<SubscriberRow[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  const bounds = useMemo(() => {
    if (range === "all") return { from: null as string | null, to: null as string | null };
    if (range === "custom") {
      return {
        from: fromDate ? new Date(`${fromDate}T00:00:00`).toISOString() : null,
        to: toDate ? new Date(`${toDate}T23:59:59`).toISOString() : null,
      };
    }
    const days = Number(range);
    const from = new Date();
    from.setDate(from.getDate() - days);
    return { from: from.toISOString(), to: null as string | null };
  }, [range, fromDate, toDate]);

  const loadData = useCallback(async () => {
    setLoadingData(true);
    let contactQuery = supabase
      .from("contacts")
      .select("id,name,email,company,service,budget,message,status,source,created_at")
      .order("created_at", { ascending: false })
      .limit(500);
    let subscriberQuery = supabase
      .from("newsletter_subscribers")
      .select("id,email,status,source,created_at")
      .order("created_at", { ascending: false })
      .limit(500);

    if (bounds.from) {
      contactQuery = contactQuery.gte("created_at", bounds.from);
      subscriberQuery = subscriberQuery.gte("created_at", bounds.from);
    }
    if (bounds.to) {
      contactQuery = contactQuery.lte("created_at", bounds.to);
      subscriberQuery = subscriberQuery.lte("created_at", bounds.to);
    }

    const [contactsRes, subscribersRes] = await Promise.all([contactQuery, subscriberQuery]);

    if (contactsRes.error) {
      console.error(contactsRes.error);
      toast.error("Could not load enquiries.");
    } else {
      setContacts((contactsRes.data ?? []) as ContactRow[]);
    }
    if (subscribersRes.error) {
      console.error(subscribersRes.error);
      toast.error("Could not load newsletter signups.");
    } else {
      setSubscribers((subscribersRes.data ?? []) as SubscriberRow[]);
    }
    setLoadingData(false);
  }, [bounds.from, bounds.to]);

  useEffect(() => {
    if (!authLoading && !session) navigate("/auth", { replace: true });
  }, [authLoading, session, navigate]);

  useEffect(() => {
    if (session && isAdmin) loadData();
  }, [session, isAdmin, loadData]);

  const visibleContacts = useMemo(
    () =>
      contacts.filter(
        (row) =>
          (contactStatus === "all" || row.status === contactStatus) &&
          (sourceFilter === "all" || row.source === sourceFilter),
      ),
    [contacts, contactStatus, sourceFilter],
  );

  const visibleSubscribers = useMemo(
    () =>
      subscribers.filter(
        (row) =>
          (subscriberStatus === "all" || row.status === subscriberStatus) &&
          (sourceFilter === "all" || row.source === sourceFilter),
      ),
    [subscribers, subscriberStatus, sourceFilter],
  );

  const stats = useMemo(
    () => [
      { label: "Enquiries", value: visibleContacts.length, icon: Inbox },
      {
        label: "Unread enquiries",
        value: visibleContacts.filter((r) => r.status === "new").length,
        icon: Mail,
      },
      { label: "Newsletter signups", value: visibleSubscribers.length, icon: Users },
      {
        label: "From AI agents",
        value:
          visibleContacts.filter((r) => r.source === "mcp").length +
          visibleSubscribers.filter((r) => r.source === "mcp").length,
        icon: Bot,
      },
    ],
    [visibleContacts, visibleSubscribers],
  );

  const updateContactStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("contacts")
      .update({ status, read: status !== "new" })
      .eq("id", id);
    if (error) {
      toast.error("Could not update this enquiry.");
      return;
    }
    setContacts((prev) => prev.map((row) => (row.id === id ? { ...row, status } : row)));
  };

  const updateSubscriberStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("newsletter_subscribers")
      .update({ status })
      .eq("id", id);
    if (error) {
      toast.error("Could not update this subscriber.");
      return;
    }
    setSubscribers((prev) => prev.map((row) => (row.id === id ? { ...row, status } : row)));
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  };

  if (authLoading) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <Loader2 className="h-6 w-6 animate-spin text-accent" aria-hidden="true" />
        </div>
      </Layout>
    );
  }

  if (!session) return null;

  if (!isAdmin) {
    return (
      <>
        <SEOHead title="Dashboard | Fogee IO" description="Fogee IO team dashboard." noindex />
        <Layout>
          <section className="py-24">
            <div className="container mx-auto px-4 max-w-xl text-center space-y-4">
              <h1 className="text-3xl font-bold">You don't have access to this page</h1>
              <p className="text-muted-foreground">
                This dashboard is limited to Fogee IO administrators. Ask an administrator to grant
                your account access.
              </p>
              <div className="flex justify-center gap-3">
                <Button variant="outline" onClick={signOut}>
                  Sign out
                </Button>
                <Button asChild>
                  <Link to="/">Back to website</Link>
                </Button>
              </div>
            </div>
          </section>
        </Layout>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title="Enquiries Dashboard | Fogee IO"
        description="Review contact enquiries, newsletter signups and AI agent inquiries."
        noindex
      />
      <Layout>
        <section className="py-12 bg-secondary/30 min-h-screen">
          <div className="container mx-auto px-4 space-y-8">
            <header className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold">Enquiries dashboard</h1>
                <p className="text-muted-foreground">
                  Contact form submissions, newsletter signups and AI agent inquiries.
                </p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={loadData} disabled={loadingData}>
                  {loadingData ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <RefreshCw className="mr-2 h-4 w-4" aria-hidden="true" />
                  )}
                  Refresh
                </Button>
                <Button variant="outline" onClick={signOut}>
                  <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
                  Sign out
                </Button>
              </div>
            </header>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <Card key={stat.label}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">
                      {stat.label}
                    </CardTitle>
                    <stat.icon className="h-4 w-4 text-accent" aria-hidden="true" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardContent className="pt-6 grid gap-4 md:grid-cols-4">
                <div className="space-y-2">
                  <Label htmlFor="range">Date range</Label>
                  <Select value={range} onValueChange={setRange}>
                    <SelectTrigger id="range">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {RANGE_PRESETS.map((preset) => (
                        <SelectItem key={preset.value} value={preset.value}>
                          {preset.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                {range === "custom" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="from">From</Label>
                      <Input
                        id="from"
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="to">To</Label>
                      <Input
                        id="to"
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                      />
                    </div>
                  </>
                )}
                <div className="space-y-2">
                  <Label htmlFor="source">Came from</Label>
                  <Select value={sourceFilter} onValueChange={setSourceFilter}>
                    <SelectTrigger id="source">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All sources</SelectItem>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="mcp">AI agent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Tabs defaultValue="contacts">
              <TabsList>
                <TabsTrigger value="contacts">Enquiries ({visibleContacts.length})</TabsTrigger>
                <TabsTrigger value="newsletter">
                  Newsletter ({visibleSubscribers.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="contacts" className="space-y-4">
                <div className="max-w-xs space-y-2">
                  <Label htmlFor="contact-status">Status</Label>
                  <Select value={contactStatus} onValueChange={setContactStatus}>
                    <SelectTrigger id="contact-status">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All statuses</SelectItem>
                      <SelectItem value="new">New</SelectItem>
                      <SelectItem value="read">Read</SelectItem>
                      <SelectItem value="archived">Archived</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Card>
                  <CardContent className="pt-6 overflow-x-auto">
                    {loadingData ? (
                      <p className="text-muted-foreground py-8 text-center">Loading…</p>
                    ) : visibleContacts.length === 0 ? (
                      <p className="text-muted-foreground py-8 text-center">
                        No enquiries match these filters.
                      </p>
                    ) : (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Received</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Service</TableHead>
                            <TableHead>Message</TableHead>
                            <TableHead>Came from</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Change</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {visibleContacts.map((row) => (
                            <TableRow key={row.id}>
                              <TableCell className="whitespace-nowrap">
                                {formatDate(row.created_at)}
                              </TableCell>
                              <TableCell>
                                <span className="font-medium">{row.name}</span>
                                {row.company && (
                                  <span className="block text-sm text-muted-foreground">
                                    {row.company}
                                  </span>
                                )}
                              </TableCell>
                              <TableCell>
                                <a href={`mailto:${row.email}`} className="text-accent underline">
                                  {row.email}
                                </a>
                              </TableCell>
                              <TableCell>{row.service ?? "—"}</TableCell>
                              <TableCell className="max-w-sm">
                                <span className="line-clamp-2 block" title={row.message}>
                                  {row.message}
                                </span>
                              </TableCell>
                              <TableCell>
                                <SourceBadge source={row.source} />
                              </TableCell>
                              <TableCell>
                                <StatusBadge status={row.status} />
                              </TableCell>
                              <TableCell>
                                <Select
                                  value={row.status}
                                  onValueChange={(value) => updateContactStatus(row.id, value)}
                                >
                                  <SelectTrigger
                                    className="w-[130px]"
                                    aria-label={`Change status for ${row.name}`}
                                  >
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="new">New</SelectItem>
                                    <SelectItem value="read">Read</SelectItem>
                                    <SelectItem value="archived">Archived</SelectItem>
                                  </SelectContent>
                                </Select>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="newsletter" className="space-y-4">
                <div className="max-w-xs space-y-2">
                  <Label htmlFor="subscriber-status">Status</Label>
                  <Select value={subscriberStatus} onValueChange={setSubscriberStatus}>
                    <SelectTrigger id="subscriber-status">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All statuses</SelectItem>
                      <SelectItem value="subscribed">Subscribed</SelectItem>
                      <SelectItem value="unsubscribed">Unsubscribed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Card>
                  <CardContent className="pt-6 overflow-x-auto">
                    {loadingData ? (
                      <p className="text-muted-foreground py-8 text-center">Loading…</p>
                    ) : visibleSubscribers.length === 0 ? (
                      <p className="text-muted-foreground py-8 text-center">
                        No newsletter signups match these filters.
                      </p>
                    ) : (
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Signed up</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Came from</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Change</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {visibleSubscribers.map((row) => (
                            <TableRow key={row.id}>
                              <TableCell className="whitespace-nowrap">
                                {formatDate(row.created_at)}
                              </TableCell>
                              <TableCell>
                                <a href={`mailto:${row.email}`} className="text-accent underline">
                                  {row.email}
                                </a>
                              </TableCell>
                              <TableCell>
                                <SourceBadge source={row.source} />
                              </TableCell>
                              <TableCell>
                                <StatusBadge status={row.status} />
                              </TableCell>
                              <TableCell>
                                <Select
                                  value={row.status}
                                  onValueChange={(value) => updateSubscriberStatus(row.id, value)}
                                >
                                  <SelectTrigger
                                    className="w-[150px]"
                                    aria-label={`Change status for ${row.email}`}
                                  >
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="subscribed">Subscribed</SelectItem>
                                    <SelectItem value="unsubscribed">Unsubscribed</SelectItem>
                                  </SelectContent>
                                </Select>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Dashboard;
