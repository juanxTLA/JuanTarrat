npm install

set "BASE_URL=/JuanTarrat"
npm run build

git add .
git commit -m "Commit changes before switching branches"
cp -r build ../build_tmp

git checkout pages
git rm -r *
cp -r ../build_tmp/* .
git add .
git commit -m "Add build files"
git push origin pages