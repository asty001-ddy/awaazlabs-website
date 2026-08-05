
## Search engine verification (Brief 4, A7)

Primary method: set `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION`
in the deploy environment; the meta tags render automatically.

File fallback (survives env mistakes): both engines also accept an HTML
file at the site root. Download the file from Search Console (Settings →
Ownership verification → HTML file, named like `google1234abcd.html`) or
Bing Webmaster Tools (`BingSiteAuth.xml`), drop it into `public/`, and
deploy. Files in `public/` are served at the root automatically. Never
commit tokens into source files; the verification files themselves are
safe to commit (they contain only the token the meta tag would expose
anyway).
