import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Calendar, ChevronLeft, ChevronRight, ArrowRight, Star, ShieldCheck } from "lucide-react";

interface FeaturedAuctionCardProps {
  className?: string;
}

const tabs = [
  { id: "details", label: "Details" },
  { id: "product-info", label: "Product Info" },
  { id: "reviews", label: "Reviews" },
];

const carouselItems = [
  {
    id: 1,
    image: "https://api.builder.io/api/v1/image/assets/TEMP/9100d91e54751940f6d3f8c6d9d1f57119f63e12?width=920",
    title: "Collection of New Monkey",
    description: "A new collection of nft the adofihdisanklcloah dsfhasoduif dhfladsf dsfhaldsfh",
    currentBid: "5000",
    originalPrice: "18.90",
    endTime: "14H : 17M : 34S",
    date: "May, 01, 2022",
    time: "05:00",
    likeCount: "28+",
    creator: {
      name: "Creator",
      avatar: "https://api.builder.io/api/v1/image/assets/TEMP/7de27c6eff21b700004f827a844ff01f13f4670d?width=90"
    },
    avatars: [
      "https://api.builder.io/api/v1/image/assets/TEMP/1f8906ac7b32b65577e4fbf64a12e27d851f6c7e?width=70",
      "https://api.builder.io/api/v1/image/assets/TEMP/47b2e567fa99c84da6cd514d6ae3d23d252c77b8?width=70"
    ]
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=920&h=400&fit=crop",
    title: "Digital Art Collection",
    description: "Stunning digital artwork featuring modern abstract designs and vibrant colors",
    currentBid: "3500",
    originalPrice: "15.50",
    endTime: "22H : 45M : 12S",
    date: "May, 03, 2022",
    time: "12:30",
    likeCount: "42+",
    creator: {
      name: "ArtistX",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=90&h=90&fit=crop&crop=face"
    },
    avatars: [
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=70&h=70&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=70&h=70&fit=crop&crop=face"
    ]
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c?w=920&h=400&fit=crop",
    title: "Rare Collectible Series",
    description: "Limited edition collectibles with unique properties and special characteristics",
    currentBid: "7200",
    originalPrice: "25.00",
    endTime: "08H : 23M : 56S",
    date: "May, 05, 2022",
    time: "18:15",
    likeCount: "15+",
    creator: {
      name: "CollectorPro",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=90&h=90&fit=crop&crop=face"
    },
    avatars: [
      "https://images.unsplash.com/photo-1494790108755-2616b612b619?w=70&h=70&fit=crop&crop=face",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=70&h=70&fit=crop&crop=face"
    ]
  }
];

