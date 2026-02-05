
import React from 'react';
import { Mail, Lock, LogIn, Store } from 'lucide-react';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-brand-accent">
      {/* Split background design elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/10 -skew-x-12 transform translate-x-1/2 hidden md:block"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-md p-8 relative z-10">
        <div className="bg-brand-surface border border-white/5 rounded-3xl shadow-2xl p-10 backdrop-blur-sm">
          <div className="flex flex-col items-center mb-10">
            <div className="w-16 h-16 bg-brand-primary rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-brand-primary/20">
              <Store size={32} className="text-white" />
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight">Marvelle Shop</h1>
            <p className="text-gray-400 mt-2">Login to your POS account</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-primary transition-colors" size={20} />
                <input 
                  type="email" 
                  defaultValue="admin@marvelle.shop"
                  className="w-full bg-brand-accent border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-primary/50 transition-all text-sm"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center ml-1">
                <label className="text-sm font-medium text-gray-300">Password</label>
                <a href="#" className="text-xs text-brand-primary hover:underline font-semibold">Forgot password?</a>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-brand-primary transition-colors" size={20} />
                <input 
                  type="password" 
                  defaultValue="password123"
                  className="w-full bg-brand-accent border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-brand-primary/50 transition-all text-sm"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-brand-primary text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-brand-primary/25 hover:brightness-110 active:scale-[0.98] transition-all mt-4"
            >
              <LogIn size={20} />
              SIGN IN NOW
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-white/5 text-center">
            <p className="text-sm text-gray-400">
              Don't have an account? 
              <a href="#" className="text-brand-primary font-bold ml-2 hover:underline">Register</a>
            </p>
          </div>
        </div>
        
        <p className="text-center text-gray-600 text-[10px] mt-8 uppercase tracking-widest">
          © 2024 MARVELLE SHOP POS v3.2.1
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
