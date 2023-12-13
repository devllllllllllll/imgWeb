# React Project Deployment to GitHub Pages using `react-gh-pages`

This guide will walk you through the process of deploying your React project to GitHub Pages using the `react-gh-pages` package. The steps include deploying the project locally and then pushing it to GitHub before finally deploying it to GitHub Pages.

## Prerequisites

Before you begin, make sure you have the following installed:

- Node.js and npm
- Git

## Local Deployment

1. **Clone the Repository:**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Project Locally:**

   ```bash
   npm start
   ```

   Open your browser and visit `http://localhost:3000` to verify that your React app is running locally.

## Commit and Push to GitHub

4. **Commit Your Changes:**

   ```bash
   git add .
   git commit -m "Your commit message"
   ```

5. **Push to GitHub:**
   ```bash
   git push origin main
   ```

## Deploy to GitHub Pages

6. **Install `react-gh-pages`:**

   ```bash
   npm install --save-dev gh-pages
   ```

7. **Add `deploy` Script to `package.json`:**
   Add the following lines to your `package.json` file:

   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d build"
   }
   ```

8. **Deploy to GitHub Pages:**
   Run the deploy script:

   ```bash
   npm run deploy
   ```

   This script will build your React app and deploy it to the `gh-pages` branch on GitHub.

9. **Access Your Deployed App:**
   After the deployment process is complete, your app will be available at `https://<username>.github.io/<repository-name>`.

## Troubleshooting

- **Ensure your `homepage` field is set in `package.json`:**

  ```json
  "homepage": "https://<username>.github.io/<repository-name>"
  ```

- **Ensure the `main` branch is the default branch in your GitHub repository settings.**

- **Check the GitHub Pages Settings:**
  Verify that the GitHub Pages settings in your repository are configured to use the `gh-pages` branch.

By following these steps, you should have successfully deployed your React project to GitHub Pages using `react-gh-pages`. If you encounter any issues, refer to the documentation for both `create-react-app` and `react-gh-pages` for more detailed information.
