
import React from 'react';
import { Gem, ShoppingCart, Star } from 'lucide-react';
import { User } from '../types';

const MarketplaceScreen: React.FC<{ user: User }> = ({ user }) => {
  return (
    <div className="h-full flex flex-col bg-[#0B0B14] galaxy-bg">
      <div className="p-6 pt-10">
        <div className="flex items-center justify-between mb-8">
           <h1 className="text-3xl font-bold tracking-tight">Market</h1>
           <div className="flex items-center gap-2 bg-[#1B0033] px-4 py-2 rounded-2xl border border-[#3EE0FF]/30 shadow-[0_0_15px_rgba(62,224,255,0.1)]">
              <Gem size={20} className="text-[#3EE0FF]" />
              <span className="font-bold">{user.diamonds}</span>
           </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
           {['All', 'Skins', 'Boosters', 'Items', 'Collectibles'].map(cat => (
             <button key={cat} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs hover:border-[#FF5CA8] transition-colors whitespace-nowrap">
                {cat}
             </button>
           ))}
        </div>

        {/* Featured Items */}
        <div className="grid grid-cols-2 gap-4">
          <StoreItem 
            name="Neon Frame V1" 
            price={100} 
            image="https://picsum.photos/seed/item1/150/150" 
            type="Skin"
          />
          <StoreItem 
            name="Double Exp Boost" 
            price={50} 
            image="https://picsum.photos/seed/item2/150/150" 
            type="Booster"
          />
          <StoreItem 
            name="Galaxy Avatar" 
            price={250} 
            image="https://picsum.photos/seed/item3/150/150" 
            type="Skin"
          />
          <StoreItem 
            name="Golden Star" 
            price={500} 
            image="https://picsum.photos/seed/item4/150/150" 
            type="Rare"
          />
        </div>
      </div>
    </div>
  );
};

const StoreItem: React.FC<{ name: string; price: number; image: string; type: string }> = ({ name, price, image, type }) => (
  <div className="bg-[#1B0033]/40 rounded-2xl border border-white/5 p-3 group active:scale-95 transition-all">
    <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
      <img src={image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute top-2 right-2 px-2 py-1 bg-black/60 backdrop-blur-md rounded-lg text-[8px] font-bold text-gray-300 uppercase tracking-widest">
        {type}
      </div>
    </div>
    <h3 className="text-xs font-bold text-white mb-1">{name}</h3>
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1">
        <Gem size={12} className="text-[#3EE0FF]" />
        <span className="text-xs font-bold text-[#3EE0FF]">{price}</span>
      </div>
      <button className="p-2 rounded-lg bg-[#FF5CA8]/10 text-[#FF5CA8] hover:bg-[#FF5CA8] hover:text-white transition-colors">
        <ShoppingCart size={14} />
      </button>
    </div>
  </div>
);

export default MarketplaceScreen;
