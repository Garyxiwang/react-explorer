export interface DemoItem {
  id: string;
  name: string;
  description: string;
}

export const demoList: DemoItem[] = [
  {
    id: "hooks",
    name: "React Hooks",
    description: "各种React Hooks的使用示例",
  },
  {
    id: "context",
    name: "Context API",
    description: "React Context API的使用示例",
  },
  {
    id: "state-management",
    name: "状态管理",
    description: "React状态管理方案对比",
  },
  { id: "performance", name: "性能优化", description: "React应用性能优化技巧" },
  { id: "patterns", name: "设计模式", description: "React常用设计模式示例" },
  {
    id: "suspense",
    name: "Suspense & Concurrent",
    description: "React Suspense和并发模式示例",
  },
  {
    id: "server-components",
    name: "服务器组件",
    description: "React Server Components示例",
  },
];
