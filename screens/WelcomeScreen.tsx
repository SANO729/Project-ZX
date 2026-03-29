
import React, { useState } from 'react';
import NeonButton from '../components/NeonButton';

interface Props {
  onAuth: (isNew: boolean) => void;
}

const WelcomeScreen: React.FC<Props> = ({ onAuth }) => {
  const [agreed, setAgreed] = useState(true);

  return (
    <div className="h-full flex flex-col items-center justify-between p-8 galaxy-bg relative">
      {/* Decorative stars/particles simulation */}
      <div className="absolute top-20 left-10 w-1 h-1 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-[#3EE0FF] rounded-full animate-pulse"></div>
      
      <div className="mt-20 flex flex-col items-center gap-6">
        <div className="w-32 h-32 rounded-full border-4 border-[#3EE0FF] p-2 animate-spin-slow">
           <div className="w-full h-full rounded-full bg-gradient-to-br from-[#1B0033] to-[#FF5CA8] flex items-center justify-center">
              <span className="text-4xl font-bold tracking-tighter">ZX</span>
           </div>
        </div>
        <h1 className="text-4xl font-bold text-white tracking-widest text-center">
          PROJECT <span className="text-[#3EE0FF]">ZX</span>
        </h1>
        <p className="text-gray-400 text-center max-w-[250px]">
          Enter the portal to a new social galaxy.
        </p>
      </div>

      <div className="w-full flex flex-col gap-4 items-center mb-10">
        <div className="flex items-center gap-2 mb-4">
          <input 
            type="checkbox" 
            checked={agreed} 
            onChange={() => setAgreed(!agreed)}
            className="w-4 h-4 accent-[#FF5CA8]"
          />
          <span className="text-[10px] text-gray-500">I agree to Terms & Conditions</span>
        </div>

        <NeonButton 
          variant="orange" 
          label="Sign Up" 
          fullWidth 
          onClick={() => agreed && onAuth(true)}
        />
        <NeonButton 
          variant="purple" 
          label="Log In" 
          fullWidth 
          onClick={() => agreed && onAuth(false)}
        />
        
        <div className="mt-4 flex gap-6 text-gray-500">
          <span className="text-xs hover:text-white cursor-pointer transition-colors">Google</span>
          <span className="text-xs hover:text-white cursor-pointer transition-colors">Discord</span>
          <span className="text-xs hover:text-white cursor-pointer transition-colors">Phone</span>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default WelcomeScreen;
