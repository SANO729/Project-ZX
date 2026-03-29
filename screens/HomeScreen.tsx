
import React from 'react';
import { Gem, Search, Bell } from 'lucide-react';
import { User } from '../types';

interface Props {
  user: User;
  onClaimDaily: () => void;
}

const HomeScreen: React.FC<Props> = ({ user, onClaimDaily }) => {
  return (
    <div className="h-full overflow-y-auto pb-24 galaxy-bg">
      {/* Header */}
      <div className="sticky top-0 z-30 flex items-center justify-between p-4 glass-panel border-b border-white/5">
        <div className="w-10 h-10 rounded-full border-2 border-[#FF5CA8] p-[2px]">
           <img src={user.avatar} className="w-full h-full rounded-full object-cover" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-[#1B0033] px-3 py-1 rounded-full border border-purple-500/30">
            <Gem size={14} className="text-[#3EE0FF]" />
            <span className="text-xs font-bold">{user.diamonds}</span>
          </div>
          <Search size={20} className="text-gray-400" />
          <Bell size={20} className="text-gray-400" />
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Daily Bonus Section */}
        <div className="bg-gradient-to-r from-[#1B0033] to-[#0B0B14] rounded-2xl p-4 border border-purple-500/20 relative overflow-hidden group">
          <div className="absolute -right-4 -top-4 w-24 h-24 bg-[#FF5CA8]/10 blur-3xl group-hover:bg-[#FF5CA8]/20 transition-all"></div>
          <h2 className="text-lg font-bold text-white mb-1">Daily Bounty</h2>
          <p className="text-xs text-gray-400 mb-4">Claim your daily 10 diamonds!</p>
          <button 
            onClick={onClaimDaily}
            className="bg-gradient-to-r from-[#FF5CA8] to-[#FF8C2B] text-white text-xs px-4 py-2 rounded-lg font-bold shadow-lg shadow-orange-500/20 active:scale-95 transition-all"
          >
            Claim Rewards
          </button>
        </div>

        {/* Discovery Cards */}
        <div className="grid grid-cols-2 gap-4">
          <DiscoveryCard 
            title="Text Meet" 
            desc="Chat with random souls" 
            color="from-[#3EE0FF] to-[#1B0033]" 
            icon="💬"
          />
          <DiscoveryCard 
            title="Voice Meet" 
            desc="Hear the vibes" 
            color="from-[#FF5CA8] to-[#1B0033]" 
            icon="🎙️"
          />
          <DiscoveryCard 
            title="Drifting Bottle" 
            desc="Leave a message" 
            color="from-[#FF8C2B] to-[#1B0033]" 
            icon="🍾"
            wide
          />
        </div>

        {/* Live Parties */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Live Parties</h3>
            <span className="text-xs text-[#3EE0FF]">View all</span>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {[1, 2, 3].map(i => (
              <div key={i} className="min-w-[120px] aspect-square rounded-xl bg-[#1B0033] p-2 border border-white/5 flex flex-col gap-2 relative">
                <img src={`https://picsum.photos/seed/p${i}/100/100`} className="w-full h-2/3 rounded-lg object-cover" />
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-[10px] truncate">Anime Fans JP</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Circles */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold">Explore Circles</h3>
          </div>
          <div className="space-y-3">
             {[1, 2, 3].map(i => (
               <div key={i} className="flex items-center gap-4 p-3 bg-white/5 rounded-xl border border-white/5">
                 <img src={`https://picsum.photos/seed/c${i}/50/50`} className="w-12 h-12 rounded-lg object-cover" />
                 <div className="flex-1">
                   <h4 className="text-sm font-semibold">Web3 Builders</h4>
                   <p className="text-[10px] text-gray-500">1.2k members • 45 online</p>
                 </div>
                 <button className="text-[10px] font-bold border border-[#FF5CA8] text-[#FF5CA8] px-3 py-1 rounded-full">JOIN</button>
               </div>
             ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const DiscoveryCard: React.FC<{ title: string; desc: string; color: string; icon: string; wide?: boolean }> = ({ title, desc, color, icon, wide }) => (
  <div className={`
    ${wide ? 'col-span-2' : ''}
    bg-gradient-to-br ${color} rounded-2xl p-4 min-h-[120px] flex flex-col justify-between border border-white/10 shadow-lg relative overflow-hidden active:scale-95 transition-transform cursor-pointer
  `}>
    <span className="text-3xl self-end">{icon}</span>
    <div>
      <h3 className="font-bold text-white text-sm">{title}</h3>
      <p className="text-[10px] text-white/70">{desc}</p>
    </div>
  </div>
);

export default HomeScreen;
