export default function HooksPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">React Hooks 演示</h1>
      
      <div className="bg-yellow-50 dark:bg-yellow-900/30 p-6 rounded-lg mb-8">
        <p className="mb-2">
          React Hooks 是 React 16.8 引入的特性，它允许你在不编写 class 的情况下使用 state 和其他 React 特性。
        </p>
        <p>
          本演示将展示各种 React Hooks 的使用方法和最佳实践。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">基础 Hooks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>useState - 状态管理</li>
            <li>useEffect - 副作用处理</li>
            <li>useContext - 上下文访问</li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">额外 Hooks</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>useReducer - 复杂状态管理</li>
            <li>useCallback - 记忆化回调函数</li>
            <li>useMemo - 记忆化计算结果</li>
            <li>useRef - 引用访问</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm">
        <p>更多示例将在后续添加...</p>
      </div>
    </div>
  );
} 