#!/bin/bash
# Exit immediately if a pipeline returns a non-zero status.
set -e

echo "🚀 Starting deployment action"
REMOTE_REPO="https://${GITHUB_ACTOR}:${GITHUB_TOKEN}@github.com/${GITHUB_REPOSITORY}.git"
# We need to clone the repo here.
# Remember, our Docker container is practically pristine at this point
git clone $REMOTE_REPO repo
cd repo
echo "⚡️ Installing project dependencies..."
npm install
# Build the website using Jekyll
echo "⚛️ Building React app..."
npm run build
cd build
echo "☁️ Publishing app to gh-pages..."
rm -f README.md
git init
git config user.name "${GITHUB_ACTOR}"
git config user.email "${GITHUB_ACTOR}@users.noreply.github.com"
git add .
git commit -m "Github Actions new build - $(date)"
echo "Build branch ready to go. Pushing to Github..."
git push --force $REMOTE_REPO master:gh-pages
echo "🎉 New version deployed 🎊"