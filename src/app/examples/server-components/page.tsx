export default function ServerComponentsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">React Server Components 演示</h1>
      
      <div className="bg-indigo-50 dark:bg-indigo-900/30 p-6 rounded-lg mb-8">
        <p className="mb-2">
          React Server Components 是 React 的新特性，它允许开发者创建在服务器上渲染并且可以与客户端组件无缝集成的组件。
        </p>
        <p>
          本演示将展示 React Server Components 的使用方法和最佳实践。
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Server Components 基础</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>服务器组件与客户端组件的区别</li>
            <li>服务器组件的限制</li>
            <li>数据获取</li>
            <li>服务器组件与客户端组件的交互</li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">高级用法</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>流式渲染</li>
            <li>嵌套的服务器组件</li>
            <li>服务器组件与 Suspense</li>
            <li>性能优化</li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">实际应用</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>数据库访问</li>
            <li>文件系统操作</li>
            <li>API 调用</li>
            <li>身份验证和授权</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm">
        <p>更多示例将在后续添加...</p>
      </div>
    </div>
  );
} 