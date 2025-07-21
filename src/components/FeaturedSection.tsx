import React from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedSection: React.FC = () => {
  const featuredGames = [
    {
      id: '1',
      title: 'Cyberpunk 2077: Phantom Liberty',
      description: 'Experience the ultimate cyberpunk adventure in Night City with the latest expansion.',
      price: 39.99,
      originalPrice: 59.99,
      backgroundImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1920&h=1080&fit=crop',
    },
    {
      id: '2',
      title: 'The Forest of Mysteries',
      description: 'Embark on a magical journey through enchanted forests filled with ancient secrets.',
      price: 24.99,
      backgroundImage: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop',
    },
    {
      id: '3',
      title: 'Mountain Climber VR',
      description: 'Scale the world\'s highest peaks in this breathtaking virtual reality experience.',
      price: 29.99,
      backgroundImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&h=1080&fit=crop',
    },
  ];

  const [currentGame, setCurrentGame] = React.useState(0);

  const nextGame = () => {
    setCurrentGame((prev) => (prev + 1) % featuredGames.length);
  };

  const prevGame = () => {
    setCurrentGame((prev) => (prev - 1 + featuredGames.length) % featuredGames.length);
  };

  const game = featuredGames[currentGame];
  const isDiscounted = game.originalPrice && game.originalPrice > game.price;

  return (
    <section className="relative h-[500px] overflow-hidden featured-section">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${game.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h2 className="text-5xl font-bold mb-4 leading-tight">{game.title}</h2>
          <p className="text-xl mb-6 text-white/90">{game.description}</p>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-2">
              {isDiscounted && (
                <>
                  <span className="text-lg text-white/60 line-through">
                    ${game.originalPrice!.toFixed(2)}
                  </span>
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-bold">
                    -{Math.round(((game.originalPrice! - game.price) / game.originalPrice!) * 100)}%
                  </span>
                </>
              )}
              <span className="text-3xl font-bold text-primary">
                ${game.price.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button size="lg" className="btn-gaming">
              <Play className="h-5 w-5 mr-2" />
              Watch Trailer
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Add to Wishlist
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-6 right-6 z-10 flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={prevGame}
          className="border-white/30 text-white hover:bg-white/20"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={nextGame}
          className="border-white/30 text-white hover:bg-white/20"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {featuredGames.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentGame(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentGame ? 'bg-primary' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedSection;