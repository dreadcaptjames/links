# Dread Captain James — Official Website

A fully responsive static website built around the supplied 101st Dreadnaughts skull-and-shield logo and the approved dark navy / gold / crimson design.

## Quick start

Open `index.html` in a modern browser to preview the site. No installation, account, build step, or server is needed for this preview. All layout, styling, images, and JavaScript are included locally inside this folder.

To make it public, upload **the contents of this entire folder** (including the `assets` subfolder) to any static web host:

- **Netlify:** Drag the folder onto Netlify's deploy page. Use the resulting preview site and connect a custom domain in Site configuration.
- **GitHub Pages:** Create a repository, put `index.html` and `assets/` at the repository root, and enable Pages under Settings → Pages.
- **Cloudflare Pages:** Create a Pages project for static assets, upload the folder, and attach your domain.

`index.html` is the home page. `assets/styles.css` controls design and responsive behavior. `assets/site.js` provides the mobile menu, link filters, search, and sharing. Images are kept in `assets/`.

## Browser icons and iPhone/iPad Home Screen installation

The site now includes your real gold skull-shield logo as a browser tab favicon and a dedicated **navy-backed iOS Home Screen icon**. A web app manifest also supports Android/desktop install prompts where supported.

### To add the website to an iPhone Home Screen

1. **Publish the full website folder on an HTTPS host** (the local HTML preview cannot be installed as a real web app).
2. On iPhone, open the published URL in **Safari**.
3. Use the **Share** menu, then tap **Add to Home Screen**.
4. Leave **Open as Web App** enabled, then tap **Add**.

The app-like Home Screen shortcut is labeled **Dread Captain**, displays your logo, and opens the website without the usual Safari toolbar. It is still a website: it needs an internet connection and is not an App Store app. If replacing an older saved shortcut, remove it and add it again to refresh cached icons.

### Icon and metadata files

- `favicon.ico` and `assets/favicon-16.png` / `assets/favicon-32.png` — browser tabs and legacy favicon support
- `apple-touch-icon.png` (180×180) — iPhone/iPad Home Screen icon
- `site.webmanifest` — web app identity, name, launch behavior, and install icons
- `assets/icon-192.png`, `assets/icon-512.png`, `assets/icon-maskable-512.png` — other devices and Android/adaptive icons

**Deploy all files, not just `index.html`.** Paths are relative so the site also works from a subfolder on GitHub Pages.

## About the content

The site uses the original logo provided by the creator, converted into a transparent web image. Scenic thumbnail art was taken from the previously approved concept mockup and used as **illustrative category images**, not as claims about specific releases. The site does **not** claim a stream is currently live or invent video/music titles, dates, or view counts.

The following external destinations are included: Twitch, YouTube, stream archive, Spotify music, Spotify podcast, Discord, official merch shop, Substack, TikTok, Instagram, X, Threads, HELLDIVER // Synergy Lab, and ATLAS MAX.

## Updates

- **Edit links:** Search for a platform name or URL in `index.html` and replace the corresponding `href`. Many destinations appear in more than one place; update each occurrence.
- **Change the copy:** Edit text directly in `index.html`.
- **Change visual styles:** Edit color variables in the top of `assets/styles.css`.
- **Replace section artwork:** Swap `feature-stream.webp`, `feature-video.webp`, `feature-music.webp`, or `feature-podcast.webp` while keeping the same filename, or change the `<img src>` references.
- **Use a real live status:** Requires connecting a live-status data source or Twitch API implementation; not included in this static version.
- **Show latest content automatically:** Requires adding YouTube/Spotify feed integration or a backend; static category cards are present now.
- **Social sharing preview:** `assets/social-preview.jpg` is a local OG image. For the most reliable sharing on social sites after publishing, change the `og:image` in `index.html` from a relative path to the full `https://yourdomain/...` URL.

## Included files

```text
index.html
site.webmanifest
apple-touch-icon.png
favicon.ico
assets/
  styles.css
  site.js
  dread-emblem.webp
  favicon.png
  favicon-16.png
  favicon-32.png
  favicon-48.png
  icon-192.png
  icon-512.png
  icon-maskable-512.png
  social-preview.jpg
  crimson-nebula.webp
  stream-banner.webp
  feature-stream.webp
  feature-video.webp
  feature-music.webp
  feature-podcast.webp
```

All rights to the creator's supplied emblem remain with its owner. No tracking scripts, ad scripts, external CDNs, third-party fonts, or dependencies are included.
