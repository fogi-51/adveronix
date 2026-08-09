// Cloudflare Turnstile site key (public — safe to ship in the bundle).
// Create one at https://dash.cloudflare.com/?to=/:account/turnstile
// Leave empty to disable the CAPTCHA widget.
export const TURNSTILE_SITE_KEY = "";

export const isTurnstileEnabled = TURNSTILE_SITE_KEY.length > 0;
