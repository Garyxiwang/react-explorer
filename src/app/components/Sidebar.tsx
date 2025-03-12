"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { demoList } from "@/data/demolist";

interface MenuItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  submenu?: MenuItem[];
  badge?: string;
  badgeColor?: string;
}

// 图标映射
const iconMap: Record<string, React.ReactNode> = {
  hooks: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
      />
    </svg>
  ),
  context: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  ),
  "state-management": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
  ),
  performance: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  ),
  patterns: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
      />
    </svg>
  ),
  suspense: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  "server-components": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
      />
    </svg>
  ),
};

// 子菜单映射
const submenuMap: Record<string, MenuItem[]> = {
  "state-management": [
    {
      title: "Redux",
      href: "/examples/state-management/redux",
      badge: "示例",
      badgeColor: "red",
    },
    {
      title: "MobX",
      href: "/examples/state-management/mobx",
      badge: "即将推出",
    },
    {
      title: "Zustand",
      href: "/examples/state-management/zustand",
      badge: "即将推出",
    },
    {
      title: "Jotai",
      href: "/examples/state-management/jotai",
      badge: "即将推出",
    },
    {
      title: "Recoil",
      href: "/examples/state-management/recoil",
      badge: "即将推出",
    },
  ],
};

// 将 demoList 转换为 MenuItem 数组
const menuItems: MenuItem[] = demoList.map((demo) => ({
  title: demo.name,
  href: `/examples/${demo.id}`,
  icon: iconMap[demo.id],
  submenu: submenuMap[demo.id],
}));

export default function Sidebar() {
  const pathname = usePathname();
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({
    "/examples/state-management": pathname.includes(
      "/examples/state-management"
    ),
  });

  const toggleMenu = (href: string, event: React.MouseEvent) => {
    event.preventDefault();
    setExpandedMenus((prev) => ({
      ...prev,
      [href]: !prev[href],
    }));
  };

  const isActive = (href: string) => {
    return pathname === href;
  };

  const isActiveParent = (href: string) => {
    return pathname.startsWith(href) && pathname !== href;
  };

  const renderMenuItem = (item: MenuItem) => {
    const active = isActive(item.href);
    const activeParent = isActiveParent(item.href);
    const expanded = expandedMenus[item.href] || false;
    const hasSubmenu = item.submenu && item.submenu.length > 0;

    return (
      <li
        key={item.href}
        className="border-b border-gray-100 dark:border-gray-800"
      >
        <div className="flex flex-col">
          <Link
            href={hasSubmenu ? "#" : item.href}
            onClick={hasSubmenu ? (e) => toggleMenu(item.href, e) : undefined}
            className={`
              flex items-center py-3 px-4 w-full relative
              ${active ? "text-blue-600 dark:text-blue-400 font-medium" : ""}
              ${
                activeParent
                  ? "text-blue-600 dark:text-blue-400 font-medium"
                  : ""
              }
              ${
                !active && !activeParent
                  ? "hover:bg-gray-50 dark:hover:bg-gray-900"
                  : ""
              }
            `}
          >
            {item.icon && (
              <span className="mr-3 text-gray-500 dark:text-gray-400">
                {item.icon}
              </span>
            )}
            <span>{item.title}</span>
            {hasSubmenu && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 ml-auto transition-transform ${
                  expanded ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
            {item.badge && (
              <span
                className={`ml-2 text-xs px-2 py-0.5 rounded-full 
                  ${
                    item.badgeColor === "red"
                      ? "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                  }`}
              >
                {item.badge}
              </span>
            )}
            {(active || activeParent) && (
              <span
                className="absolute inset-y-0 left-0 w-1 bg-blue-500 rounded-r"
                aria-hidden="true"
              ></span>
            )}
          </Link>

          {hasSubmenu && expanded && (
            <div
              className={`bg-gray-50 dark:bg-gray-900 overflow-hidden transition-all duration-300 ${
                expanded ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul className="py-2">
                {item.submenu?.map((subItem) => (
                  <li key={subItem.href}>
                    <Link
                      href={subItem.href}
                      className={`
                        flex items-center py-2 pl-12 pr-4
                        ${
                          isActive(subItem.href)
                            ? "text-blue-600 dark:text-blue-400 font-medium"
                            : "text-gray-600 dark:text-gray-300"
                        }
                        hover:bg-gray-100 dark:hover:bg-gray-800
                      `}
                    >
                      <span>{subItem.title}</span>
                      {subItem.badge && (
                        <span
                          className={`ml-2 text-xs px-2 py-0.5 rounded-full 
                            ${
                              subItem.badgeColor === "red"
                                ? "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
                                : "bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400"
                            }`}
                        >
                          {subItem.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </li>
    );
  };

  return (
    <div className="w-64 h-screen overflow-y-auto bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800">
      <div className="p-4 border-b border-gray-200 dark:border-gray-800">
        <Link href="/examples" className="text-xl font-bold">
          React Explorer
        </Link>
      </div>
      <nav>
        <ul className="divide-y divide-gray-100 dark:divide-gray-800">
          {menuItems.map((item) => renderMenuItem(item))}
        </ul>
      </nav>
    </div>
  );
}
