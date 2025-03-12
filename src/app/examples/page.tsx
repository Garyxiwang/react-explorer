export default function ExamplesPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">React 技术演示</h1>

      <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-semibold mb-3">欢迎使用 React 技术演示</h2>
        <p className="mb-4">
          这个项目包含了各种 React
          相关技术的演示和示例代码，帮助你更好地理解和掌握 React
          的核心概念和最佳实践。
        </p>
        <p>
          请从左侧导航选择一个技术点进行学习，或者点击下方的&quot;开始学习&quot;按钮。
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h3 className="text-lg font-semibold mb-2">如何使用这个演示项目？</h3>
          <p className="text-gray-700 dark:text-gray-300">
            每个技术演示都包含了详细的代码示例和解释，你可以通过阅读代码和注释来学习相关概念。
            同时，你也可以直接在浏览器中与这些示例进行交互，以便更好地理解它们的工作原理。
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold mb-2">项目结构</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3">
            本项目使用 Next.js
            构建，每个技术点都有自己的目录，包含相关的示例和说明：
          </p>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                /examples/hooks
              </code>
              - React Hooks 相关示例
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                /examples/context
              </code>
              - Context API 相关示例
            </li>
            <li>
              <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">
                /examples/state-management
              </code>
              - 状态管理相关示例
            </li>
            <li>... 等等</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