export function FeaturedAuctionCard({ className }: FeaturedAuctionCardProps) {
  const [activeTab, setActiveTab] = useState("details");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const currentItem = carouselItems[currentIndex];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "details":
        return (
          <div className="space-y-6 animate-in fade-in-50 duration-300">
            {/* Date and Time */}
            <div className="flex items-center gap-2 text-sm text-[#888F94]">
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 0.246582C3.73478 0.246582 3.48043 0.351939 3.29289 0.539475C3.10536 0.727012 3 0.981366 3 1.24658V2.24658H2C1.46957 2.24658 0.960859 2.4573 0.585786 2.83237C0.210714 3.20744 0 3.71615 0 4.24658V14.2466C0 14.777 0.210714 15.2857 0.585786 15.6608C0.960859 16.0359 1.46957 16.2466 2 16.2466H14C14.5304 16.2466 15.0391 16.0359 15.4142 15.6608C15.7893 15.2857 16 14.777 16 14.2466V4.24658C16 3.71615 15.7893 3.20744 15.4142 2.83237C15.0391 2.4573 14.5304 2.24658 14 2.24658H13V1.24658C13 0.981366 12.8946 0.727012 12.7071 0.539475C12.5196 0.351939 12.2652 0.246582 12 0.246582C11.7348 0.246582 11.4804 0.351939 11.2929 0.539475C11.1054 0.727012 11 0.981366 11 1.24658V2.24658H5V1.24658C5 0.981366 4.89464 0.727012 4.70711 0.539475C4.51957 0.351939 4.26522 0.246582 4 0.246582ZM4 5.24658C3.73478 5.24658 3.48043 5.35194 3.29289 5.53948C3.10536 5.72701 3 5.98137 3 6.24658C3 6.5118 3.10536 6.76615 3.29289 6.95369C3.48043 7.14122 3.73478 7.24658 4 7.24658H12C12.2652 7.24658 12.5196 7.14122 12.7071 6.95369C12.8946 6.76615 13 6.5118 13 6.24658C13 5.98137 12.8946 5.72701 12.7071 5.53948C12.5196 5.35194 12.2652 5.24658 12 5.24658H4Z"
                  fill="#888F94"
                />
              </svg>
              <span className="font-medium">{currentItem.date}</span>
              <span className="font-medium">{currentItem.time}</span>
            </div>

            {/* Title */}
            <h1 className="font-sora font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight text-black">
              {currentItem.title}
            </h1>

            {/* Description */}
            <p className="text-[#888F94] font-sora text-sm leading-relaxed">
              {currentItem.description}
            </p>
          </div>
        );
      
      case "product-info":
        return (
          <div className="space-y-6 animate-in fade-in-50 duration-300">
            <h3 className="font-sora font-bold text-xl text-black">Product Information</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-[#888F94] text-sm">Category</span>
                <span className="text-[#07122A] font-medium">Digital Art</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-[#888F94] text-sm">Token Standard</span>
                <span className="text-[#07122A] font-medium">ERC-721</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-[#888F94] text-sm">Blockchain</span>
                <span className="text-[#07122A] font-medium">Ethereum</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-[#888F94] text-sm">Edition</span>
                <span className="text-[#07122A] font-medium">1 of 1</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-[#888F94] text-sm">Royalties</span>
                <span className="text-[#07122A] font-medium">5%</span>
              </div>
            </div>
            <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span className="text-green-700 text-sm font-medium">Verified authentic</span>
            </div>
          </div>
        );
      
      case "reviews":
        return (
          <div className="space-y-6 animate-in fade-in-50 duration-300">
            <h3 className="font-sora font-bold text-xl text-black">Reviews & Ratings</h3>
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#07122A]">4.8</div>
                <div className="flex items-center gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-xs text-[#888F94] mt-1">124 reviews</div>
              </div>
              <div className="flex-1 space-y-1">
                {[5, 4, 3, 2, 1].map((stars) => (
                  <div key={stars} className="flex items-center gap-2">
                    <span className="text-xs text-[#888F94] w-3">{stars}</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-400" 
                        style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 8 : 2}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face" 
                       className="w-8 h-8 rounded-full" alt="Reviewer" />
                  <div>
                    <div className="font-medium text-sm text-[#07122A]">Alex Chen</div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#888F94]">Amazing artwork! The quality is exceptional and the details are stunning.</p>
              </div>
              <div className="border border-gray-100 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" 
                       className="w-8 h-8 rounded-full" alt="Reviewer" />
                  <div>
                    <div className="font-medium text-sm text-[#07122A]">Sarah Johnson</div>
                    <div className="flex items-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#888F94]">Great value for money. Fast delivery and secure transaction.</p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className={cn(
      "flex flex-col lg:flex-row gap-4 lg:gap-6 p-1 bg-white rounded-3xl shadow-[0px_16px_18px_-8px_rgba(7,18,42,0.10)] transition-all duration-300",
      className
    )}>
      {/* Left Section - Main Auction Card */}
      <div className="flex-1 w-full lg:w-auto">
        <div
          className="relative h-80 sm:h-96 lg:h-[416px] rounded-3xl overflow-hidden bg-cover bg-center transition-all duration-500 ease-in-out"
          style={{
            backgroundImage: `url('${currentItem.image}')`,
          }}
        >
          {/* Top Section - Avatar Group and Timer */}
          <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-4 lg:p-6">
            {/* Avatar Group */}
            <div className="flex items-center -space-x-3">
              {currentItem.avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt="User"
                  className="w-8 h-8 lg:w-9 lg:h-9 rounded-full border-2 border-white transition-transform hover:scale-110 hover:z-10"
                />
              ))}
              <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-full bg-[#07122A] border-2 border-white flex items-center justify-center transition-transform hover:scale-110">
                <span className="text-white text-xs font-bold">{currentItem.likeCount}</span>
              </div>
            </div>

            {/* Auction Timer */}
            <div className="bg-black/60 backdrop-blur-sm rounded-bl-3xl px-3 lg:px-4 py-2 lg:py-3 w-36 lg:w-[172px]">
              <div className="text-white text-xs mb-2 font-medium">
                Auction ends in
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 16.7466C10.1217 16.7466 12.1566 15.9037 13.6569 14.4034C15.1571 12.9031 16 10.8683 16 8.74658C16 6.62485 15.1571 4.59002 13.6569 3.08973C12.1566 1.58944 10.1217 0.746582 8 0.746582C5.87827 0.746582 3.84344 1.58944 2.34315 3.08973C0.842855 4.59002 0 6.62485 0 8.74658C0 10.8683 0.842855 12.9031 2.34315 14.4034C3.84344 15.9037 5.87827 16.7466 8 16.7466ZM9 4.74658C9 4.48137 8.89464 4.22701 8.70711 4.03948C8.51957 3.85194 8.26522 3.74658 8 3.74658C7.73478 3.74658 7.48043 3.85194 7.29289 4.03948C7.10536 4.22701 7 4.48137 7 4.74658V8.74658C7.00006 9.01178 7.10545 9.26609 7.293 9.45358L10.121 12.2826C10.2139 12.3755 10.3242 12.4492 10.4456 12.4995C10.567 12.5498 10.6971 12.5756 10.8285 12.5756C10.9599 12.5756 11.09 12.5498 11.2114 12.4995C11.3328 12.4492 11.4431 12.3755 11.536 12.2826C11.6289 12.1897 11.7026 12.0794 11.7529 11.958C11.8032 11.8366 11.8291 11.7065 11.8291 11.5751C11.8291 11.4437 11.8032 11.3136 11.7529 11.1922C11.7026 11.0708 11.6289 10.9605 11.536 10.8676L9 8.33258V4.74658Z"
                    fill="#E8FE21"
                  />
                </svg>
                <span className="text-white text-xs lg:text-sm font-semibold">
                  {currentItem.endTime}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-16 lg:bottom-24 left-1/2 transform -translate-x-1/2 flex items-center gap-4 lg:gap-7">
            <button 
              onClick={handlePrevious}
              className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
            </button>
            <button 
              onClick={handleNext}
              className="w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-black" />
            </button>
          </div>

          {/* Bottom Section - Current Bid and Bid Button */}
          <div className="absolute bottom-0 left-0 right-0 bg-[rgba(18,40,89,0.60)] backdrop-blur-sm rounded-b-3xl p-4 lg:p-5">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-start gap-4 lg:gap-6">
                <div>
                  <div className="text-white text-xs mb-1 font-medium">
                    Current Bid
                  </div>
                  <div className="text-[#E8FE21] font-sora font-bold text-2xl lg:text-4xl leading-tight">
                    ₦{currentItem.currentBid}
                  </div>
                </div>
                <div className="text-[#ECF0F3] font-sora text-sm lg:text-base line-through mt-4 lg:mt-6">
                  ₦{currentItem.originalPrice}
                </div>
              </div>

              <button className="bg-[#E8FE21] text-[#07122A] px-4 lg:px-7 py-2 lg:py-3 rounded-3xl font-semibold text-sm lg:text-lg flex items-center gap-2 hover:bg-[#E8FE21]/90 hover:scale-105 transition-all duration-200 border border-[#E8FE21] shadow-lg">
                <span>Bid Now</span>
                <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Product Details */}
      <div className="flex-1 pt-4 lg:pt-8 max-w-full lg:max-w-md">
        {/* Product Tabs */}
        <div className="bg-[#ECF0F3] rounded-3xl p-2 mb-6 lg:mb-8 flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-4 lg:px-6 py-2.5 rounded-3xl font-semibold text-xs lg:text-sm transition-all duration-300 hover:scale-105 whitespace-nowrap",
                activeTab === tab.id
                  ? "bg-white text-[#1F8BFF] shadow-sm transform scale-105"
                  : "text-[#07122A] hover:text-[#1F8BFF]",
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mb-6 lg:mb-8 min-h-[200px]">
          {renderTabContent()}
        </div>

        {/* Creator Section - Always visible */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 lg:pt-8 border-t border-[#ECF0F3] gap-4">
          <div className="flex items-center gap-3">
            <img
              src={currentItem.creator.avatar}
              alt="Creator"
              className="w-11 h-11 rounded-full transition-transform hover:scale-110"
            />
            <div>
              <div className="text-[#888F94] text-xs font-medium">Creator</div>
              <div className="font-semibold text-lg text-[#07122A]">
                {currentItem.creator.name}
              </div>
            </div>
          </div>

          <button className="border border-[#888F94] text-[#07122A] px-4 lg:px-6 py-2.5 rounded-3xl font-semibold text-sm lg:text-lg flex items-center gap-2 hover:border-gray-400 hover:scale-105 transition-all duration-200">
            <span>Contact now</span>
            <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
