import React from 'react';
import { cn } from '@/lib/utils';
import { Clock, Calendar } from 'lucide-react';

interface PersonCardProps {
  name: string;
  role: string;
  avatarUrl: string;
  testimonial: string;
  testimonialAuthor: string;
  className?: string;
}

function PersonCard({ name, role, avatarUrl, testimonial, testimonialAuthor, className }: PersonCardProps) {
  return (
    <div className={cn("bg-white rounded-3xl p-4 shadow-sm", className)}>
      <div className="flex flex-col items-center space-y-4">
        {/* Avatar and Info */}
        <div className="text-center space-y-2">
          <img 
            src={avatarUrl}
            alt={name}
            className="w-23 h-23 rounded-full mx-auto"
          />
          <div>
            <h3 className="font-medium text-lg text-black">{name}</h3>
            <p className="text-sm text-muted-color">{role}</p>
          </div>
        </div>

        {/* Testimonial */}
        <div className="bg-blue-50 rounded-2xl p-3 w-full">
          <p className="text-sm text-black text-right leading-relaxed mb-3">
            {testimonial}
          </p>
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg text-black">{testimonialAuthor}</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center -space-x-2">
              <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white" />
              <div className="w-6 h-6 bg-primary-dark rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">28+</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface PhotoCollageCardProps {
  title: string;
  description: string;
  author: string;
  mainImageUrl: string;
  imageUrls: string[];
  className?: string;
}

function PhotoCollageCard({ title, description, author, mainImageUrl, imageUrls, className }: PhotoCollageCardProps) {
  return (
    <div className={cn("bg-white rounded-3xl p-4 shadow-sm", className)}>
      <div className="space-y-4">
        {/* Image Collage */}
        <div className="h-44 rounded-3xl overflow-hidden">
          <div className="flex h-full gap-1">
            <div className="flex-1">
              <img 
                src={mainImageUrl}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              {imageUrls.map((url, index) => (
                <div key={index} className="flex-1">
                  <img 
                    src={url}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-bold text-xl text-black leading-tight">{title}</h3>
          <p className="text-sm text-text-grey">{description}</p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-2 pt-2">
          <div className="w-6 h-6 bg-purple rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-semibold">U</span>
          </div>
          <span className="font-semibold text-sm text-black">{author}</span>
        </div>

        {/* Bottom Section */}
        <div className="w-full pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center -space-x-2">
              <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white" />
              <div className="w-6 h-6 bg-primary-dark rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">28+</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  month: string;
  author: string;
  eventType: 'register' | 'buy';
  price?: string;
  backgroundImageUrl: string;
  attendees?: number;
  className?: string;
}

function EventCard({ title, description, date, month, author, eventType, price, backgroundImageUrl, attendees, className }: EventCardProps) {
  return (
    <div className={cn("bg-white rounded-3xl p-4 shadow-sm", className)}>
      <div className="space-y-4">
        {/* Background Image with Overlays */}
        <div 
          className="relative h-44 rounded-3xl overflow-hidden"
          style={{
            backgroundImage: `url('${backgroundImageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Date Badge */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-xl p-2 text-center shadow-sm">
            <div className="text-lg font-bold text-gray-700">{date}</div>
            <div className="text-xs text-gray-500">{month}</div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-xs font-semibold text-gray-700">Social</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h3 className="font-bold text-xl text-black leading-tight">{title}</h3>
          <p className="text-sm text-text-grey">{description}</p>
        </div>

        {/* Author */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-purple rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-semibold">U</span>
          </div>
          <span className="font-semibold text-sm text-black">{author}</span>
        </div>

        {/* Action Section */}
        <div className={cn(
          "rounded-2xl p-3 flex items-center justify-between",
          eventType === 'buy' ? "bg-yellow-200" : "bg-blue-50"
        )}>
          <div className="flex items-center gap-3">
            {eventType === 'register' && (
              <>
                <div className="w-5 h-5 bg-primary-blue rounded-full flex items-center justify-center">
                  <Clock className="w-3 h-3 text-white" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-700">{attendees} attending</div>
                  <div className="text-xs text-gray-600">Tap to view details</div>
                </div>
              </>
            )}
            {eventType === 'buy' && price && (
              <>
                <div>
                  <div className="text-lg font-bold text-gray-700">{price}</div>
                </div>
                <div className="text-sm text-text-grey">05:00</div>
              </>
            )}
          </div>
          
          <button className="bg-primary-blue text-white px-4 py-1.5 rounded-full text-xs font-medium">
            {eventType === 'register' ? 'Register now' : 'Buy now'}
          </button>
        </div>

        {/* Bottom Section */}
        <div className="w-full pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center -space-x-2">
              <div className="w-6 h-6 bg-gray-200 rounded-full border-2 border-white" />
              <div className="w-6 h-6 bg-primary-dark rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-white text-xs font-bold">28+</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ContentGridProps {
  className?: string;
}

export function ContentGrid({ className }: ContentGridProps) {
  const cardData = [
    {
      type: 'person' as const,
      data: {
        name: 'Cameron Williamson',
        role: 'Web Development',
        avatarUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/5caaf0d4733bd393db1c850b27eac7df08ce5886?width=183',
        testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut',
        testimonialAuthor: 'Esther Howard'
      }
    },
    {
      type: 'photo-collage' as const,
      data: {
        title: 'Basketball Championship Finals',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te...',
        author: 'Amos',
        mainImageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/881988892d1c226e6c8ecb99b7a7586b298bc04b?width=297',
        imageUrls: [
          'https://api.builder.io/api/v1/image/assets/TEMP/186bfee530c338606c0f1c1a78503a497d270bec?width=297',
          'https://api.builder.io/api/v1/image/assets/TEMP/46f0ff6cb34b8b80492e66cce066354d6c3d16e4?width=297'
        ]
      }
    },
    {
      type: 'event' as const,
      data: {
        title: 'Basketball Championship',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te...',
        date: '28',
        month: 'Aug',
        author: 'by International student Association',
        eventType: 'register' as const,
        attendees: 85,
        backgroundImageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/8c93f850c2c395862245d6f6465ba106302def03?width=617'
      }
    },
    {
      type: 'event' as const,
      data: {
        title: 'Fairly used iPhone for sale',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod te...',
        date: '28',
        month: 'Aug',
        author: 'David',
        eventType: 'buy' as const,
        price: '₦5000',
        backgroundImageUrl: 'https://api.builder.io/api/v1/image/assets/TEMP/8c93f850c2c395862245d6f6465ba106302def03?width=617'
      }
    }
  ];

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", className)}>
      {cardData.map((card, index) => {
        if (card.type === 'person') {
          return (
            <PersonCard
              key={index}
              {...card.data}
            />
          );
        } else if (card.type === 'photo-collage') {
          return (
            <PhotoCollageCard
              key={index}
              {...card.data}
            />
          );
        } else if (card.type === 'event') {
          return (
            <EventCard
              key={index}
              {...card.data}
            />
          );
        }
        return null;
      })}
    </div>
  );
}
