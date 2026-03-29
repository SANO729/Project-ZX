
import React from 'react';
import { Search, Edit } from 'lucide-react';

const ChatScreen: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-[#0B0B14]">
      <div className="p-4 glass-panel flex items-center justify-between">
        <h1 className="text-xl font-bold">Messages</h1>
        <div className="flex gap-4">
          <Search size={20} className="text-gray-400" />
          <Edit size={20} className="text-[#3EE0FF]" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-24">
        {/* Online Bubbles */}
        <div className="p-4 flex gap-4 overflow-x-auto">
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="relative flex-shrink-0">
              <div className="w-14 h-14 rounded-full border-2 border-green-500/50 p-1">
                <img src={`https://picsum.photos/seed/chat${i}/60/60`} className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="absolute bottom-0 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0B0B14]"></div>
            </div>
          ))}
        </div>

        {/* Chat List */}
        <div className="px-4">
          {[1, 2, 3, 4, 5, 6, 7].map(i => (
            <div key={i} className="flex items-center gap-4 py-4 border-b border-white/5 active:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-purple-500 flex-shrink-0">
                <img src={`https://picsum.photos/seed/msg${i}/50/50`} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-semibold">Luna_Star</h4>
                  <span className="text-[10px] text-gray-500">14:20</span>
                </div>
                <p className="text-xs text-gray-400 truncate">Hey! Did you check out the new circle yet? 🌟</p>
              </div>
              {i % 3 === 0 && (
                <div className="w-5 h-5 rounded-full bg-[#FF5CA8] flex items-center justify-center text-[10px] font-bold">
                  {i}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;
