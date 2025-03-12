import Link from "next/link";

export default function StateManagementPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">状态管理演示</h1>

      <div className="bg-purple-50 dark:bg-purple-900/30 p-6 rounded-lg mb-8">
        <p className="mb-2">
          状态管理是 React 应用中的核心概念，有多种方式可以管理应用状态。
        </p>
        <p>本演示将展示不同的状态管理方案及其适用场景。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">React 内置状态管理</h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              <span>useState</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              <span>useReducer</span>
            </li>
            <li className="flex items-center">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              <span>Context API</span>
            </li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">第三方状态管理库</h2>
          <ul className="space-y-3">
            <li>
              <Link 
                href="/examples/state-management/redux"
                className="flex items-center p-2 -ml-2 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors group"
              >
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2 group-hover:w-3 group-hover:h-3 transition-all"></span>
                <span className="font-medium">Redux</span>
                <span className="ml-2 text-xs px-2 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200 rounded-full">示例</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-auto text-gray-400 group-hover:text-gray-600 dark:text-gray-500 dark:group-hover:text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </Link>
            </li>
            <li className="flex items-center p-2 -ml-2">
              <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
              <span>MobX</span>
              <span className="ml-2 text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">即将推出</span>
            </li>
            <li className="flex items-center p-2 -ml-2">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              <span>Zustand</span>
              <span className="ml-2 text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">即将推出</span>
            </li>
            <li className="flex items-center p-2 -ml-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              <span>Jotai</span>
              <span className="ml-2 text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">即将推出</span>
            </li>
            <li className="flex items-center p-2 -ml-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              <span>Recoil</span>
              <span className="ml-2 text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">即将推出</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-3">状态管理最佳实践</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <li className="flex items-center">
            <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
            <span>状态提升</span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
            <span>状态下放</span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
            <span>状态分割</span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
            <span>状态持久化</span>
          </li>
          <li className="flex items-center">
            <span className="w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
            <span>服务器状态与客户端状态</span>
          </li>
        </ul>
      </div>

      <div className="text-center text-gray-500 text-sm">
        <p>更多示例将在后续添加...</p>
      </div>
    </div>
  );
}
