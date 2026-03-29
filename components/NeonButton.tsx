
import React from 'react';

interface NeonButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'orange' | 'purple' | 'magenta';
  fullWidth?: boolean;
}

const NeonButton: React.FC<NeonButtonProps> = ({ label, onClick, variant = 'purple', fullWidth = false }) => {
  const styles = {
    purple: 'bg-[#1B0033] border-[#a855f7] text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]',
    orange: 'bg-[#FF8C2B] border-[#FF8C2B] text-black font-bold shadow-[0_0_15px_rgba(255,140,43,0.4)]',
    magenta: 'bg-transparent border-[#FF5CA8] text-[#FF5CA8] shadow-[0_0_15px_rgba(255,92,168,0.2)]',
  };

  return (
    <button
      onClick={onClick}
      className={`
        ${fullWidth ? 'w-full' : ''}
        px-8 py-3 rounded-full border-2 transition-all active:scale-95
        ${styles[variant]}
      `}
    >
      {label}
    </button>
  );
};

export default NeonButton;
