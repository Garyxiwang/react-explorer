# React Explorer

这是一个基于 [Next.js](https://nextjs.org) 构建的 React Explorer 项目，旨在展示和解释各种 React 核心概念、最佳实践和常用技术。项目包含多个独立的技术演示模块，每个模块专注于一个特定的 React 技术点。

## 项目用途

本项目主要用于：

1. **学习参考**：为 React 开发者提供各种技术点的实际示例和最佳实践
2. **技术演示**：直观展示 React 各种功能和特性的使用方法
3. **代码示例**：提供可复用的代码片段和模式，方便在实际项目中应用

## 目录结构

项目采用 Next.js App Router 结构组织，主要目录如下：

```
react-explorer/
├── src/
│   ├── app/                    # 应用主目录
│   │   ├── page.tsx            # 首页
│   │   ├── examples/           # 技术演示目录
│   │   │   ├── hooks/          # React Hooks 演示
│   │   │   ├── context/        # Context API 演示
│   │   │   ├── state-management/ # 状态管理演示
│   │   │   ├── performance/    # 性能优化演示
│   │   │   ├── patterns/       # 设计模式演示
│   │   │   ├── suspense/       # Suspense 和并发模式演示
│   │   │   └── server-components/ # 服务器组件演示
│   │   └── layout.tsx          # 根布局
│   └── components/             # 共享组件
├── public/                     # 静态资源
└── ...                         # 其他配置文件
```

## 技术演示模块

项目包含以下技术演示模块：

1. **React Hooks**
   - 基础 Hooks (useState, useEffect, useContext)
   - 额外 Hooks (useReducer, useCallback, useMemo, useRef)
   - 自定义 Hooks

2. **Context API**
   - Context 基础用法
   - Provider 和 Consumer
   - 与 Hooks 结合使用
   - 性能优化

3. **状态管理**
   - React 内置状态管理
   - 第三方状态管理库对比
   - 状态管理最佳实践

4. **性能优化**
   - 组件优化
   - 数据优化
   - 加载优化

5. **设计模式**
   - 组合模式
   - 行为模式
   - 其他常用模式

6. **Suspense 和并发模式**
   - Suspense 基础
   - 并发模式
   - 高级用法

7. **服务器组件**
   - Server Components 基础
   - 高级用法
   - 实际应用

## 如何使用

### 安装依赖

```bash
npm install
# 或
yarn install
# 或
pnpm install
```

### 启动开发服务器

```bash
npm run dev
# 或
yarn dev
# 或
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看项目。

## 贡献

欢迎提交 Issue 或 Pull Request 来完善本项目。您可以：

- 添加新的技术演示
- 完善现有演示的代码和文档
- 修复错误或改进性能
- 提供更好的示例和解释

## 许可

MIT
