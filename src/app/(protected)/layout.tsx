"use client";

import Sidebar from "@/components/sidebar";
import { jwtDecode } from "jwt-decode";
import { ReactNode, useEffect, useState } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    async function getAuth() {
      const cookies = document.cookie.split("; ").reduce((acc, current) => {
        const [name, value] = current.split("=");
        acc[name] = value;
        return acc;
      }, {} as Record<string, string>);

      const authToken = cookies["auth_token"];
      console.log(authToken);
      if (authToken) {
        try {
          const decoded = jwtDecode(authToken);
          // @ts-expect-error decoded has role
          setRole(decoded.role || null);
        } catch (err) {
          console.error("Failed to decode auth_token:", err);
        }
      }
    }

    getAuth();
  }, []);

  if (role === "ADMIN") {
    return <div>{children}</div>;
  }

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
