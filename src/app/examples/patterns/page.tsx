export default function PatternsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">React 设计模式演示</h1>
      
      <div className="bg-blue-50 dark:bg-blue-900/30 p-6 rounded-lg mb-8">
        <p className="mb-2">
          设计模式是解决特定问题的可复用方案，React 中有许多常用的设计模式可以帮助我们更好地组织代码。
        </p>
        <p>
          本演示将展示 React 中常见的设计模式及其应用场景。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">组合模式</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>组件组合</li>
            <li>Compound Components</li>
            <li>Render Props</li>
            <li>Higher-Order Components (HOC)</li>
          </ul>
        </div>

        <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-3">行为模式</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Container/Presentational</li>
            <li>Custom Hooks</li>
            <li>Provider Pattern</li>
            <li>Observer Pattern</li>
          </ul>
        </div>
      </div>

      <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-3">其他常用模式</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Controlled/Uncontrolled Components</li>
          <li>State Reducer Pattern</li>
          <li>Props Getters</li>
          <li>State Machines</li>
        </ul>
      </div>

      <div className="text-center text-gray-500 text-sm">
        <p>更多示例将在后续添加...</p>
      </div>
    </div>
  );
} 