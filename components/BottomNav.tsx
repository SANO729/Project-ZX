
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Compass, Users, Plus, MessageCircle, ShoppingBag, User } from 'lucide-react';

const BottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 h-20 glass-panel border-t border-white/5 flex items-center justify-around px-2 pb-4 z-50 max-w-md mx-auto">
      <NavLink to="/home" className={({ isActive }) => `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-[#3EE0FF] scale-110' : 'text-gray-500'}`}>
        <Compass size={24} />
        <span className="text-[10px]">Discover</span>
      </NavLink>
      <NavLink to="/circles" className={({ isActive }) => `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-[#3EE0FF] scale-110' : 'text-gray-500'}`}>
        <Users size={24} />
        <span className="text-[10px]">Circles</span>
      </NavLink>
      <button className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#FF8C2B] to-[#FF5CA8] shadow-lg shadow-orange-500/20 transform -translate-y-4">
        <Plus size={28} color="white" strokeWidth={3} />
      </button>
      <NavLink to="/chats" className={({ isActive }) => `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-[#3EE0FF] scale-110' : 'text-gray-500'}`}>
        <MessageCircle size={24} />
        <span className="text-[10px]">Chats</span>
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-[#3EE0FF] scale-110' : 'text-gray-500'}`}>
        <User size={24} />
        <span className="text-[10px]">Profile</span>
      </NavLink>
    </nav>
  );
};

export default BottomNav;
