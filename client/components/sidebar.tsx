import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Home,
  BarChart3,
  Gamepad2,
  MessageCircle,
  Mail,
  Settings,
  Sun,
  Moon,
  ArrowLeft,
} from "lucide-react";

interface SidebarProps {
  className?: string;
}

const sidebarItems = [
  {
    id: "explore",
    icon: Home,
    label: "Explore",
    isActive: true,
    count: 32,
    hasAdd: true,
  },
  {
    id: "trending",
    icon: BarChart3,
    label: "Trending",
    count: 9,
  },
  {
    id: "games",
    icon: Gamepad2,
    label: "Games",
    count: 9,
    hasNotification: true,
  },
  {
    id: "communities",
    icon: MessageCircle,
    label: "Communities",
    count: 9,
  },
  {
    id: "messages",
    icon: Mail,
    label: "Messages",
    count: 9,
    hasNotification: true,
  },
];

export function Sidebar({ className }: SidebarProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeItem, setActiveItem] = useState("explore");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={cn(
        "relative flex flex-col bg-white transition-all duration-300 ease-in-out h-screen",
        isHovered ? "w-72" : "w-20",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header/Logo */}
      <div
        className={cn(
          "flex items-center justify-center pt-12 pb-6",
          isHovered ? "px-6" : "px-3",
        )}
      >
        {!isHovered ? (
          // Mini logo - centered
          <div className="flex flex-col items-center gap-15">
            <div className="relative flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#367EE2] to-[#5EA6ED] shadow-lg flex items-center justify-center">
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#367EE2] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Full logo with text
          <div className="flex items-center gap-3">
            <div className="relative flex-shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#367EE2] to-[#5EA6ED] shadow-lg flex items-center justify-center">
                <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-[#367EE2] rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="font-lobster text-xl text-black font-normal">
              Unibord
            </div>
          </div>
        )}
      </div>

      {/* Navigation Menu */}
      <nav
        className={cn(
          "flex-1 flex flex-col items-center gap-9",
          isHovered ? "px-3" : "px-3",
        )}
      >
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.id;

          return (
            <div key={item.id} className="relative">
              <button
                onClick={() => setActiveItem(item.id)}
                className={cn(
                  "relative transition-all duration-300",
                  isHovered
                    ? "w-full flex items-center gap-6 px-3 py-3.5 rounded-3xl group"
                    : "w-11 h-11 flex items-center justify-center rounded-3xl",
                  isActive && !isHovered
                    ? "bg-gradient-to-b from-[#5F7CFF] to-[#264EF9] text-white shadow-xl shadow-blue-500/40 border-2 border-[#3885DE]"
                    : isActive && isHovered
                      ? "bg-gradient-to-r from-[#07F] to-[#07F] text-white shadow-lg shadow-blue-500/40"
                      : isHovered
                        ? "text-[#5C7899] hover:bg-gray-50"
                        : "text-[#9FB4CD] hover:bg-blue-50",
                )}
              >
                {/* Icon with notification dot */}
                <div className="relative flex-shrink-0">
                  <Icon className="h-4 w-4" />
                  {item.hasNotification && !isActive && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF5E61] rounded-full"></div>
                  )}
                </div>

                {/* Label and Count - only show when hovered */}
                {isHovered && (
                  <>
                    <span className="font-poppins font-semibold text-sm flex-1 text-left">
                      {item.label}
                    </span>

                    {/* Count Badge */}
                    {item.count && !isActive && (
                      <div className="bg-[#E6ECF2] text-[#7D96B3] px-2 py-0.5 rounded-full text-xs font-bold min-w-[22px] text-center">
                        {item.count}
                      </div>
                    )}

                    {/* Active item extras */}
                    {isActive && (
                      <div className="flex items-center gap-3">
                        {item.count && (
                          <div className="bg-[#096CDD] text-white px-2 py-0.5 rounded-full text-xs font-bold min-w-[25px] h-[25px] flex items-center justify-center">
                            {item.count}
                          </div>
                        )}
                        {item.hasAdd && (
                          <div className="w-11 h-11 bg-[#07F] rounded-full flex items-center justify-center shadow-md shadow-blue-400/30">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 18 19"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.7196 1.24942C6.91658 0.89212 10.2216 0.89212 13.4186 1.24942C15.2026 1.44882 16.6419 2.85445 16.8515 4.64559C17.2337 7.91393 17.2337 11.2157 16.8515 14.484C16.6419 16.2752 15.2026 17.6808 13.4186 17.8803C10.2216 18.2376 6.91658 18.2376 3.7196 17.8803C1.93552 17.6808 0.496185 16.2752 0.286695 14.484C-0.0955651 11.2157 -0.0955651 7.91393 0.286695 4.64559C0.496185 2.85445 1.93552 1.44882 3.7196 1.24942ZM8.56908 4.36416C9.00054 4.36416 9.35033 4.71393 9.35033 5.14541V8.78362H12.9886C13.42 8.78362 13.7698 9.13331 13.7698 9.56487C13.7698 9.99633 13.42 10.3461 12.9886 10.3461H9.35033V13.9842C9.35033 14.4157 9.00054 14.7655 8.56908 14.7655C8.13762 14.7655 7.78783 14.4157 7.78783 13.9842V10.3461H4.1497C3.71822 10.3461 3.36845 9.99633 3.36845 9.56487C3.36845 9.13331 3.71822 8.78362 4.1497 8.78362H7.78783V5.14541C7.78783 4.71393 8.13762 4.36416 8.56908 4.36416Z"
                                fill="white"
                              />
                            </svg>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}
              </button>
            </div>
          );
        })}
      </nav>

      {/* Bottom Section */}
      <div
        className={cn(
          "pb-5 space-y-6 flex flex-col items-center",
          isHovered ? "px-3" : "px-3",
        )}
      >
        {/* User Profile */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-4">
            {/* Profile Image with Status */}
            <div className="relative">
              {!isHovered ? (
                // Mini profile - circular with border
                <div className="relative">
                  <div className="w-14 h-14 border-2 border-[#888F94] rounded-full p-0.5">
                    <div className="w-full h-full border-4 border-[#E6EBF2] rounded-full overflow-hidden">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/46fdbe8f270b41d73dfcc956f3da3aa7b2146bb4?width=116"
                        alt="Jackson D."
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Online status */}
                  <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-[#17E933] rounded-full"></div>
                </div>
              ) : (
                // Full profile
                <div className="w-16 h-20 border-3 border-[#E6EBF2] rounded-[40px] p-2.5 flex items-center justify-center">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/266f95fa305c7b6b2d16359fae475b6fe9ca0448?width=110"
                    alt="Jackson D."
                    className="w-14 h-15 rounded-[30px] object-cover"
                  />
                </div>
              )}

              {/* Online status for expanded */}
              {isHovered && (
                <div className="absolute bottom-2 right-1 w-2.5 h-2.5 bg-[#17E933] rounded-full"></div>
              )}
            </div>

            {/* User Info */}
            {isHovered && (
              <div className="flex-1">
                <div className="font-poppins font-semibold text-[#294566] text-base">
                  Jackson D.
                </div>
                <div className="font-poppins font-semibold text-[#A3B6CC] text-xs">
                  Manager
                </div>
              </div>
            )}
          </div>

          {/* Back Arrow Button */}
          {isHovered && (
            <button className="w-12 h-12 bg-[#50BB69] border-2 border-[#44AA5C] rounded-l-full flex items-center justify-center shadow-inner">
              <ArrowLeft className="w-4 h-4 text-white" />
            </button>
          )}
        </div>

        {/* Settings */}
        {!isHovered ? (
          // Mini settings icon
          <div className="w-12 h-12 border-2 border-dashed border-[#DDE4ED] bg-[#F0F3F7] rounded-lg flex items-center justify-center">
            <Settings className="w-4 h-4 text-[#067AFF]" />
          </div>
        ) : (
          <div className="space-y-3 w-full">
            {/* Settings Button */}
            <button className="w-full flex items-center gap-3 px-11 py-4 border-2 border-dashed border-[#DDE4ED] bg-[#F0F3F7] rounded-lg">
              <Settings className="w-4 h-4 text-[#067AFF]" />
              <span className="font-poppins font-semibold text-sm text-[#5C7899]">
                Settings
              </span>
            </button>

            {/* Theme Toggle */}
            <div className="bg-[#F0F3F7] border border-[#EBEFF5] rounded-full p-1.5">
              <div className="flex">
                <button
                  onClick={() => setIsDarkMode(false)}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-colors",
                    !isDarkMode ? "bg-white shadow-md" : "bg-transparent",
                  )}
                >
                  <Sun className="w-4 h-4 text-[#7D96B3]" />
                  <span className="font-sora font-bold text-xs text-[#7D96B3]">
                    Light
                  </span>
                </button>
                <button
                  onClick={() => setIsDarkMode(true)}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-colors",
                    isDarkMode ? "bg-white shadow-md" : "bg-transparent",
                  )}
                >
                  <Moon className="w-4 h-4 text-[#A3B6CC]" />
                  <span className="font-sora font-bold text-xs text-[#A3B6CC]">
                    Dark
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sun icon at bottom for mini mode */}
        {!isHovered && (
          <div className="flex items-center justify-center">
            <Sun className="w-5 h-5 text-[#7D96B3]" />
          </div>
        )}
      </div>
    </div>
  );
}
