"use client";

import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className="font-sans text-black bg-[url('/ocean.jpg')] bg-cover bg-center min-h-screen">
        <div className='flex min-h-screen'>
          <Sidebar />
          <main className='flex-1 ml-[280px] p-8 bg-white/90 rounded-[20px] shadow-lg min-h-screen'>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
