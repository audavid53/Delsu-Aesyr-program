import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  className?: string;
}

function CategoryCard({ title, imageUrl, className }: CategoryCardProps) {
  return (
    <div className={cn("relative w-24 h-27 group cursor-pointer", className)}>
      {/* Background with blur effect */}
      <div className="absolute bottom-0 w-24 h-20 rounded-2xl bg-gradient-to-t from-white to-transparent" />
      
      {/* Blurred background image */}
      <img
        src={imageUrl}
        alt=""
        className="absolute top-3 left-8 w-14 h-14 rounded-full blur-sm opacity-60"
      />
      
      {/* Main image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute top-0 left-5 w-14 h-14 rounded-full object-cover shadow-lg"
      />
      
      {/* Category title */}
      <div className="absolute bottom-2 left-0 right-0 text-center">
        <span className="font-sora font-semibold text-xs text-black">
          {title}
        </span>
      </div>
      
      {/* Shadow */}
      <div className="absolute inset-0 rounded-2xl shadow-sm" />
    </div>
  );
}

interface CategoriesSectionProps {
  className?: string;
}

const categories = [
  {
    title: 'Study',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/fbff1ef7fa69cf0154a823fbb8ad6aa39a342c83?width=108'
  },
  {
    title: 'Hustle',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/1bd06ab8819e6864c27fbb41501ac025805631aa?width=108'
  },
  {
    title: 'Creativity',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/da8ab93efbe2b41f2073355a8b3cfe992c38aad3?width=108'
  },
  {
    title: 'Content',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/97aca4649e0b458fe2689f83c41b5c22c3eee71e?width=108'
  },
  {
    title: 'Gym',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/63c5b8900d69f05b15c35bcc9fa37ef4f11316c3?width=108'
  },
  {
    title: 'Lifestyle',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/eb7b822aaebaf9c1af98fc9d28936363f6f14ab1?width=108'
  },
  {
    title: 'Sports',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/35c63fa675b71b88b4661c555281de762119afdf?width=108'
  },
  {
    title: 'Health',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/6f0980c8949f44206fcf9ba8d4f4a6fb1856841d?width=108'
  },
  {
    title: 'Music',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/ad33659c33381eac40061641b81f19d65a13ad9f?width=108'
  }
];

export function CategoriesSection({ className }: CategoriesSectionProps) {
  return (
    <section className={cn("space-y-5", className)}>
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-2xl text-black">Categories</h2>
        
        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button className="w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
            <ChevronLeft className="w-4 h-4 text-purple" />
          </button>
          <button className="w-7 h-7 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow">
            <ChevronRight className="w-4 h-4 text-purple" />
          </button>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="flex items-center gap-10 overflow-x-auto scrollbar-hide pb-7">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            title={category.title}
            imageUrl={category.imageUrl}
            className="flex-shrink-0"
          />
        ))}
      </div>
    </section>
  );
}
