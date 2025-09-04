import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Heart, 
  MessageCircle, 
  Eye, 
  Bookmark, 
  MapPin, 
  Clock,
  AlertTriangle,
  Calendar
} from 'lucide-react';

interface CardProps {
  className?: string;
}

interface CardInteraction {
  isLiked: boolean;
  isSaved: boolean;
  likes: number;
  comments: number;
  views: number;
}

// Announcement Card Component
function AnnouncementCard({ className }: CardProps) {
  const [interaction, setInteraction] = useState<CardInteraction>({
    isLiked: false,
    isSaved: false,
    likes: 0,
    comments: 0,
    views: 0
  });

  const toggleLike = () => {
    setInteraction(prev => ({
      ...prev,
      isLiked: !prev.isLiked,
      likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1
    }));
  };

  const toggleSave = () => {
    setInteraction(prev => ({ ...prev, isSaved: !prev.isSaved }));
  };

  return (
    <div className={cn(
      "flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer",
      className
    )}>
      {/* Header with tag and like */}
      <div className="relative p-4">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1">
            <span className="text-xs font-semibold text-[#284566]">Social</span>
          </div>
          <button
            onClick={toggleLike}
            className={cn(
              "w-9 h-9 rounded-full flex items-center justify-center bg-white shadow-sm transition-all duration-200 hover:scale-110",
              interaction.isLiked ? "bg-red-50" : ""
            )}
          >
            <Heart className={cn("w-4 h-4", interaction.isLiked ? "text-red-500 fill-red-500" : "text-gray-400")} />
          </button>
        </div>

        {/* Profile section */}
        <div className="flex flex-col items-center text-center mb-4">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/3c7f290613b06bc2f7d0e06367932eda980a40f2?width=183"
            alt="Cameron Williamson"
            className="w-20 h-20 rounded-full border-2 border-white shadow-lg mb-3"
          />
          <h3 className="font-medium text-lg text-black">Cameron Williamson</h3>
          <p className="text-sm text-muted-color">Web Development</p>
        </div>

        {/* Alert section */}
        <div className="relative mb-4">
          <AlertTriangle className="w-8 h-8 text-red-500 absolute -top-2 -left-2" />
          <div className="bg-[#EEF5FF] border-2 border-red-400 rounded-2xl p-4 pl-6">
            <p className="text-black text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
            </p>
          </div>
        </div>
      </div>

      {/* Footer sections - stick to bottom */}
      <div className="mt-auto">
        {/* Location and time */}
        <div className="px-4 py-2 flex items-center justify-between text-sm text-black/60 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            <span>Breakfast Club Asaba</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3" />
            <span>02:30 PM</span>
          </div>
        </div>

        {/* User info and stats */}
        <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">U</span>
            </div>
            <span className="text-sm font-semibold text-black">Amos</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Interaction stats */}
            <div className="flex items-center gap-4 text-[#7D96B3]">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span className="text-xs">{interaction.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs">{interaction.comments}</span>
              </div>
            </div>

            {/* Save button */}
            <button
              onClick={toggleSave}
              className={cn(
                "w-8 h-8 rounded-full border border-gray-200 bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110",
                interaction.isSaved ? "bg-yellow-50 border-yellow-300" : ""
              )}
            >
              <Bookmark className={cn("w-4 h-4", interaction.isSaved ? "text-yellow-600 fill-yellow-600" : "text-[#7D96B3]")} />
            </button>
          </div>
        </div>

        {/* Avatar group */}
        <div className="px-4 pb-3 flex items-center gap-2">
          <div className="flex items-center -space-x-2">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/314c1f3fd96ee15b612365c9c688cae745756431?width=42" 
              className="w-6 h-6 rounded-full border-2 border-white" 
              alt="User" 
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/314c1f3fd96ee15b612365c9c688cae745756431?width=42" 
              className="w-6 h-6 rounded-full border-2 border-white" 
              alt="User" 
            />
            <div className="w-6 h-6 bg-[#07122A] rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-bold">28+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Regular Post Card Component
function RegularPostCard({ className }: CardProps) {
  const [interaction, setInteraction] = useState<CardInteraction>({
    isLiked: false,
    isSaved: false,
    likes: 0,
    comments: 0,
    views: 0
  });

  const toggleLike = () => {
    setInteraction(prev => ({
      ...prev,
      isLiked: !prev.isLiked,
      likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1
    }));
  };

  const toggleSave = () => {
    setInteraction(prev => ({ ...prev, isSaved: !prev.isSaved }));
  };

  return (
    <div className={cn(
      "flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer",
      className
    )}>
      {/* Image section with tag and like */}
      <div className="relative p-2 h-48">
        <div className="relative h-full rounded-3xl overflow-hidden">
          <div className="grid grid-cols-2 gap-1 h-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/15032a47d94bd44ab2f3a09f875d4eafda4c5eb2?width=263"
              alt="Post image 1"
              className="w-full h-full object-cover"
            />
            <div className="grid grid-rows-2 gap-1">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8b56cf3a0e7d2741e452f700830ae1362f3aa7b8?width=263"
                alt="Post image 2"
                className="w-full h-full object-cover"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/8aefb0d4240e0a110fa2c4d7132ecfdca9db8106?width=263"
                alt="Post image 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Overlays */}
          <div className="absolute top-3 left-3">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1">
              <span className="text-xs font-semibold text-[#284566]">Social</span>
            </div>
          </div>
          
          <button
            onClick={toggleLike}
            className={cn(
              "absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center bg-white shadow-sm transition-all duration-200 hover:scale-110",
              interaction.isLiked ? "bg-red-50" : ""
            )}
          >
            <Heart className={cn("w-4 h-4", interaction.isLiked ? "text-red-500 fill-red-500" : "text-gray-400")} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-2 flex-1">
        <h3 className="font-bold text-xl text-black mb-2">Championship Finals</h3>
        <div className="flex items-center gap-4 text-sm text-black/60 mb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            <span>Breakfast Club Asaba</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3" />
            <span>02:30 PM</span>
          </div>
        </div>
        <div className="bg-[#EEF5FF] rounded-xl p-3 mb-4">
          <p className="text-black text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do
          </p>
        </div>
      </div>

      {/* Footer sections - stick to bottom */}
      <div className="mt-auto">
        {/* User info */}
        <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">U</span>
            </div>
            <span className="text-sm font-semibold text-black">Amos</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Interaction stats */}
            <div className="flex items-center gap-4 text-[#7D96B3]">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span className="text-xs">{interaction.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs">{interaction.comments}</span>
              </div>
            </div>

            {/* Save button */}
            <button
              onClick={toggleSave}
              className={cn(
                "w-8 h-8 rounded-full border border-gray-200 bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110",
                interaction.isSaved ? "bg-yellow-50 border-yellow-300" : ""
              )}
            >
              <Bookmark className={cn("w-4 h-4", interaction.isSaved ? "text-yellow-600 fill-yellow-600" : "text-[#7D96B3]")} />
            </button>
          </div>
        </div>

        {/* Avatar group */}
        <div className="px-4 pb-3 flex items-center gap-2">
          <div className="flex items-center -space-x-2">
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/314c1f3fd96ee15b612365c9c688cae745756431?width=42" 
              className="w-6 h-6 rounded-full border-2 border-white" 
              alt="User" 
            />
            <img 
              src="https://api.builder.io/api/v1/image/assets/TEMP/314c1f3fd96ee15b612365c9c688cae745756431?width=42" 
              className="w-6 h-6 rounded-full border-2 border-white" 
              alt="User" 
            />
            <div className="w-6 h-6 bg-[#07122A] rounded-full border-2 border-white flex items-center justify-center">
              <span className="text-white text-xs font-bold">28+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Event Card Component
function EventCard({ className }: CardProps) {
  const [interaction, setInteraction] = useState<CardInteraction>({
    isLiked: false,
    isSaved: false,
    likes: 85,
    comments: 0,
    views: 0
  });

  const toggleLike = () => {
    setInteraction(prev => ({
      ...prev,
      isLiked: !prev.isLiked,
      likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1
    }));
  };

  const toggleSave = () => {
    setInteraction(prev => ({ ...prev, isSaved: !prev.isSaved }));
  };

  return (
    <div className={cn(
      "flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer",
      className
    )}>
      {/* Image section with tag, date, and like */}
      <div className="relative h-48 rounded-t-3xl overflow-hidden"
           style={{
             backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/89dafe52a0d03ae9b02acccc843db13487ffbb5a?width=549')`,
             backgroundSize: 'cover',
             backgroundPosition: 'center'
           }}>
        {/* Tag */}
        <div className="absolute top-4 left-4">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1">
            <span className="text-xs font-semibold text-[#284566]">Social</span>
          </div>
        </div>

        {/* Date */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl px-3 py-2">
          <div className="text-center">
            <div className="text-lg font-bold text-[#284566]">28</div>
            <div className="text-xs text-[#7D96B3]">Aug</div>
          </div>
        </div>

        {/* Like button at bottom right */}
        <button
          onClick={toggleLike}
          className={cn(
            "absolute bottom-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-white shadow-sm transition-all duration-200 hover:scale-110",
            interaction.isLiked ? "bg-red-50" : ""
          )}
        >
          <Heart className={cn("w-4 h-4", interaction.isLiked ? "text-red-500 fill-red-500" : "text-gray-400")} />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 py-3 flex-1">
        <h3 className="font-bold text-xl text-black mb-2">Basketball Championship</h3>
        <div className="flex items-center gap-4 text-sm text-black/60 mb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            <span>Breakfast Club Asaba</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3" />
            <span>02:30 PM</span>
          </div>
        </div>
        <p className="text-sm text-muted-color mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te...
        </p>
      </div>

      {/* Footer sections - stick to bottom */}
      <div className="mt-auto">
        {/* User info and register button */}
        <div className="px-4 py-3 border-t border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">U</span>
            </div>
            <span className="text-sm font-semibold text-black">by International student Association</span>
          </div>
          
          <div className="bg-[#EEF5FF] border border-[#D6E6FF] rounded-lg p-2 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">⏰</span>
              </div>
              <div>
                <div className="text-xs font-semibold text-[#284566]">{interaction.likes} attending</div>
                <div className="text-xs text-[#284566]/80">Tap to view details</div>
              </div>
            </div>
            <button className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-600 transition-colors">
              Register now
            </button>
          </div>
        </div>

        {/* Stats and save */}
        <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="flex items-center -space-x-2">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/314c1f3fd96ee15b612365c9c688cae745756431?width=42" 
                className="w-6 h-6 rounded-full border-2 border-white" 
                alt="User" 
              />
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/314c1f3fd96ee15b612365c9c688cae745756431?width=42" 
                className="w-6 h-6 rounded-full border-2 border-white" 
                alt="User" 
              />
              <div className="w-6 h-6 bg-[#07122A] rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">28+</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Interaction stats */}
            <div className="flex items-center gap-4 text-[#7D96B3]">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span className="text-xs">{interaction.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs">{interaction.comments}</span>
              </div>
            </div>

            {/* Save button */}
            <button
              onClick={toggleSave}
              className={cn(
                "w-8 h-8 rounded-full border border-gray-200 bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110",
                interaction.isSaved ? "bg-yellow-50 border-yellow-300" : ""
              )}
            >
              <Bookmark className={cn("w-4 h-4", interaction.isSaved ? "text-yellow-600 fill-yellow-600" : "text-[#7D96B3]")} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Product Card Component
function ProductCard({ className }: CardProps) {
  const [interaction, setInteraction] = useState<CardInteraction>({
    isLiked: false,
    isSaved: false,
    likes: 0,
    comments: 0,
    views: 0
  });

  const toggleLike = () => {
    setInteraction(prev => ({
      ...prev,
      isLiked: !prev.isLiked,
      likes: prev.isLiked ? prev.likes - 1 : prev.likes + 1
    }));
  };

  const toggleSave = () => {
    setInteraction(prev => ({ ...prev, isSaved: !prev.isSaved }));
  };

  return (
    <div className={cn(
      "flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer",
      className
    )}>
      {/* Image section with tag and like */}
      <div className="relative h-48 rounded-t-3xl overflow-hidden"
           style={{
             backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/89dafe52a0d03ae9b02acccc843db13487ffbb5a?width=549')`,
             backgroundSize: 'cover',
             backgroundPosition: 'center'
           }}>
        {/* Tag */}
        <div className="absolute top-4 left-4">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-3 py-1">
            <span className="text-xs font-semibold text-[#284566]">Social</span>
          </div>
        </div>

        {/* Like button */}
        <button
          onClick={toggleLike}
          className={cn(
            "absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-white shadow-sm transition-all duration-200 hover:scale-110",
            interaction.isLiked ? "bg-red-50" : ""
          )}
        >
          <Heart className={cn("w-4 h-4", interaction.isLiked ? "text-red-500 fill-red-500" : "text-gray-400")} />
        </button>
      </div>

      {/* Content */}
      <div className="px-4 py-3 flex-1">
        <h3 className="font-bold text-xl text-black mb-2">Fairly used iPhone for sale</h3>
        <div className="flex items-center gap-4 text-sm text-black/60 mb-3">
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            <span>Campus Hall</span>
          </div>
        </div>
        <p className="text-sm text-muted-color mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te...
        </p>
      </div>

      {/* Footer sections - stick to bottom */}
      <div className="mt-auto">
        {/* User info and price */}
        <div className="px-4 py-3 border-t border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">U</span>
            </div>
            <span className="text-sm font-semibold text-black">David</span>
          </div>
          
          <div className="bg-[#F3FF83] border border-[#D6E6FF] rounded-2xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-[#4D535C]">₦5000</span>
              <span className="text-xs text-muted-color line-through">₦18.90</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-xs font-medium hover:bg-blue-600 transition-colors">
              Buy now
            </button>
          </div>
        </div>

        {/* Stats and save */}
        <div className="px-4 py-3 flex items-center justify-between border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className="flex items-center -space-x-2">
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/566dbc77ab95fa68ba3f587551d24c6ddbaebf1d?width=42" 
                className="w-6 h-6 rounded-full border-2 border-white" 
                alt="User" 
              />
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/566dbc77ab95fa68ba3f587551d24c6ddbaebf1d?width=42" 
                className="w-6 h-6 rounded-full border-2 border-white" 
                alt="User" 
              />
              <div className="w-6 h-6 bg-[#07122A] rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">28+</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Interaction stats */}
            <div className="flex items-center gap-4 text-[#7D96B3]">
              <div className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                <span className="text-xs">{interaction.views}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                <span className="text-xs">{interaction.comments}</span>
              </div>
            </div>

            {/* Save button */}
            <button
              onClick={toggleSave}
              className={cn(
                "w-8 h-8 rounded-full border border-gray-200 bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-200 hover:scale-110",
                interaction.isSaved ? "bg-yellow-50 border-yellow-300" : ""
              )}
            >
              <Bookmark className={cn("w-4 h-4", interaction.isSaved ? "text-yellow-600 fill-yellow-600" : "text-[#7D96B3]")} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Content Grid Component
interface ContentGridProps {
  className?: string;
}

export function ContentGrid({ className }: ContentGridProps) {
  return (
    <section className={cn("space-y-6", className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnnouncementCard />
        <RegularPostCard />
        <EventCard />
        <ProductCard />
        <AnnouncementCard />
        <EventCard />
        <ProductCard />
        <RegularPostCard />
      </div>
    </section>
  );
}
