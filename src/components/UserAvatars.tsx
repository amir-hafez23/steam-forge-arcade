import React from 'react';
import { Crown, Star, Trophy } from 'lucide-react';

interface User {
  id: string;
  username: string;
  avatar: string;
  status: 'online' | 'away' | 'offline';
  level: number;
  badge?: 'developer' | 'pro' | 'vip';
  recentActivity: string;
}

const UserAvatars: React.FC = () => {
  const users: User[] = [
    {
      id: '1',
      username: 'GameMaster',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
      status: 'online',
      level: 47,
      badge: 'developer',
      recentActivity: 'Published "Space Adventure"',
    },
    {
      id: '2',
      username: 'PixelWarrior',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop',
      status: 'online',
      level: 34,
      badge: 'pro',
      recentActivity: 'Achieved 100% in "Cyber Quest"',
    },
    {
      id: '3',
      username: 'RetroGamer',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b6b5a7e3?w=100&h=100&fit=crop',
      status: 'away',
      level: 28,
      recentActivity: 'Recently played "Neon Runner"',
    },
    {
      id: '4',
      username: 'CodeNinja',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      status: 'online',
      level: 52,
      badge: 'vip',
      recentActivity: 'Purchased "Forest Quest"',
    },
    {
      id: '5',
      username: 'ArtistPro',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      status: 'offline',
      level: 19,
      recentActivity: 'Created new artwork',
    },
  ];

  const getBadgeIcon = (badge?: string) => {
    switch (badge) {
      case 'developer':
        return <Crown className="h-3 w-3 text-yellow-400" />;
      case 'pro':
        return <Star className="h-3 w-3 text-blue-400" />;
      case 'vip':
        return <Trophy className="h-3 w-3 text-purple-400" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-400';
      case 'away':
        return 'bg-yellow-400';
      case 'offline':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Active Community</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="game-card p-4 cursor-pointer hover:scale-105 transition-transform"
            >
              <div className="flex flex-col items-center">
                {/* Avatar with status */}
                <div className="relative mb-3">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="user-avatar w-16 h-16"
                  />
                  <div
                    className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${getStatusColor(
                      user.status
                    )}`}
                  />
                </div>

                {/* Username and badge */}
                <div className="flex items-center space-x-1 mb-1">
                  <h3 className="font-semibold text-sm text-center">{user.username}</h3>
                  {getBadgeIcon(user.badge)}
                </div>

                {/* Level */}
                <div className="text-xs text-primary font-medium mb-2">Level {user.level}</div>

                {/* Recent activity */}
                <p className="text-xs text-muted-foreground text-center line-clamp-2">
                  {user.recentActivity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserAvatars;