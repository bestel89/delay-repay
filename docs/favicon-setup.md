# Favicon setup

After merging this PR, add these files manually to `/public`:

- `public/favicon.ico` (48x48 or multi-size ICO)
- `public/favicon-192.png` (192x192 PNG)

## Manual verification

1. Visit `https://<domain>/favicon.ico` and confirm it returns HTTP 200.
2. Visit `https://<domain>/favicon-192.png` and confirm it returns HTTP 200.
3. View the page source and confirm the head contains only these icon tags once:

   ```html
   <link rel="icon" href="/favicon.ico" sizes="48x48" />
   <link rel="icon" href="/favicon-192.png" type="image/png" sizes="192x192" />
   ```
