#!/usr/bin/env sh

set -e

yarn build

cd dist

cp ../README.md .

git init
git add -A
git commit -m 'chore: deploy'

git push -f git@github.com:x-bao/daiport.git master:gh-pages
cd -
rm -rf dist
