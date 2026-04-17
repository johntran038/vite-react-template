# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# How to Deploy

Make sure your repository is empty before moving this template code into your project.

---

## 1. Set Up First Push

After moving the template code into your project:

1. Open **vite.config.js** and update the `base` value:
   ```js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'

   // https://vitejs.dev/config/
   export default defineConfig({
     plugins: [react()],
     base: "/[your repo name]/"
   })
   ```
   Replace `[your repo name]` with the actual name of your GitHub repository.

2. Install dependencies:
   ```
   npm install
   ```

3. **IMPORTANT:** Build the project before deploying:
   ```
   npm run build
   ```

4. Commit and push your initial code:
   ```
   git add .
   git commit -m "first push"
   git push
   ```

---

## 2. Set Up Second Push (Deployment Step)

1. After your first push, go to your repository’s GitHub Pages settings:
   https://github.com/[your_username]/[your_repo_name]/settings/pages
   
   ( Replace `[your_username]` with your username and `[your_repo_name]` with your repository. )

3. Under **Build and deployment**, set **Branch** to `gh-pages`.

4. Click **Save**.

5. Make another push to trigger deployment:
   ```
   git add .
   git commit -m "deploy"
   git push
   ```

6. Once GitHub Pages finishes deploying, your site will be available by viewing the **Actions** tab or at a URL similar to:
   [https://[your_username].github.io/[your_repo_name]/](https://your_username.github.io/your_repo_name/)

   ( Replace `[your_username]` with your username and `[your_repo_name]` with your repository. )
