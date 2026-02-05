
import React from 'react';
import { LayoutDashboard, Box, ShoppingCart, FileText, BarChart3, ChevronLeft, ChevronRight, Store } from 'lucide-react';
import { Page } from '../types';

interface SidebarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentPage, setCurrentPage, isOpen, setIsOpen }) => {
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <LayoutDashboard size={20} /> },
    { id: 'inventory', name: 'Inventory', icon: <Box size={20} /> },
    { id: 'pos', name: 'POS', icon: <ShoppingCart size={20} /> },
    { id: 'invoices', name: 'Invoices', icon: <FileText size={20} /> },
    { id: 'reports', name: 'Reports', icon: <BarChart3 size={20} /> },
  ];

  return (
    <aside 
      className={`fixed left-0 top-0 h-full z-40 bg-brand-surface border-r border-white/5 transition-transform duration-300 ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'} md:block`}
    >
      <div className="p-6 flex items-center gap-3 border-b border-white/5">
        <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center">
          <Store className="text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight">MARVELLE</span>
      </div>

      <nav className="mt-8 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentPage(item.id as Page)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all ${
              currentPage === item.id 
                ? 'bg-brand-primary text-white font-semibold shadow-lg shadow-brand-primary/20' 
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
            }`}
          >
            {item.icon}
            <span className="text-sm">{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Mobile Collapse Toggle */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="absolute -right-4 top-20 bg-brand-primary p-1.5 rounded-full shadow-lg text-white md:hidden"
      >
        {isOpen ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
      </button>

      <div className="absolute bottom-8 left-0 w-full px-4">
        <div className="p-4 bg-brand-accent rounded-2xl border border-white/5">
          <p className="text-xs text-gray-500 mb-1">Status</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse"></div>
            <span className="text-xs font-medium">Store Online</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
