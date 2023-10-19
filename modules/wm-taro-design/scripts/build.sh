#!/bin/bash

rm -rf ./doc_build

npx antm-doc-build

npx prettier --write '**/*.{js,jsx,ts,tsx,md,html,css,less}'

cd ./../taro-demo

pwd
npm run real:h5Doc

cd  ./../taro-design
mkdir -p ./doc_build/demo
mv  ./../taro-demo/build/js  ./doc_build/demo/js
mv  ./../taro-demo/build/assets  ./doc_build/demo/assets

mv  ./../taro-demo/build/index.html  ./doc_build/demo/index.html
