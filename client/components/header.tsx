import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, Bell, Plus, ChevronDown } from "lucide-react";

interface HeaderProps {
  className?: string;
}

const navigationItems = [
  { id: "home", label: "Home", isActive: true },
  { id: "products", label: "Products", isActive: false },
  { id: "events", label: "Events", isActive: false },
  { id: "announcements", label: "Announcements", isActive: false },
];

export function Header({ className }: HeaderProps) {
  const [activeNav, setActiveNav] = useState("home");
  const [searchValue, setSearchValue] = useState("");

  return (
    <header
      className={cn("bg-white border-b border-gray-200 px-5 py-4", className)}
    >
      <div className="flex items-center justify-between gap-8 flex-wrap">
        {/* Left Section - Delsu Brand */}
        <div className="flex items-center gap-8">
          {/* Delsu Brand Button */}
          <button className="flex items-center gap-2 px-4 py-2.5 border border-[#888F94] rounded-3xl hover:border-gray-400 transition-colors min-h-[38px]">
            {/* Brand Icon */}
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=18&h=15&fit=crop"
              alt="Delsu Icon"
              className="w-[18px] h-[15px] object-contain"
            />
            <span className="font-gilroy font-semibold text-[#07122A] text-[15px] leading-[1.17] tracking-[-0.3px] whitespace-nowrap">
              Delsu
            </span>
            {/* Dropdown Arrow */}
            <ChevronDown className="w-[9px] h-[6px] text-[#4D535C] rotate-0" />
          </button>

          {/* Navigation Items - Hidden on smaller screens */}
          <nav className="hidden md:flex items-center gap-10">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={cn(
                  "relative flex flex-col items-center gap-3 font-medium text-base transition-colors",
                  activeNav === item.id
                    ? "text-black"
                    : "text-[#4D535C] hover:text-gray-700",
                )}
              >
                <span className="font-inter font-medium text-base leading-normal tracking-[-0.32px] whitespace-nowrap">
                  {item.label}
                </span>
                {activeNav === item.id && (
                  <div className="absolute -bottom-4 w-[45px] h-2 bg-gradient-to-r from-[#5F7CFF] to-[#264EF9] rounded-full" />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Right Section - Search and Actions */}
        <div className="flex items-center gap-5">
          {/* Search Bar */}
          <div className="relative bg-white rounded-3xl shadow-sm border border-gray-100 min-w-[240px]">
            <div className="flex items-center px-3 py-5 gap-16">
              <div className="flex items-center gap-3 flex-1">
                <Search className="w-4 h-4 text-gray-400 opacity-40" />
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder="Search anything…"
                  className="flex-1 text-sm text-black placeholder:text-black placeholder:opacity-40 bg-transparent border-none outline-none font-poppins"
                />
              </div>

              {/* Search Icon Grid */}
              <div className="flex items-center gap-1">
                <div className="w-4 h-4 flex flex-col gap-0.5">
                  <div className="flex gap-0.5">
                    <div className="w-1.5 h-1.5 bg-[#3157FA] rounded-full" />
                    <div className="w-1.5 h-1.5 bg-[#3157FA] rounded-full" />
                  </div>
                  <div className="flex gap-0.5">
                    <div className="w-1.5 h-1.5 bg-[#3157FA] rounded-full" />
                    <div className="w-1.5 h-1.5 bg-[#3157FA] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Create Button */}
          <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-b from-[#5F7CFF] to-[#264EF9] text-white rounded-3xl hover:shadow-lg transition-shadow font-semibold text-sm min-h-[41px]">
            <Plus className="w-4 h-4" />
            <span className="font-gilroy font-semibold text-sm leading-normal tracking-[-0.28px]">
              Create
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
