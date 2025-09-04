import React from 'react';
import { cn } from '@/lib/utils';
import { 
  Settings, 
  Upload, 
  Download, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';

interface BalanceSidebarProps {
  className?: string;
}

const newsItems = [
  {
    id: 1,
    title: 'Boring Girls',
    subtitle: 'Sera Taylor',
    description: 'Amazing very interesting novel by Sera Taylor, Must read for everyone.',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/8f7b0e949c4fec7413af273d51ba2183c8568cb7?width=760'
  },
  {
    id: 2,
    title: 'Boring Girls',
    subtitle: 'Sera Taylor',
    description: 'Amazing very interesting novel by Sera Taylor, Must read for everyone.',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/c14c211f41660302757b780eb50265725b2f1f53?width=760'
  }
];

const trendingItems = [
  {
    id: 1,
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=351'
  },
  {
    id: 2,
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=351'
  }
];

export function BalanceSidebar({ className }: BalanceSidebarProps) {
  return (
    <div className={cn("bg-white p-6 space-y-7 h-full overflow-y-auto", className)}>
      {/* Balance Card */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-3xl p-6 text-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-sora font-semibold">Hello, Abdullah!</span>
          </div>
          <Settings className="w-6 h-6 text-white" />
        </div>

        {/* Balance Section */}
        <div className="bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl p-6 mb-6">
          <div className="text-center space-y-4">
            <div>
              <div className="text-purple-300 text-sm mb-2">Main balance</div>
              <div className="font-sora font-bold">
                <span className="text-2xl">₦</span>
                <span className="text-3xl">14,235</span>
                <span className="text-lg">.34</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <button className="flex flex-col items-center gap-2 text-white">
                <Upload className="w-4 h-4" />
                <span className="text-xs font-sora">Top up</span>
              </button>
              
              <div className="w-px h-6 bg-purple border-purple" />
              
              <button className="flex flex-col items-center gap-2 text-white">
                <Download className="w-4 h-4" />
                <span className="text-xs font-sora">Withdraw</span>
              </button>
              
              <div className="w-px h-6 bg-purple border-purple" />
              
              <button className="flex flex-col items-center gap-2 text-white">
                <RotateCcw className="w-4 h-4" />
                <span className="text-xs font-sora">History</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Campus News Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-xl text-black">Campus News</h3>
          <button className="flex items-center gap-1 text-primary-blue text-sm font-sora">
            <span>View all</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-4">
          {newsItems.map((item) => (
            <div key={item.id} className="relative">
              <img 
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-44 object-cover rounded-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Trending Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-xl text-black">Trending</h3>
          <button className="flex items-center gap-1 text-button-grey text-sm font-sora">
            <span>View all</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="flex gap-3">
          {trendingItems.map((item) => (
            <div key={item.id} className="flex-1">
              <img 
                src={item.imageUrl}
                alt="Trending"
                className="w-full h-32 object-cover rounded-2xl shadow-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
