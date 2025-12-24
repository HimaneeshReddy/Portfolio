Himaneesh — Static site

This repository contains a small static site (HTML/CSS/JS).

Quick deploy steps

1. Initialize git and commit the site:

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
```

2. Create a GitHub repo (via website or `gh repo create`) and add it as `origin`:

```bash
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```

3. The included GitHub Actions workflow will deploy the site to GitHub Pages automatically on pushes to `main` and publish to the `gh-pages` branch.

Site URL: `https://<your-username>.github.io/<repo>` (may take a minute after first deploy).

If you prefer a different publish method, you can enable Pages from the repo settings instead.