import React from 'react';
import Header from '@/components/Header';
import FeaturedSection from '@/components/FeaturedSection';
import UserAvatars from '@/components/UserAvatars';
import GameCard from '@/components/GameCard';

const Index = () => {
  // Sample games data
  const popularGames = [
    {
      id: '1',
      title: 'Tech Warrior 2087',
      description: 'A futuristic cyberpunk action game set in a dystopian world where technology rules everything.',
      price: 39.99,
      originalPrice: 59.99,
      rating: 4.8,
      coverImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=225&fit=crop',
      tags: ['Action', 'Cyberpunk', 'RPG'],
      genre: 'Action',
    },
    {
      id: '2',
      title: 'Mystic Forest Adventures',
      description: 'Explore magical realms filled with ancient mysteries and powerful creatures in this enchanting RPG.',
      price: 24.99,
      rating: 4.6,
      coverImage: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=225&fit=crop',
      tags: ['RPG', 'Fantasy', 'Adventure'],
      genre: 'RPG',
    },
    {
      id: '3',
      title: 'Mountain Climbing Simulator',
      description: 'Experience the thrill of scaling the world\'s most dangerous peaks in this realistic simulation.',
      price: 19.99,
      rating: 4.4,
      coverImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=225&fit=crop',
      tags: ['Simulation', 'Sports', 'Realistic'],
      genre: 'Simulation',
    },
    {
      id: '4',
      title: 'Matrix: Digital Revolution',
      description: 'Dive into the digital world and fight against the machines in this action-packed adventure.',
      price: 49.99,
      rating: 4.9,
      coverImage: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=225&fit=crop',
      tags: ['Action', 'Sci-Fi', 'Matrix'],
      genre: 'Action',
    },
    {
      id: '5',
      title: 'Pixel Cat Chronicles',
      description: 'Join adorable pixel cats on their quest to save their colorful kingdom from darkness.',
      price: 14.99,
      rating: 4.7,
      coverImage: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=225&fit=crop',
      tags: ['Indie', 'Platformer', 'Cute'],
      genre: 'Indie',
    },
    {
      id: '6',
      title: 'Neon City Racing',
      description: 'Race through neon-lit streets in this high-speed arcade racing game with stunning visuals.',
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.5,
      coverImage: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=225&fit=crop',
      tags: ['Racing', 'Arcade', 'Neon'],
      genre: 'Racing',
    },
  ];

  return (
    <div className="min-h-screen bg-background theme-transition">
      <Header />
      
      {/* Featured Games Carousel */}
      <FeaturedSection />
      
      {/* User Avatars Section */}
      <UserAvatars />
      
      {/* Popular Games Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold">Popular & Trending</h2>
            <a href="#" className="text-primary hover:text-primary/80 font-medium">
              View All →
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularGames.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 featured-section">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Action', 'RPG', 'Indie', 'Racing', 'Simulation', 'Adventure', 'Strategy', 'Casual'].map((category) => (
              <div key={category} className="game-card p-6 text-center cursor-pointer">
                <h3 className="font-semibold text-lg">{category}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {Math.floor(Math.random() * 500) + 50} games
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
