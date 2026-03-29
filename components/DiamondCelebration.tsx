
import React from 'react';
import { Gem } from 'lucide-react';

const DiamondCelebration: React.FC<{ amount: number }> = ({ amount }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[100]">
      <div className="animate-bounce flex flex-col items-center gap-2">
        <div className="bg-gradient-to-br from-[#3EE0FF] to-[#a855f7] p-4 rounded-full shadow-[0_0_30px_rgba(62,224,255,0.6)]">
          <Gem size={48} color="white" />
        </div>
        <div className="text-3xl font-bold text-white neon-glow-magenta">
          +{amount} Diamonds!
        </div>
      </div>
    </div>
  );
};

export default DiamondCelebration;
