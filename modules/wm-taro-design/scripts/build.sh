#!/bin/bash

rm -rf ./doc_build
rm -rf ./dist
npx antm-doc-build
npm run build:h5
# npx prettier --write '**/*.{js,jsx,ts,tsx,md,html,css,less}'

# cd ./../taro-demo

# pwd
# npm run real:h5Doc

# cd  ./../taro-design
mkdir -p ./doc_build/demo
mv  ./dist/* ./doc_build/demo
# mv  ./../taro-demo/build/assets  ./doc_build/demo/assets

# mv  ./../taro-demo/build/index.html  ./doc_build/demo/index.html
