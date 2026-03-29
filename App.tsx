
import React, { useState, useEffect, useCallback } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import CirclesScreen from './screens/CirclesScreen';
import ChatScreen from './screens/ChatScreen';
import MarketplaceScreen from './screens/MarketplaceScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomNav from './components/BottomNav';
import DiamondCelebration from './components/DiamondCelebration';
import { User, Mission } from './types';
import { INITIAL_MISSIONS } from './constants';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [missions, setMissions] = useState<Mission[]>(INITIAL_MISSIONS);
  const [showCelebration, setShowCelebration] = useState<{ amount: number; visible: boolean }>({
    amount: 0,
    visible: false,
  });

  // Simulated login/signup
  const handleAuth = (isNew: boolean) => {
    const newUser: User = {
      uid: 'u123',
      displayName: 'ZX_User',
      email: 'user@projectzx.com',
      diamonds: isNew ? 10 : 0,
      avatar: 'https://picsum.photos/seed/zx/200',
      bio: 'Exploring the Project ZX galaxy 🚀',
    };
    setUser(newUser);
    if (isNew) {
      triggerCelebration(10);
    }
  };

  const triggerCelebration = (amount: number) => {
    setShowCelebration({ amount, visible: true });
    setTimeout(() => setShowCelebration(prev => ({ ...prev, visible: false })), 3000);
  };

  const addDiamonds = useCallback((amount: number) => {
    setUser(prev => prev ? { ...prev, diamonds: prev.diamonds + amount } : null);
    triggerCelebration(amount);
  }, []);

  const claimDaily = () => {
    const today = new Date().toISOString().split('T')[0];
    if (user && user.lastDailyClaim !== today) {
      setUser(prev => prev ? { ...prev, lastDailyClaim: today } : null);
      addDiamonds(10);
    }
  };

  const completeMission = (id: string) => {
    setMissions(prev => prev.map(m => {
      if (m.id === id && !m.completed) {
        addDiamonds(m.reward);
        return { ...m, completed: true, progress: m.maxProgress };
      }
      return m;
    }));
  };

  return (
    <HashRouter>
      <div className="relative h-screen w-full max-w-md mx-auto overflow-hidden bg-[#0B0B14] shadow-2xl">
        <Routes>
          <Route 
            path="/" 
            element={user ? <Navigate to="/home" /> : <WelcomeScreen onAuth={handleAuth} />} 
          />
          <Route 
            path="/home" 
            element={user ? <HomeScreen user={user} onClaimDaily={claimDaily} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/circles" 
            element={user ? <CirclesScreen /> : <Navigate to="/" />} 
          />
          <Route 
            path="/chats" 
            element={user ? <ChatScreen /> : <Navigate to="/" />} 
          />
          <Route 
            path="/marketplace" 
            element={user ? <MarketplaceScreen user={user} /> : <Navigate to="/" />} 
          />
          <Route 
            path="/profile" 
            element={user ? (
              <ProfileScreen 
                user={user} 
                missions={missions} 
                onCompleteMission={completeMission} 
              />
            ) : <Navigate to="/" />} 
          />
        </Routes>
        
        {user && <BottomNav />}

        {showCelebration.visible && (
          <DiamondCelebration amount={showCelebration.amount} />
        )}
      </div>
    </HashRouter>
  );
};

export default App;
