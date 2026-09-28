# Cling Info Tech Website

A static website (HTML, CSS, vanilla JavaScript). No npm, Node.js, build step or backend needed.

## Project Structure

```
cling-website/
├── index.html            Home page
├── pages/                Internal pages (about, services, ai-ml, 3d-videos, team, clients, contact + placeholders)
├── css/
│   ├── style.css         Colors, typography, layout, components, navbar
│   ├── responsive.css    Media queries (960px navbar, 900px layout, 520px small phones)
│   └── animations.css    Keyframes and motion (respects reduced-motion setting)
├── js/
│   ├── navbar.js         Shared header, dropdowns, mobile menu, active state
│   ├── main.js           Shared footer and WhatsApp button
│   ├── counters.js       Animated statistics
│   ├── animations.js     Hero network animation
│   └── forms.js          Contact form validation
└── assets/               images, icons, logos, videos, fonts (see notes below)
```

## How To Run

1. Install VS Code.
2. Open the `cling-website` folder in VS Code (File > Open Folder).
3. Install the **Live Server** extension (by Ritwick Dey).
4. Right-click `index.html`.
5. Choose **Open with Live Server**.

Double-clicking `index.html` also works (file://), because all paths are relative and nothing is fetched from a server.
You need an internet connection for images and fonts (see Assets).

## How To Change Website

| To change | Edit |
|---|---|
| Text on the home page | `index.html` |
| Text on other pages | the file in `pages/` (same section markup as the home page) |
| Colors | the `:root{...}` block at the top of `css/style.css` (`--bl` blue, `--cy` cyan, `--red`, `--bg`) |
| Font | the Google Fonts `<link>` in every HTML `<head>` and `--f` in `css/style.css` |
| Navbar links and dropdowns | the `N=[...]` list in `js/navbar.js` (one place, used on every page) |
| Footer, WhatsApp button | `js/main.js` |
| Buttons and cards | `.btn`, `.card` in `css/style.css` |
| Animations | `css/animations.css` and `js/animations.js` |
| Phone, email, addresses | contact section in `index.html` and `pages/contact.html`, mailto in `js/forms.js`, WhatsApp link in `js/main.js` |

Note: the navbar and footer are injected by JavaScript so they exist in one file only. The header appears a moment after the page loads.

## Assets

Images are currently loaded from the company's website. To make the site fully offline, save the required images locally in assets/images/ and update their paths accordingly.

Icons are small inline SVGs (in `js/navbar.js`), so `assets/icons/` is empty.

## External Libraries

| Library | CDN URL | Purpose |
|---|---|---|
| Google Fonts (Manrope) | https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap | Typography |

No other libraries. Everything else is plain HTML, CSS and JavaScript.

## Important Notes

- **Placeholder pages:** `achievements`, `careers`, `products`, `industries`, `payment-gateways`, `portfolio`, `case-studies`, `blog`, `privacy-policy`, `terms-and-conditions`, `cancellation-refund-policy` have no content in the redesign yet. Each shows a button to the official page on clinginfotech.com. Fill them in with real content from Cling Info Tech (legal pages need their real legal text). No content was invented.
- **Contact form:** without a backend it opens the visitor's email app (`mailto:`). A real form needs a service or server (Formspree, EmailJS, or your own API).
- **Client logos:** the Clients page lists client names as text. Add real logos to `assets/logos/` if you have the right to use them.
- **Global presence:** listed countries come from the original site's Global Presence section.
- **Reduced motion:** users who prefer reduced motion see no animated counters or moving hero nodes.
