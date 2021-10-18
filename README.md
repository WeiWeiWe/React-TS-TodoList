# TODO LIST

* 使用自行從零搭建的 Webpack5 項目環境，開發一個 [TODO LIST](https://weiweiwe.github.io/react-ts-jest-todolist/) 項目，並依照項目需求添加需要的插件。
* 這裡主要說明 TODO LIST 項目，有關項目環境說明，可以點擊 [Webpack5 項目環境說明](https://github.com/WeiWeiWe/webpack5-react-ts-jest-template)。

## 使用技術
* 使用 styled-components 搭配 flex 佈局手刻頁面
* 使用 React-Hooks + TypeScript 進行組件開發
* 使用 Redux 進行數據管理
* 使用 React-Testing-Library 對 Hooks 組件進行測試
* 使用 Github Actions 進行自動化測試及部署到 GitHub Pages

## 測試方式
* 主要採用 BDD 測試開發方式
* 純 UI 展示組件採用單元測試
* Redux 數據邏輯整合組件採用整合測試

## 使用方式

### 開發環境

```sh
npm run start   
```

接著進入 [localhost:8080](http://localhost:8080) 即可。

### 打包專案

```sh
npm run build
```

打包的專案會在 dist 目錄下。
