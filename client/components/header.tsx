import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Search, Bell, Plus } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HeaderProps {
  className?: string;
}

const navigationItems = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "events", label: "Events" },
  { id: "announcements", label: "Announcements" },
];

const schools = ["Delsu", "Unilag", "ABU Zaria", "Uniben", "OAU"];

export function Header({ className }: HeaderProps) {
  const [activeNav, setActiveNav] = useState("home");
  const [searchValue, setSearchValue] = useState("");
  const [school, setSchool] = useState(schools[0]);

  return (
    <header className={cn("bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4", className)}>
      {/* Three even columns */}
      <div className="grid grid-cols-3 items-center gap-4">
        {/* Left: School dropdown */}
        <div className="flex items-center">
          <Select value={school} onValueChange={setSchool}>
            <SelectTrigger className="h-10 w-[180px] rounded-3xl border-[#888F94] text-[#07122A] font-gilroy font-semibold px-4 hover:border-gray-400 transition-colors">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="rounded-2xl">
              {schools.map((s) => (
                <SelectItem key={s} value={s} className="cursor-pointer">
                  {s}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Middle: Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8">
          {navigationItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={cn(
                  "relative flex flex-col items-center gap-2 font-medium text-base transition-all duration-200 ease-out hover:scale-[1.02]",
                  isActive ? "text-gray-800" : "text-[#4D535C] hover:text-gray-700",
                )}
              >
                <span className="font-inter font-medium text-base tracking-[-0.32px] whitespace-nowrap">
                  {item.label}
                </span>
                <div
                  className={cn(
                    "absolute -bottom-4 h-2 rounded-full transition-all duration-300",
                    isActive
                      ? "w-[45px] bg-gradient-to-r from-[#5F7CFF] to-[#264EF9]"
                      : "w-0 bg-transparent",
                  )}
                />
              </button>
            );
          })}
        </nav>

        {/* Right: Search, Notification, Create */}
        <div className="flex items-center justify-end gap-3">
          {/* Search */}
          <div className="relative bg-white rounded-3xl shadow-sm border border-gray-100 min-w-[240px] transition-all duration-200 focus-within:ring-2 focus-within:ring-blue-500/40">
            <div className="flex items-center px-3 py-3">
              <Search className="w-4 h-4 text-gray-400 opacity-60" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search anything…"
                className="ml-3 flex-1 text-sm text-black placeholder:text-black/40 bg-transparent outline-none font-poppins"
              />
            </div>
          </div>

          {/* Notification */}
          <button
            aria-label="Notifications"
            className="relative grid place-items-center w-11 h-11 rounded-full bg-gradient-to-b from-[#5F7CFF] to-[#264EF9] text-white shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold rounded-full bg-white text-[#264EF9] shadow-sm">3</span>
          </button>

          {/* Create */}
          <button className="flex items-center gap-2 px-5 py-3 bg-gradient-to-b from-[#5F7CFF] to-[#264EF9] text-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.02] font-semibold text-sm">
            <Plus className="w-4 h-4" />
            <span className="font-gilroy">Create</span>
          </button>
        </div>
      </div>
    </header>
  );
}
