import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  coverImage: string;
  tags: string[];
  genre: string;
}

const GameCard: React.FC<GameCardProps> = ({
  title,
  description,
  price,
  originalPrice,
  rating,
  coverImage,
  tags,
  genre,
}) => {
  const isDiscounted = originalPrice && originalPrice > price;
  const discountPercentage = isDiscounted 
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className="game-card group">
      {/* Cover Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {isDiscounted && (
          <div className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-bold">
            -{discountPercentage}%
          </div>
        )}
        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded text-sm">
          {genre}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-1">{title}</h3>
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-secondary text-secondary-foreground px-2 py-1 rounded-sm text-xs"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Rating and Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="text-right">
              {isDiscounted && (
                <span className="text-xs text-muted-foreground line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
              <div className="price-tag text-lg font-bold">
                ${price.toFixed(2)}
              </div>
            </div>
            <Button size="sm" className="btn-gaming">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;