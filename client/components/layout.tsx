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
      <div className="flex-1 w-full min-w-0 flex flex-col">{children}</div>
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
    <div className={cn("flex-1 w-full", className)}>
      <div className="rounded-3xl bg-primary-grey shadow-sm px-4 sm:px-6 lg:px-8 pb-6">
        <div className="flex w-full gap-4 sm:gap-6">
          {/* Center Content */}
          <main className="flex-1 min-w-0">
            <div className="max-w-full">{children}</div>
          </main>

          {/* Right Sidebar */}
          {rightSidebar && (
            <aside className="hidden xl:block w-[380px] flex-shrink-0 sticky top-6 self-start rounded-3xl shadow-sm overflow-hidden">
              {rightSidebar}
            </aside>
          )}
        </div>
      </div>
    </div>
  );
}
