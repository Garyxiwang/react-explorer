export default function SuspensePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Suspense 和并发模式演示</h1>
      
      <div className="bg-orange-50 dark:bg-orange-900/30 p-6 rounded-lg mb-8">
        <p className="mb-2">
          React Suspense 和并发模式是 React 的新特性，它们可以帮助我们更好地处理异步操作和提升用户体验。
        </p>
        <p>
          本演示将展示 Suspense 和并发模式的使用方法和最佳实践。
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Suspense 基础</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Suspense 组件</li>
            <li>fallback 属性</li>
            <li>懒加载组件</li>
            <li>数据获取</li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">并发模式</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>并发渲染</li>
            <li>useTransition</li>
            <li>useDeferredValue</li>
            <li>startTransition</li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">高级用法</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>SuspenseList</li>
            <li>嵌套 Suspense</li>
            <li>错误边界</li>
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