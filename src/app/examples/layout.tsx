import Link from "next/link";
import { ReactNode } from "react";

export default function ExamplesLayout({
  children,
}: {
  children: ReactNode;
}) {
  // 定义React技术演示列表（与首页保持一致）
  const demoList = [
    { id: "hooks", name: "React Hooks", description: "各种React Hooks的使用示例" },
    { id: "context", name: "Context API", description: "React Context API的使用示例" },
    { id: "state-management", name: "状态管理", description: "React状态管理方案对比" },
    { id: "performance", name: "性能优化", description: "React应用性能优化技巧" },
    { id: "patterns", name: "设计模式", description: "React常用设计模式示例" },
    { id: "suspense", name: "Suspense & Concurrent", description: "React Suspense和并发模式示例" },
    { id: "server-components", name: "服务器组件", description: "React Server Components示例" },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* 侧边导航 */}
      <aside className="w-full md:w-64 bg-gray-100 dark:bg-gray-900 p-6">
        <Link href="/" className="block text-xl font-bold mb-6">
          React 技术演示
        </Link>
        <nav>
          <ul className="space-y-2">
            {demoList.map((demo) => (
              <li key={demo.id}>
                <Link
                  href={`/examples/${demo.id}`}
                  className="block p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                >
                  {demo.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* 主内容区 */}
      <main className="flex-1 p-6 md:p-8">
        {children}
      </main>
    </div>
  );
} 