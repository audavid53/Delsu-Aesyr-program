import React, { useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CategoryCardProps {
  title: string;
  imageUrl: string;
  isSelected: boolean;
  onClick: () => void;
  className?: string;
}

function CategoryCard({ title, imageUrl, isSelected, onClick, className }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative flex flex-col items-center justify-center transition-all duration-300 ease-out group cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-blue/50 rounded-2xl",
        "hover:scale-105 active:scale-95",
        isSelected ? "scale-110" : "scale-100",
        className
      )}
    >
      {/* Card Container */}
      <div className={cn(
        "relative bg-white rounded-2xl p-4 transition-all duration-300 shadow-sm",
        "group-hover:shadow-lg group-hover:-translate-y-1",
        isSelected ? "shadow-lg -translate-y-1 bg-gradient-to-br from-white to-blue-50" : "",
        isSelected ? "w-[110px] h-[120px]" : "w-[98px] h-[110px]"
      )}>
        {/* Image Container */}
        <div className="flex items-center justify-center mb-3">
          <img
            src={imageUrl}
            alt={title}
            className={cn(
              "object-contain transition-all duration-300",
              isSelected ? "w-16 h-16" : "w-14 h-14",
              "group-hover:scale-110"
            )}
          />
        </div>
        
        {/* Category Title */}
        <div className="text-center">
          <span className={cn(
            "font-sora font-semibold text-center transition-all duration-300",
            isSelected ? "text-sm text-primary-blue" : "text-xs text-black",
            "group-hover:text-primary-blue"
          )}>
            {title}
          </span>
        </div>

        {/* Active Indicator */}
        {isSelected && (
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-primary-blue rounded-full animate-in fade-in-50 duration-300" />
        )}
      </div>
    </button>
  );
}

interface CategoriesSectionProps {
  className?: string;
  onCategoryChange?: (category: string) => void;
}

const categories = [
  {
    title: 'Study',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/aa9d46e854dd43739b15275aedf24db6/3cff1dfa04fbf28c62b697e87a096bc85d358cce?placeholderIfAbsent=true',
    id: 'study'
  },
  {
    title: 'Hustle',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/aa9d46e854dd43739b15275aedf24db6/c54373595dd4a21ebd001b0e0136b58ee50ce81a?placeholderIfAbsent=true',
    id: 'hustle'
  },
  {
    title: 'Creativity',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/aa9d46e854dd43739b15275aedf24db6/1a9258c714c8317c49ddbda3f4848bcbfb0f5e6d?placeholderIfAbsent=true',
    id: 'creativity'
  },
  {
    title: 'Content',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/aa9d46e854dd43739b15275aedf24db6/68410619415931007d89aff21ef0083ddc85f99c?placeholderIfAbsent=true',
    id: 'content'
  },
  {
    title: 'Gym',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/aa9d46e854dd43739b15275aedf24db6/79fa007c324acc784d2a40af8ea149a6b89556eb?placeholderIfAbsent=true',
    id: 'gym'
  },
  {
    title: 'Lifestyle',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/aa9d46e854dd43739b15275aedf24db6/72b77eecdbeaf1f97e6dd8eed3895fe825ce6b64?placeholderIfAbsent=true',
    id: 'lifestyle'
  },
  {
    title: 'Sports',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/aa9d46e854dd43739b15275aedf24db6/7f15013e9f5e70df818d974de13ede18fb6e329a?placeholderIfAbsent=true',
    id: 'sports'
  },
  {
    title: 'Health',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/aa9d46e854dd43739b15275aedf24db6/8559cde1d85afa8752521dd1ea31d0054ba77f05?placeholderIfAbsent=true',
    id: 'health'
  },
  {
    title: 'Music',
    imageUrl: 'https://api.builder.io/api/v1/image/assets/aa9d46e854dd43739b15275aedf24db6/8559cde1d85afa8752521dd1ea31d0054ba77f05?placeholderIfAbsent=true',
    id: 'music'
  }
];

export function CategoriesSection({ className, onCategoryChange }: CategoriesSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState('study');

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    onCategoryChange?.(categoryId);
  };

  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <section className={cn("space-y-5", className)}>
      {/* Section Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-gilroy font-semibold text-2xl text-black tracking-[-0.48px]">
          Categories
        </h2>
        
        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button 
            onClick={scrollLeft}
            className="w-7 h-7 bg-primary-blue rounded-full shadow-sm flex items-center justify-center hover:shadow-md hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-blue/50"
            aria-label="Scroll categories left"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          <button 
            onClick={scrollRight}
            className="w-7 h-7 bg-primary-blue rounded-full shadow-sm flex items-center justify-center hover:shadow-md hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-blue/50"
            aria-label="Scroll categories right"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Categories Container */}
      <div className="relative">
        <div 
          ref={scrollContainer}
          className="flex items-center gap-6 sm:gap-8 lg:gap-10 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              imageUrl={category.imageUrl}
              isSelected={selectedCategory === category.id}
              onClick={() => handleCategorySelect(category.id)}
              className="flex-shrink-0"
            />
          ))}
        </div>
        
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-primary-grey to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-primary-grey to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
