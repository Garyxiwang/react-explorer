export default function ContextPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Context API 演示</h1>
      
      <div className="bg-green-50 dark:bg-green-900/30 p-6 rounded-lg mb-8">
        <p className="mb-2">
          Context API 提供了一种在组件树中共享数据的方法，而不必通过 props 显式地传递数据。
        </p>
        <p>
          本演示将展示 Context API 的使用方法和最佳实践。
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Context API 基础</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>创建 Context</li>
            <li>提供 Context (Provider)</li>
            <li>消费 Context (Consumer)</li>
            <li>使用 useContext Hook</li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Context API 高级用法</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>动态 Context</li>
            <li>嵌套 Context</li>
            <li>Context 与 Reducer 结合使用</li>
            <li>性能优化</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm">
        <p>更多示例将在后续添加...</p>
      </div>
    </div>
  );
} 