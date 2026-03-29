
import React from 'react';
import { Settings, Gem, Trophy, ClipboardCheck, ArrowRight } from 'lucide-react';
import { User, Mission } from '../types';

interface Props {
  user: User;
  missions: Mission[];
  onCompleteMission: (id: string) => void;
}

const ProfileScreen: React.FC<Props> = ({ user, missions, onCompleteMission }) => {
  return (
    <div className="h-full flex flex-col bg-[#0B0B14] overflow-y-auto pb-24">
      {/* Profile Header */}
      <div className="relative p-6 pt-12 galaxy-bg">
        <button className="absolute top-12 right-6 p-2 bg-white/5 rounded-full"><Settings size={20} /></button>
        
        <div className="flex flex-col items-center gap-4">
          <div className="w-24 h-24 rounded-3xl border-2 border-[#FF5CA8] p-1 rotate-3">
            <img src={user.avatar} className="w-full h-full rounded-2xl object-cover -rotate-3" />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">{user.displayName}</h2>
            <p className="text-xs text-gray-500">ID: {user.uid.slice(0, 8)}</p>
          </div>
          
          <div className="flex gap-4 w-full justify-center">
             <StatCard icon={<Gem size={14} className="text-[#3EE0FF]" />} label="Diamonds" value={user.diamonds.toString()} />
             <StatCard icon={<Trophy size={14} className="text-[#FF8C2B]" />} label="Rank" value="Novice" />
          </div>
        </div>
      </div>

      {/* Daily Missions */}
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
           <h3 className="font-bold flex items-center gap-2">
             <ClipboardCheck className="text-[#FF5CA8]" size={18} />
             Daily Missions
           </h3>
           <span className="text-[10px] text-gray-500">Resets in 12h</span>
        </div>

        <div className="space-y-3">
          {missions.map(mission => (
            <div key={mission.id} className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center gap-4">
               <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${mission.completed ? 'bg-green-500/20 text-green-500' : 'bg-purple-500/20 text-purple-400'}`}>
                 {mission.completed ? <ClipboardCheck size={20} /> : <Gem size={20} />}
               </div>
               <div className="flex-1">
                 <h4 className="text-xs font-semibold mb-1">{mission.title}</h4>
                 <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#FF5CA8] to-[#FF8C2B] transition-all duration-1000"
                      style={{ width: `${(mission.progress / mission.maxProgress) * 100}%` }}
                    />
                 </div>
                 <p className="text-[8px] mt-1 text-gray-500">{mission.progress} / {mission.maxProgress} completed</p>
               </div>
               <button 
                onClick={() => !mission.completed && onCompleteMission(mission.id)}
                disabled={mission.completed}
                className={`
                  text-[10px] font-bold px-4 py-2 rounded-lg
                  ${mission.completed 
                    ? 'bg-gray-800 text-gray-500' 
                    : 'bg-[#FF5CA8] text-white shadow-lg shadow-pink-500/20 active:scale-95'}
                `}
               >
                 {mission.completed ? 'CLAIMED' : 'CLAIM'}
               </button>
            </div>
          ))}
        </div>

        {/* Stats / Inventory Links */}
        <div className="grid grid-cols-2 gap-3 pt-4">
           <div className="p-4 glass-panel rounded-2xl flex items-center justify-between border border-white/5 group hover:border-[#3EE0FF]/50 cursor-pointer">
              <span className="text-xs font-medium">My Assets</span>
              <ArrowRight size={14} className="text-gray-500 group-hover:text-[#3EE0FF]" />
           </div>
           <div className="p-4 glass-panel rounded-2xl flex items-center justify-between border border-white/5 group hover:border-[#3EE0FF]/50 cursor-pointer">
              <span className="text-xs font-medium">History</span>
              <ArrowRight size={14} className="text-gray-500 group-hover:text-[#3EE0FF]" />
           </div>
        </div>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
  <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-3 flex flex-col items-center">
    <div className="flex items-center gap-1 mb-1">
      {icon}
      <span className="text-[10px] text-gray-400 font-medium uppercase tracking-tighter">{label}</span>
    </div>
    <span className="text-lg font-bold">{value}</span>
  </div>
);

export default ProfileScreen;
