export default function StateManagementPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">状态管理演示</h1>
      
      <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg mb-8">
        <p className="mb-2">
          状态管理是 React 应用中的核心概念，有多种方式可以管理应用状态。
        </p>
        <p>
          本演示将展示不同的状态管理方案及其适用场景。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">React 内置状态管理</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>useState</li>
            <li>useReducer</li>
            <li>Context API</li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">第三方状态管理库</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Redux</li>
            <li>MobX</li>
            <li>Zustand</li>
            <li>Jotai</li>
            <li>Recoil</li>
          </ul>
        </div>
      </div>

      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-3">状态管理最佳实践</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>状态提升</li>
          <li>状态下放</li>
          <li>状态分割</li>
          <li>状态持久化</li>
          <li>服务器状态与客户端状态</li>
        </ul>
      </div>

      <div className="text-center text-gray-500 text-sm">
        <p>更多示例将在后续添加...</p>
      </div>
    </div>
  );
} 