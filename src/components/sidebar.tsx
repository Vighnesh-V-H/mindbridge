"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/dashboard", icon: "📊", label: "Dashboard" },
    { href: "/ai-support", icon: "🤖", label: "AI Support Chat" },
    { href: "/appointments", icon: "📅", label: "Book Appointment" },
    { href: "/resources", icon: "📚", label: "Resource Hub" },
    { href: "/peersupport", icon: "👥", label: "Peer Support" },
    { href: "/assessment", icon: "📋", label: "Self Assessment" },
    { href: "/admin", icon: "⚙️", label: "Admin Dashboard", hidden: true },
  ];

  return (
    <nav className='w-[280px] fixed h-screen overflow-y-auto bg-white/95 backdrop-blur-xl p-6 shadow-lg rounded-r-2xl z-50'>
      <div className='flex items-center gap-2 text-2xl font-bold text-indigo-600 mb-8 px-2'>
        🧠 MindBridge
      </div>

      {navItems.map(
        (item) =>
          !item.hidden && (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium mb-1
                ${
                  pathname === item.href
                    ? "bg-gradient-to-tr from-indigo-600 to-violet-600 text-white translate-x-1"
                    : "text-slate-500 hover:bg-gradient-to-tr hover:from-indigo-600 hover:to-violet-600 hover:text-white"
                }`}>
              <span className='text-lg'>{item.icon}</span>
              {item.label}
            </Link>
          )
      )}

      <button className='w-[90%] mx-auto block mt-8 bg-gradient-to-tr from-indigo-600 to-violet-600 text-white py-3 rounded-lg font-semibold hover:shadow-xl transition'>
        Logout
      </button>
    </nav>
  );
}
