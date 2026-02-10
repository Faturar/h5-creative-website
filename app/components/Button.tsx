import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'light';
  className?: string;
};

const variantStyles = {
  primary: 'bg-primary text-white shadow-soft hover:brightness-110',
  ghost: 'bg-white/70 text-slate-900 border border-white/60 hover:bg-white',
  light: 'bg-white text-primary border border-primary/20 hover:bg-primary hover:text-white'
};

export default function Button({ children, variant = 'primary', className = '' }: ButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`rounded-full px-6 py-3 text-sm font-semibold transition-all ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
