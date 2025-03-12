import Link from "next/link";
import { demoList } from "@/data/demolist";

export default function Home() {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <header className="mb-12 text-center">
        <h1 className="text-3xl font-bold mb-4">React 技术演示</h1>
        <p className="text-gray-600 dark:text-gray-400">
          旨在展示和解释各种 React 核心概念、最佳实践和常用技术。
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          项目包含多个独立的技术演示模块，每个模块专注于一个特定的 React
          技术点。
        </p>
      </header>

      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {demoList.map((demo) => (
            <Link
              key={demo.id}
              href={`/examples/${demo.id}`}
              className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold mb-2">{demo.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">
                {demo.description}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <footer className="mt-16 text-center text-gray-500 text-sm">
        <p>
          React 技术演示项目 - 用于学习和参考,项目地址:
          <a
            href="https://github.com/Garyxiwang/react-explorer"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/Garyxiwang/react-explorer
          </a>
        </p>
      </footer>
    </div>
  );
}
