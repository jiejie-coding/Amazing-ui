# rm rf dist
yarn build
cd dist
git init
git add .
git commit -m "一键部署"
git branch -M master
git remote add origin git@github.com:jiejie-coding/AmazingUI.git
git push -f -u origin master
cd -