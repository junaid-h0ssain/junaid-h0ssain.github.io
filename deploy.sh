#!/bin/bash

if [ -z "$1" ]; then
  echo "Error: Please provide a commit message"
  echo "Usage: ./deploy.sh 'your commit message'"
  exit 1
fi

COMMIT_MESSAGE="$1"

echo "Building project..."
bun run build

echo "Copying dist to docs..."
cp -a dist/. docs/

echo "Staging changes..."
git add .

echo "Committing changes..."
git commit -m "$COMMIT_MESSAGE"

echo "Pushing to origin..."
git push origin main

echo "Done!"
