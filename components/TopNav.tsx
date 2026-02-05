
import React from 'react';
import { Bell, MessageSquare, Search, Languages, Menu, LogOut, User, Store } from 'lucide-react';

interface TopNavProps {
  onLogout: () => void;
  toggleSidebar: () => void;
}

const TopNav: React.FC<TopNavProps> = ({ onLogout, toggleSidebar }) => {
  return (
    <header className="h-20 bg-brand-surface border-b border-white/5 flex items-center justify-between px-4 md:px-8 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        {/*  Logo  */}
        <div className="flex items-center gap-2 mr-2 md:hidden">
          <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center">
            <Store size={18} className="text-white" />
          </div>
        </div>

        <button onClick={toggleSidebar} className="p-2 hover:bg-white/5 rounded-lg">
          <Menu size={20} />
        </button>

        <div className="hidden md:flex items-center bg-brand-accent px-4 py-2 rounded-xl border border-white/5 gap-3 w-80 ml-2">
          <Search size={18} className="text-gray-500" />
          <input 
            type="text" 
            placeholder="Search products, orders..." 
            className="bg-transparent border-none outline-none text-sm w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <div className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer px-3 py-1.5 rounded-lg hover:bg-white/5">
          <Languages size={18} />
          <span className="text-sm font-medium">EN</span>
        </div>

        <div className="flex items-center gap-1">
          <button className="p-2 text-gray-400 hover:text-brand-primary relative transition-colors">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-brand-primary rounded-full border-2 border-brand-surface"></span>
          </button>
          <button className="p-2 text-gray-400 hover:text-brand-primary transition-colors">
            <MessageSquare size={20} />
          </button>
        </div>

        <div className="h-10 w-[1px] bg-white/10 mx-1"></div>

        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold">Hi, Shanzid!</p>
            <p className="text-xs text-brand-primary font-medium">Admin</p>
          </div>
          <div className="group relative">
            <button className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-primary to-purple-600 flex items-center justify-center overflow-hidden shadow-lg border-2 border-brand-primary/20">
              <User className="text-white" size={20} />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-brand-surface border border-white/10 rounded-xl shadow-2xl invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all">
              <div className="p-4 border-b border-white/5">
                <p className="text-sm font-bold">Shanzid Hossain</p>
                <p className="text-xs text-gray-500">store@marvelle.com</p>
              </div>
              <button 
                onClick={onLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 transition-colors rounded-b-xl"
              >
                <LogOut size={16} />
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
