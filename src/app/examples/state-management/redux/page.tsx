'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import Counter from './components/Counter';
import Link from 'next/link';

export default function ReduxPage() {
  return (
    <Provider store={store}>
      <div className="max-w-4xl mx-auto">
        {/* 面包屑导航 */}
        <div className="mb-6 flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Link href="/examples/state-management" className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            状态管理
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="font-medium text-gray-700 dark:text-gray-300">Redux</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Redux 示例</h1>
        
        <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-6">
          <p className="text-red-700 dark:text-red-300">
            Redux 是一个可预测的状态容器，用于管理应用程序状态。本示例展示了使用 Redux Toolkit 实现的简单计数器。
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <Counter />
        </div>
        
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-3">关于此示例</h2>
          <p className="mb-4">
            这个计数器示例展示了 Redux 的核心概念：
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-4">
            <li>使用 Redux Toolkit 创建 slice 和 store</li>
            <li>使用 React-Redux 连接 React 组件和 Redux store</li>
            <li>通过 dispatch actions 修改状态</li>
            <li>使用 selectors 读取状态</li>
          </ul>
          <p>
            通过这个简单的示例，您可以了解 Redux 的基本工作原理和使用方法。
          </p>
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            href="/examples/state-management" 
            className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </Provider>
  );
}
