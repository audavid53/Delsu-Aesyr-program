import React from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "./sidebar";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className={cn("min-h-screen bg-white flex", className)}>
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
    </div>
  );
}

interface MainContentProps {
  children: React.ReactNode;
  rightSidebar?: React.ReactNode;
  className?: string;
}

export function MainContent({
  children,
  rightSidebar,
  className,
}: MainContentProps) {
  return (
    <div className={cn("flex-1 flex overflow-hidden", className)}>
      {/* Center Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-full">{children}</div>
      </main>

      {/* Right Sidebar - Hidden on smaller screens */}
      {rightSidebar && (
        <aside className="hidden xl:block w-[380px] flex-shrink-0 p-3">
          {rightSidebar}
        </aside>
      )}
    </div>
  );
}
