#### 简介
解决异步action频繁show loading 和 hide loading

#### 安装
```bash
npm install nacl-vuex-loading
```

#### 使用
```javascript
import VuexLoading from 'vuex-loading'
const store = new Vuex.Store({
    plugins: [VuexLoading]
})

store.loading['{moduleName}/{actionName}'] // return true or false
```
