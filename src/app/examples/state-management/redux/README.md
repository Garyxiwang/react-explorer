# Redux 模块

这是一个独立的 Redux 模块，可以单独安装和运行。

## 安装

在当前目录下运行：

```bash
npm install
# 或者
yarn
# 或者
pnpm install
```

## 开发

```bash
# 构建模块
npm run build
# 或者
yarn build
# 或者
pnpm build

# 运行测试
npm test
# 或者
yarn test
# 或者
pnpm test
```

## 在主项目中使用

这个模块可以在主项目中直接使用，也可以作为独立模块使用。

### 作为独立模块

1. 在主项目的 package.json 中添加依赖：

```json
"dependencies": {
  "react-explorer-redux": "file:./src/app/examples/state-management/redux"
}
```

2. 然后在主项目中安装依赖：

```bash
npm install
# 或者
yarn
# 或者
pnpm install
```

3. 在代码中导入和使用：

```tsx
import { Provider } from 'react-redux';
import store, { increment, decrement } from 'react-explorer-redux';

function App() {
  return (
    <Provider store={store}>
      {/* 你的应用组件 */}
    </Provider>
  );
}
```

### 直接使用

直接从相对路径导入：

```tsx
import { Provider } from 'react-redux';
import store from './redux';

function App() {
  return (
    <Provider store={store}>
      {/* 你的应用组件 */}
    </Provider>
  );
}
``` 