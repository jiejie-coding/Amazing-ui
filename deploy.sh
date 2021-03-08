# rm rf dist
yarn build
cd dist
git init
git add .
git commit -m "一键部署"
git branch -M master
git push -f git@github.com:jiejie-coding/Amazing-ui.git master:gh-pages

cd -