# Portfolio — Language Gateway & Project Filter

Minimal React (Vite) app with a **Language Gateway** landing screen and structure ready for your **Project Filter** (Consulting / Bioinformatics / Software) and **Bento** consulting cards.

## What’s included

- **Language Gateway**  
  Dark, minimal entry screen with three options:
  - **English** 
  - **日本語** 
  - **简体中文** 

  Selected language is stored in `localStorage` as `portfolio-lang` (`en` | `ja` | `zh`).  
  Scrolling ticker: Sydney | London | San Diego | Shanghai | Tokyo.

- **Next steps you can add**
  - Main site that reads `portfolio-lang` and shows content in that language.
  - Project filter by category: Consulting (Strategic Impact), Bioinformatics, Software.
  - Bento-style cards for consulting (headline, role, challenge, result, artifacts).

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (e.g. `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview   # optional: preview production build locally
```

The built site is in the `dist/` folder (static HTML, CSS, JS). Use that folder to deploy.

---

## Deploy & share (put the site online)

### Option 1: Vercel (recommended — free and simple)

1. Create an account at [vercel.com](https://vercel.com) (GitHub login works).
2. Install the Vercel CLI (optional): `npm i -g vercel`
3. **From your project folder** run:
   ```bash
   cd "/Users/ailinna/Desktop/intern find/my page"
   npm run build
   npx vercel --prod
   ```
   Or **without CLI**: push your project to GitHub, then at vercel.com click “Add New Project”, import the repo, leave the default “Build Command” as `npm run build` and “Output Directory” as `dist`, then Deploy.
4. Vercel gives you a URL like `your-project.vercel.app`. Share that link.

### Option 2: Netlify

1. Create an account at [netlify.com](https://netlify.com).
2. Run `npm run build` in the project folder.
3. Drag and drop the **`dist`** folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or connect your GitHub repo and set:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Netlify gives you a URL like `random-name.netlify.app`. You can change it in Site settings.

### Option 3: GitHub Pages

This repo includes a workflow that deploys to GitHub Pages automatically.

1. Push the project to a GitHub repository (e.g. `my-page` or `ailinna-portfolio`).
2. In the repo go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to the `main` (or `master`) branch. The workflow will build and deploy.
5. Your site will be at **`https://<username>.github.io/<repo-name>/`** (e.g. `https://elennastar006.github.io/ailinna-portfolio/`).

### Quick test before sharing

After `npm run build`, run `npm run preview` and open the URL (e.g. `http://localhost:4173`) to check that the production build works the same as locally.

---

*Consulting: Impact Summaries & Methodologies. Bioinformatics: equations, accuracy plots, microenvironments. Software: pipelines, analytics, brain–LLM diagrams.*
