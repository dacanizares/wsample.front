import type { Metadata } from "next";
import "./globals.css";
import DebugResponsive from "@/components/DebugResponsive";


export const metadata: Metadata = {
  title: "SEM Frontend",
  description: "SEM Frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% w-full h-auto p-2 mb-10 border-b-2 border-teal-400 shadow-md">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold text-white">Simple Employee Maintenance</h1>
          </div>
        </div>
        <div className="container mx-auto">
          {children}
        </div>
        { process.env.DEBUG === 'true' && <DebugResponsive />} 
      </body>
    </html>
  );
}
