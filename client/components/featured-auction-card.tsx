import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Calendar, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface FeaturedAuctionCardProps {
  className?: string;
}

const tabs = [
  { id: "details", label: "Details", isActive: true },
  { id: "product-info", label: "Product Info", isActive: false },
  { id: "reviews", label: "Reviews", isActive: false },
];

export function FeaturedAuctionCard({ className }: FeaturedAuctionCardProps) {
  const [activeTab, setActiveTab] = useState("details");

  return (
    <div
      className={cn("flex gap-6 p-1 bg-white rounded-3xl shadow-lg", className)}
    >
      {/* Left Section - Main Auction Card */}
      <div className="flex-1 min-w-[460px]">
        <div
          className="relative h-96 rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/9100d91e54751940f6d3f8c6d9d1f57119f63e12?width=920')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Top Section - Avatar Group and Timer */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-6">
            {/* Avatar Group */}
            <div className="flex items-center -space-x-3">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1f8906ac7b32b65577e4fbf64a12e27d851f6c7e?width=70"
                alt="User"
                className="w-9 h-9 rounded-full border-2 border-white"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/47b2e567fa99c84da6cd514d6ae3d23d252c77b8?width=70"
                alt="User"
                className="w-9 h-9 rounded-full border-2 border-white"
              />
              <div className="w-9 h-9 rounded-full bg-[#07122A] border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">28+</span>
              </div>
            </div>

            {/* Auction Timer */}
            <div className="bg-black/60 backdrop-blur-sm rounded-bl-3xl px-4 py-3 w-[172px]">
              <div className="text-white text-xs mb-2 font-medium">
                Auction ends in
              </div>
              <div className="flex items-center gap-2">
                {/* Clock Icon SVG from Figma */}
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 16.7466C10.1217 16.7466 12.1566 15.9037 13.6569 14.4034C15.1571 12.9031 16 10.8683 16 8.74658C16 6.62485 15.1571 4.59002 13.6569 3.08973C12.1566 1.58944 10.1217 0.746582 8 0.746582C5.87827 0.746582 3.84344 1.58944 2.34315 3.08973C0.842855 4.59002 0 6.62485 0 8.74658C0 10.8683 0.842855 12.9031 2.34315 14.4034C3.84344 15.9037 5.87827 16.7466 8 16.7466ZM9 4.74658C9 4.48137 8.89464 4.22701 8.70711 4.03948C8.51957 3.85194 8.26522 3.74658 8 3.74658C7.73478 3.74658 7.48043 3.85194 7.29289 4.03948C7.10536 4.22701 7 4.48137 7 4.74658V8.74658C7.00006 9.01178 7.10545 9.26609 7.293 9.45358L10.121 12.2826C10.2139 12.3755 10.3242 12.4492 10.4456 12.4995C10.567 12.5498 10.6971 12.5756 10.8285 12.5756C10.9599 12.5756 11.09 12.5498 11.2114 12.4995C11.3328 12.4492 11.4431 12.3755 11.536 12.2826C11.6289 12.1897 11.7026 12.0794 11.7529 11.958C11.8032 11.8366 11.8291 11.7065 11.8291 11.5751C11.8291 11.4437 11.8032 11.3136 11.7529 11.1922C11.7026 11.0708 11.6289 10.9605 11.536 10.8676L9 8.33258V4.74658Z"
                    fill="#E8FE21"
                  />
                </svg>
                <span className="text-white text-sm font-semibold">
                  14H : 17M :34S
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 flex items-center gap-7">
            {/* Left Arrow SVG from Figma */}
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="20"
                height="20"
                rx="10"
                transform="matrix(-1 0 0 1 20 0.246582)"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.707 14.9535C12.8944 14.766 12.9998 14.5117 12.9998 14.2465C12.9998 13.9813 12.8944 13.727 12.707 13.5395L9.41397 10.2465L12.707 6.9535C12.8891 6.7649 12.9899 6.5123 12.9876 6.2501C12.9854 5.9879 12.8802 5.73709 12.6948 5.55168C12.5094 5.36627 12.2586 5.26111 11.9964 5.25883C11.7342 5.25655 11.4816 5.35734 11.293 5.5395L7.29297 9.5395C7.1055 9.72703 7.00018 9.98134 7.00018 10.2465C7.00018 10.5117 7.1055 10.766 7.29297 10.9535L11.293 14.9535C11.4805 15.141 11.7348 15.2463 12 15.2463C12.2651 15.2463 12.5194 15.141 12.707 14.9535Z"
                fill="black"
              />
            </svg>
            {/* Right Arrow SVG from Figma */}
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.246582" width="20" height="20" rx="10" fill="white" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.29279 14.9413C7.10532 14.7538 7 14.4995 7 14.2343C7 13.9691 7.10532 13.7148 7.29279 13.5273L10.5858 10.2343L7.29279 6.94129C7.11063 6.75269 7.00983 6.50009 7.01211 6.23789C7.01439 5.9757 7.11956 5.72488 7.30497 5.53948C7.49038 5.35407 7.74119 5.2489 8.00339 5.24662C8.26558 5.24434 8.51818 5.34514 8.70679 5.52729L12.7068 9.52729C12.8943 9.71482 12.9996 9.96913 12.9996 10.2343C12.9996 10.4995 12.8943 10.7538 12.7068 10.9413L8.70679 14.9413C8.51926 15.1288 8.26495 15.2341 7.99979 15.2341C7.73462 15.2341 7.48031 15.1288 7.29279 14.9413Z"
                fill="black"
              />
            </svg>
          </div>

          {/* Bottom Section - Current Bid and Bid Button */}
          <div className="absolute bottom-0 left-0 right-0 bg-[#07122A] rounded-b-3xl p-5">
            <div className="flex justify-between items-center">
              <div className="flex items-start gap-6">
                <div>
                  <div className="text-white text-xs mb-1 font-medium">
                    Current Bid
                  </div>
                  <div className="text-[#E8FE21] font-sora font-bold text-4xl leading-tight">
                    ₦5000
                  </div>
                </div>
                <div className="text-[#ECF0F3] font-sora text-base line-through mt-4">
                  ₦18.90
                </div>
              </div>

              <button className="bg-[#E8FE21] text-[#07122A] px-7 py-3 rounded-3xl font-semibold text-lg flex items-center gap-2 hover:bg-[#E8FE21]/90 transition-colors border border-[#E8FE21]">
                <span>Bid Now</span>
                {/* Arrow Icon SVG from Figma */}
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.88392 11.3563C0.680147 11.1525 0.565674 10.8761 0.565674 10.5879C0.565674 10.2996 0.680147 10.0232 0.88392 9.81938L4.46327 6.24003L0.88392 2.66068C0.685922 2.45568 0.576363 2.18111 0.578839 1.89612C0.581316 1.61112 0.69563 1.3385 0.897161 1.13697C1.09869 0.935435 1.37131 0.821121 1.65631 0.818645C1.94131 0.816168 2.21587 0.925728 2.42088 1.12373L6.7687 5.47155C6.97248 5.67539 7.08695 5.95181 7.08695 6.24003C7.08695 6.52825 6.97248 6.80467 6.7687 7.00851L2.42088 11.3563C2.21704 11.5601 1.94062 11.6746 1.6524 11.6746C1.36418 11.6746 1.08775 11.5601 0.88392 11.3563Z"
                    fill="black"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="flex-1 pt-8 max-w-md">
        {/* Product Tabs */}
        <div className="bg-[#ECF0F3] rounded-3xl p-2 mb-8 inline-flex">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-2.5 rounded-3xl font-semibold text-sm transition-colors",
                activeTab === tab.id
                  ? "bg-white text-[#1F8BFF] shadow-sm"
                  : "text-[#07122A] hover:text-[#1F8BFF]",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Information */}
        <div className="space-y-6 mb-8">
          {/* Date and Time */}
          <div className="flex items-center gap-2 text-sm text-[#888F94]">
            {/* Calendar Icon SVG from Figma */}
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 0.246582C3.73478 0.246582 3.48043 0.351939 3.29289 0.539475C3.10536 0.727012 3 0.981366 3 1.24658V2.24658H2C1.46957 2.24658 0.960859 2.4573 0.585786 2.83237C0.210714 3.20744 0 3.71615 0 4.24658V14.2466C0 14.777 0.210714 15.2857 0.585786 15.6608C0.960859 16.0359 1.46957 16.2466 2 16.2466H14C14.5304 16.2466 15.0391 16.0359 15.4142 15.6608C15.7893 15.2857 16 14.777 16 14.2466V4.24658C16 3.71615 15.7893 3.20744 15.4142 2.83237C15.0391 2.4573 14.5304 2.24658 14 2.24658H13V1.24658C13 0.981366 12.8946 0.727012 12.7071 0.539475C12.5196 0.351939 12.2652 0.246582 12 0.246582C11.7348 0.246582 11.4804 0.351939 11.2929 0.539475C11.1054 0.727012 11 0.981366 11 1.24658V2.24658H5V1.24658C5 0.981366 4.89464 0.727012 4.70711 0.539475C4.51957 0.351939 4.26522 0.246582 4 0.246582ZM4 5.24658C3.73478 5.24658 3.48043 5.35194 3.29289 5.53948C3.10536 5.72701 3 5.98137 3 6.24658C3 6.5118 3.10536 6.76615 3.29289 6.95369C3.48043 7.14122 3.73478 7.24658 4 7.24658H12C12.2652 7.24658 12.5196 7.14122 12.7071 6.95369C12.8946 6.76615 13 6.5118 13 6.24658C13 5.98137 12.8946 5.72701 12.7071 5.53948C12.5196 5.35194 12.2652 5.24658 12 5.24658H4Z"
                fill="#888F94"
              />
            </svg>
            <span className="font-medium">May, 01, 2022</span>
            <span className="font-medium">05:00</span>
          </div>

          {/* Title */}
          <h1 className="font-sora font-bold text-4xl leading-tight text-black">
            Collection of New Monkey
          </h1>

          {/* Description */}
          <p className="text-[#888F94] font-sora text-sm leading-relaxed max-w-xs">
            A new collecton of nft the adofihdisanklcloah dsfhasoduif dhfladsf
            dsfhaldsfh
          </p>
        </div>

        {/* Creator Section */}
        <div className="flex items-center justify-between pt-8 border-t border-[#ECF0F3]">
          <div className="flex items-center gap-3">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/7de27c6eff21b700004f827a844ff01f13f4670d?width=90"
              alt="Creator"
              className="w-11 h-11 rounded-full"
            />
            <div>
              <div className="text-[#888F94] text-xs font-medium">Creator</div>
              <div className="font-semibold text-lg text-[#07122A]">
                Creator
              </div>
            </div>
          </div>

          <button className="border border-[#888F94] text-[#07122A] px-6 py-2.5 rounded-3xl font-semibold text-lg flex items-center gap-2 hover:border-gray-400 transition-colors">
            <span>Contact now</span>
            {/* Arrow Icon SVG from Figma */}
            <svg
              width="6"
              height="11"
              viewBox="0 0 6 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.293275 9.94764C0.105804 9.76011 0.000488281 9.50581 0.000488281 9.24064C0.000488281 8.97548 0.105804 8.72117 0.293275 8.53364L3.58628 5.24064L0.293275 1.94764C0.111117 1.75904 0.010322 1.50644 0.0126004 1.24424C0.0148788 0.982044 0.120048 0.731231 0.305456 0.545823C0.490864 0.360415 0.741677 0.255246 1.00387 0.252967C1.26607 0.250689 1.51867 0.351484 1.70727 0.533642L5.70727 4.53364C5.89475 4.72117 6.00006 4.97548 6.00006 5.24064C6.00006 5.50581 5.89475 5.76011 5.70727 5.94764L1.70727 9.94764C1.51975 10.1351 1.26544 10.2404 1.00027 10.2404C0.735111 10.2404 0.480803 10.1351 0.293275 9.94764Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
