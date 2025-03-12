"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import Counter from "./components/Counter";
import Link from "next/link";

export default function ReduxPage() {
  return (
    <Provider store={store}>
      <div className="max-w-4xl mx-auto">
        {/* 面包屑导航 */}
        <div className="mb-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Link
            href="/examples/state-management"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          >
            状态管理
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mx-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="font-medium text-gray-700 dark:text-gray-300">
            Redux
          </span>
        </div>

        <h1 className="text-3xl font-bold mb-4">Redux 示例</h1>

        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-6">
          <p className="text-red-700 dark:text-red-300">
            Redux 是一个可预测的状态容器，用于管理应用程序状态。本示例展示了使用
            Redux Toolkit 实现的简单计数器。
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <Counter />
        </div>

        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-3">关于此示例</h2>
          <p className="mb-4">这个计数器示例展示了 Redux 的核心概念：</p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>使用 Redux Toolkit 创建 slice 和 store</li>
            <li>使用 React-Redux 连接 React 组件和 Redux store</li>
            <li>通过 dispatch actions 修改状态</li>
            <li>使用 selectors 读取状态</li>
          </ul>
          <p>通过这个简单的示例，您可以了解 Redux 的基本工作原理和使用方法。</p>
          
          <div className="mt-4 bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4">
            <h3 className="text-lg font-medium text-green-800 dark:text-green-300 mb-2">
              为什么使用 Redux Toolkit？
            </h3>
            <p className="text-green-700 dark:text-green-300 mb-2">
              本示例使用的是 Redux Toolkit，而不是手写传统的 Redux 代码。Redux 官方强烈推荐使用 Redux Toolkit 作为编写 Redux 逻辑的标准方式。
            </p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-green-700 dark:text-green-300">
              <li>减少样板代码：不需要手动编写 action types、action creators 和 switch-case reducers</li>
              <li>内置最佳实践：自动应用 Redux 开发者工具、immer 等</li>
              <li>简化异步逻辑：使用 createAsyncThunk 处理异步操作</li>
              <li>类型安全：更好的 TypeScript 集成</li>
            </ul>
            <p className="text-green-700 dark:text-green-300 mt-2 text-sm italic">
              不再建议手写传统的 Redux 代码，因为它需要编写大量重复的样板代码，容易出错且难以维护。
            </p>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-3">Redux 核心模式总结</h2>
          <h3 className="text-lg font-medium mt-4 mb-2">
            一个 Store，多个 Reducer，多个 View
          </h3>

          <div className="mb-4">
            <h4 className="font-medium text-gray-800 dark:text-gray-200">
              1. 一个应用只有一个 Store
            </h4>
            <ul className="list-disc pl-5 space-y-1 mb-2 text-sm">
              <li>Store 是整个应用状态的单一数据源</li>
              <li>所有状态变化都可以被追踪和调试</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="font-medium text-gray-800 dark:text-gray-200">
              2. Store 通过多个 Reducer 进行分割
            </h4>
            <ul className="list-disc pl-5 space-y-1 mb-2 text-sm">
              <li>
                每个功能模块有自己的 Reducer（在 Redux Toolkit 中称为 Slice）
              </li>
              <li>Reducer 负责处理特定部分状态的更新逻辑</li>
              <li>所有 Reducer 组合在一起形成完整的应用状态</li>
            </ul>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-x-auto my-3 shadow-inner">
              <pre className="whitespace-pre-wrap">
{`// store.ts
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    users: usersReducer,
    // 可以添加更多 reducer
  },
});`}
              </pre>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-medium text-gray-800 dark:text-gray-200">
              3. 多个 View 可以访问和操作同一个 Store
            </h4>
            <ul className="list-disc pl-5 space-y-1 mb-2 text-sm">
              <li>任何组件都可以通过 hooks 访问 Store 中的任何部分状态</li>
              <li>组件可以派发 action 来修改 Store 中的状态</li>
            </ul>
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-sm font-mono overflow-x-auto my-3 shadow-inner">
              <pre className="whitespace-pre-wrap">
{`// CounterComponent.tsx
const count = useSelector((state: RootState) => state.counter.value);
const dispatch = useDispatch();
dispatch(increment());

// TodoComponent.tsx (同一个 Store 的不同部分)
const todos = useSelector((state: RootState) => state.todos.items);
const dispatch = useDispatch();
dispatch(addTodo("新任务"));`}
              </pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200">
              这种模式的优势
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-sm">
              <li>状态集中管理：所有状态在一个地方，便于调试和追踪</li>
              <li>状态共享：不同组件可以访问共同的状态</li>
              <li>模块化：通过 Reducer 分割，保持代码的模块化和可维护性</li>
              <li>可预测性：状态更新遵循严格的单向数据流</li>
              <li>开发工具支持：强大的开发工具可以查看状态变化历史</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <Link
            href="/examples/state-management"
            className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            返回状态管理
          </Link>

          <a
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Redux Toolkit 文档
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </Provider>
  );
}
