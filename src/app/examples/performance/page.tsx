export default function PerformancePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">性能优化演示</h1>
      
      <div className="bg-red-50 dark:bg-red-900/30 p-6 rounded-lg mb-8">
        <p className="mb-2">
          性能优化是 React 应用开发中的重要环节，良好的性能优化可以提升用户体验。
        </p>
        <p>
          本演示将展示 React 应用中常见的性能优化技巧和最佳实践。
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">组件优化</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>React.memo</li>
            <li>useMemo</li>
            <li>useCallback</li>
            <li>避免不必要的渲染</li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">数据优化</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>数据结构选择</li>
            <li>数据不可变性</li>
            <li>数据分片</li>
            <li>虚拟列表</li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">加载优化</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>代码分割</li>
            <li>懒加载</li>
            <li>预加载</li>
            <li>资源优化</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm">
        <p>更多示例将在后续添加...</p>
      </div>
    </div>
  );
} 