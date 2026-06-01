#!/bin/bash
# Sync script from q-repo to deploy-repo (soundpulse)

echo "=== SOUNDPULSE DEPLOY ==="
echo "Copying soundpulse.html to ../soundpulse/index.html..."
cp soundpulse.html ../soundpulse/index.html

echo "Pushing changes to GitHub Pages (hktcr.github.io/soundpulse)..."
cd ../soundpulse
git add index.html
git commit -m "deploy: sync from q/soundpulse.html" || true
git push origin main

echo "Deploy complete!"
