
import React from 'react';
import { Hash, Plus, Users, ArrowUpRight } from 'lucide-react';

const CirclesScreen: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-[#0B0B14]">
      <div className="p-4 border-b border-white/5 glass-panel">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Circles</h1>
          <button className="p-2 rounded-full bg-white/5"><Plus size={20} /></button>
        </div>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto pb-24">
        {/* My Circles */}
        <div className="flex gap-4 overflow-x-auto py-2">
          {['Gamerz', 'Art_Club', 'ZX_Lounge'].map((name, i) => (
            <div key={i} className="flex flex-col items-center gap-1 min-w-[60px]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#FF5CA8] to-purple-600 p-1">
                <div className="w-full h-full rounded-xl bg-[#0B0B14] flex items-center justify-center overflow-hidden">
                   <img src={`https://picsum.photos/seed/myc${i}/60/60`} className="w-full h-full object-cover" />
                </div>
              </div>
              <span className="text-[10px] text-gray-400">{name}</span>
            </div>
          ))}
        </div>

        {/* Recommended Circles Feed */}
        <div className="space-y-4">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden group">
              <div className="relative h-24 bg-[#1B0033]">
                <img src={`https://picsum.photos/seed/feed${i}/400/100`} className="w-full h-full object-cover opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B14] to-transparent"></div>
                <div className="absolute bottom-2 left-4 flex items-center gap-2">
                  <div className="w-10 h-10 rounded-xl bg-purple-500 border-2 border-[#0B0B14] overflow-hidden">
                    <img src={`https://picsum.photos/seed/avatar${i}/40/40`} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">The Void Collective</h4>
                    <p className="text-[10px] text-gray-400">#Cyberpunk #Philosophy</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-300 line-clamp-2 mb-3">
                  Discussing the intersection of technology and existence. What makes a ghost in the shell?
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center -space-x-2">
                    {[1, 2, 3].map(j => (
                      <div key={j} className="w-6 h-6 rounded-full border border-[#0B0B14] bg-gray-700 overflow-hidden text-[8px] flex items-center justify-center">
                        <img src={`https://picsum.photos/seed/u${j*i}/20/20`} />
                      </div>
                    ))}
                    <span className="text-[10px] text-gray-500 ml-4">+420</span>
                  </div>
                  <button className="flex items-center gap-1 text-[10px] font-bold text-[#3EE0FF] group-hover:underline">
                    Explore <ArrowUpRight size={12} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CirclesScreen;
