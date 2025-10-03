import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Resource } from '../types/resource';
import { ExternalLink, Star, Clock, Users, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';

interface ResourceCardProps {
  resource: Resource;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/learning-resources/resources/${resource.id}`);
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      goToDetail();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={goToDetail}
      onKeyDown={handleKeyDown}
      // CHANGE 1: Made the card a flex column to control its direct children (image and content).
      className="flex flex-col cursor-pointer rounded-xl shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-blue-300 bg-white"      aria-label={`Open ${resource.title} details`}
    >
      {/* Image Section (No changes here) */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={resource.imageUrl}
          alt={resource.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800';
          }}
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold shadow-sm border border-white/20">
            {resource.type}
          </span>
        </div>
      </div>

      {/* Content Section */}
      {/* CHANGE 2: Added `flex-1` to make this section grow and fill available space. */}
      <div className="p-6 flex flex-1 flex-col gap-4">
        {/* Title and Rating */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-1 line-clamp-2 break-words">
              {resource.title}
            </h3>
            <div className="text-sm text-gray-500">{resource.subTitle}</div>
          </div>

          <div className="flex items-center gap-1 ml-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${i < (resource.rating || 4) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                aria-hidden
              />
            ))}
          </div>
        </div>

        {/* Creative Description Display */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Description</span>
          </div>

          <div className="relative">
            <div
              className={`text-gray-600 leading-relaxed transition-[max-height] duration-300 ${
                isDescriptionExpanded ? 'max-h-[1000px]' : 'max-h-16 overflow-hidden'
              }`}
            >
              <p className={isDescriptionExpanded ? '' : 'line-clamp-2'}>
                {resource.description}
              </p>
            </div>

            {resource.description && resource.description.length > 80 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsDescriptionExpanded(!isDescriptionExpanded);
                }}
                className="flex items-center gap-1 mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                aria-expanded={isDescriptionExpanded}
              >
                {isDescriptionExpanded ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp className="w-3 h-3" />
                  </>
                ) : (
                  <>
                    <span>Read More</span>
                    <ChevronDown className="w-3 h-3" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{resource.duration || 'Self-paced'}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{resource.level || 'All Levels'}</span>
          </div>
        </div>

        {/* Bottom Section (aligned consistently) */}
        {/* CHANGE 3: Used `mt-auto` to push this block to the bottom. Added `pt-4` for spacing. */}
        <div className="flex items-center justify-between mt-auto pt-4">
          <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 rounded-full text-sm font-medium border border-blue-100">
            {resource.category}
          </span>

          <a
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-sm text-sm"
          >
            <span>Access Resource</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
