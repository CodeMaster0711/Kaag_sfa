# sfa

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Description of directory structure

### `resources/`

先方より送られたコーディングデータ一式になります。
HTMLを頂いたタイミングで随時更新をしていきます。

## Caution

`src/assets/style.css` は元のCSS (`resources/css/style.css`) より、以下の修正をしています。

1. `body#login` ⇒ `body` と `#p-login` のスタイルに分割  
※ `body` にIDを付与することができないため
2. `../img/` ⇒ `../assets/images/`
3. `.nav_menu`, `.popup` の `display: none;` 削除
