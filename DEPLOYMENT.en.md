# GitHub Pages Deployment

This portfolio is configured to automatically deploy to GitHub Pages using GitHub Actions.

## 🚀 Automatic Setup

### Configuration Files

1. **`.github/workflows/nextjs.yml`** - GitHub Actions workflow
2. **`next.config.ts`** - Next.js configuration for static export
3. **`public/.nojekyll`** - Disables Jekyll on GitHub Pages

### Deployment Process

1. **Push to main** - Workflow runs automatically
2. **Build** - Next.js generates static version
3. **Export** - Creates `out/` folder with static files
4. **Deploy** - Uploads to GitHub Pages

## 🐛 Common Troubleshooting

### Jekyll/SCSS Error

If you see errors like:
```
Jekyll::Converters::Scss encountered an error while converting 'assets/css/style.scss':
No such file or directory @ dir_chdir0 - /github/workspace/docs
```

**Solution:**
1. Verify `public/.nojekyll` exists
2. Workflow must create `.nojekyll` in `out/` folder
3. GitHub Pages must be configured to use **GitHub Actions** (not Jekyll)

**Steps:**
1. Go to **Settings** → **Pages**
2. In **Source**, select **GitHub Actions**
3. DO NOT select "Deploy from a branch"

### Jekyll Files Verification

```bash
# Run diagnostic script
./scripts/verify-deploy.sh

# Or manually:
ls -la public/.nojekyll  # Must exist
ls -la out/.nojekyll     # Must exist after build
```

## 🛠️ Manual Configuration

### 1. Configure GitHub Pages

1. Go to **Settings** → **Pages** in your repository
2. Select **Source**: GitHub Actions
3. Deployment will be automatic with each push

### 2. Repository Name

If your repository is not named `porfolio`, update in `next.config.ts`:

```typescript
// Change 'porfolio' to your repository name
assetPrefix: '/your-repo-name',
basePath: '/your-repo-name',
```

### 3. Environment Variables

The workflow automatically uses:
- `NODE_ENV=production` for build
- Automatically detects package manager (npm/yarn)

## 🔧 Local Build

To test the build locally:

```bash
# Production build
NODE_ENV=production npm run build

# Verify generated files
ls -la out/

# Preview locally
npm run preview
```

## 📋 Pre-deployment Checklist

- [ ] Repository configured for GitHub Actions (not Jekyll)
- [ ] `public/.nojekyll` file exists
- [ ] Workflow creates `.nojekyll` in `out/`
- [ ] Local build works without errors
- [ ] Files in `out/` have correct prefixes

## 🚨 Emergency Fixes

### Force Redeploy
```bash
git commit --allow-empty -m "Force redeploy"
git push
```

### Clean and Rebuild
```bash
npm run clean
npm run build:prod
```

### Verify Deployment
```bash
npm run deploy:check
```

## 📝 Custom Domain (Optional)

To use a custom domain:

1. Add `CNAME` file to `public/` with your domain
2. Configure DNS records with your domain provider
3. Update `next.config.ts` to remove `basePath` and `assetPrefix`

## 🔍 Debugging

### Check Build Logs
1. Go to **Actions** tab in GitHub
2. Click on the failing workflow
3. Expand each step to see detailed logs

### Common Issues
- **Missing .nojekyll**: Check if file exists in both `public/` and `out/`
- **Wrong source**: Ensure Pages is set to "GitHub Actions"
- **Build failures**: Check for TypeScript or lint errors
- **Asset loading**: Verify `basePath` configuration

## 📚 References

- [GitHub Pages + Next.js](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports#github-pages)
- [Disabling Jekyll](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#static-site-generators)
- [GitHub Actions for Next.js](https://github.com/actions/starter-workflows/blob/main/pages/nextjs.yml)

## 🌍 Language Versions

- [🇪🇸 Español](DEPLOYMENT.md)
- [🇺🇸 English](DEPLOYMENT.en.md) (This file)
