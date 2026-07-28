
-- 1) Create private schema for internal helpers not exposed via the Data API
CREATE SCHEMA IF NOT EXISTS private;
REVOKE ALL ON SCHEMA private FROM PUBLIC, anon, authenticated;
GRANT USAGE ON SCHEMA private TO authenticated, service_role;

-- 2) Recreate has_role in the private schema
CREATE OR REPLACE FUNCTION private.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

REVOKE ALL ON FUNCTION private.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION private.has_role(uuid, public.app_role) TO authenticated, service_role;

-- 3) Recreate policies to reference the private helper
DROP POLICY IF EXISTS "Admins can delete contacts" ON public.contacts;
DROP POLICY IF EXISTS "Admins can update contacts" ON public.contacts;
DROP POLICY IF EXISTS "Admins can view all contacts" ON public.contacts;
DROP POLICY IF EXISTS "Admins can view all roles" ON public.user_roles;

CREATE POLICY "Admins can view all contacts"
  ON public.contacts FOR SELECT TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can update contacts"
  ON public.contacts FOR UPDATE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can delete contacts"
  ON public.contacts FOR DELETE TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::public.app_role));

CREATE POLICY "Admins can view all roles"
  ON public.user_roles FOR SELECT TO authenticated
  USING (private.has_role(auth.uid(), 'admin'::public.app_role));

-- 4) Drop the public-schema version so it is no longer callable via the API
DROP FUNCTION IF EXISTS public.has_role(uuid, public.app_role);

-- 5) Tighten the public contact-form INSERT policy (replace WITH CHECK (true))
DROP POLICY IF EXISTS "Anyone can submit contact form" ON public.contacts;

CREATE POLICY "Anyone can submit contact form"
  ON public.contacts FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(btrim(name))    BETWEEN 1 AND 200
    AND length(btrim(email))   BETWEEN 3 AND 320
    AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND length(btrim(message)) BETWEEN 1 AND 5000
  );
