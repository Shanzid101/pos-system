
import React, { useState } from 'react';
import { Search, Filter, Plus, ChevronRight, Tags, Package, ArrowLeft, MoreHorizontal, Box } from 'lucide-react';
import { INVENTORY_STRUCTURE } from '../constants';
import { Category } from '../types';

const InventoryPage: React.FC = () => {
  const [selectedParent, setSelectedParent] = useState<Category | null>(null);

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Inventory System</h1>
          <p className="text-gray-400 text-sm mt-1">Manage categories, sub-categories, and product hierarchy</p>
        </div>
        <button className="bg-brand-primary text-brand-accent px-6 py-3 rounded-2xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-brand-primary/10">
          <Plus size={20} />
          ADD NEW PRODUCT
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Categories Sidebar */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-brand-surface p-6 rounded-3xl border border-white/5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Store Categories</h3>
            <div className="space-y-2">
              {INVENTORY_STRUCTURE.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedParent(cat)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all ${
                    selectedParent?.id === cat.id 
                      ? 'bg-brand-primary/10 border border-brand-primary/30 text-brand-primary' 
                      : 'hover:bg-white/5 text-gray-400 hover:text-white border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Package size={18} />
                    <span className="text-sm font-semibold">{cat.name}</span>
                  </div>
                  <ChevronRight size={16} />
                </button>
              ))}
            </div>
          </div>

          <div className="bg-brand-surface p-6 rounded-3xl border border-white/5">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Stock Status</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-400">Low Stock</span>
                <span className="bg-rose-500/20 text-rose-500 text-[10px] font-bold px-2 py-0.5 rounded">12 Items</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-gray-400">Out of Stock</span>
                <span className="bg-gray-500/20 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded">05 Items</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-6">
          {selectedParent ? (
            <div className="bg-brand-surface p-8 rounded-3xl border border-white/5 space-y-8 min-h-[600px]">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setSelectedParent(null)}
                  className="p-2 hover:bg-brand-accent rounded-xl text-gray-400 hover:text-brand-primary transition-colors"
                >
                  <ArrowLeft size={20} />
                </button>
                <div>
                  <h2 className="text-2xl font-bold">{selectedParent.name}</h2>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Master Category Structure</p>
                </div>
              </div>

              {selectedParent.attributes && (
                <div className="flex flex-wrap gap-3 p-4 bg-brand-accent rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 px-2">
                    <Tags size={14} />
                    REQUIRED ATTRIBUTES:
                  </div>
                  {selectedParent.attributes.map(attr => (
                    <span key={attr} className="bg-brand-primary/10 text-brand-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase border border-brand-primary/20">
                      {attr}
                    </span>
                  ))}
                </div>
              )}

              {selectedParent.filters && (
                <div className="flex flex-wrap gap-3 p-4 bg-brand-accent rounded-2xl border border-white/5">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 px-2">
                    <Filter size={14} />
                    APPLICABLE FILTERS:
                  </div>
                  {selectedParent.filters.map(filter => (
                    <span key={filter} className="bg-sky-500/10 text-sky-500 text-[10px] font-bold px-3 py-1 rounded-full uppercase border border-sky-500/20">
                      {filter}
                    </span>
                  ))}
                </div>
              )}

              <div>
                <h3 className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-wider">Sub-Categories & Hierarchies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedParent.subcategories?.map(sub => (
                    <div key={sub.id} className="p-6 bg-brand-accent rounded-2xl border border-white/5 hover:border-brand-primary/20 transition-all group">
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-bold text-lg">{sub.name}</span>
                        <MoreHorizontal className="text-gray-600 cursor-pointer" />
                      </div>
                      
                      {sub.subcategories && (
                        <div className="space-y-3 mt-4 pt-4 border-t border-white/5">
                          {sub.subcategories.map(nested => (
                            <div key={nested.id} className="flex items-center gap-3 text-sm text-gray-400">
                              <div className="w-1.5 h-1.5 bg-brand-primary rounded-full"></div>
                              {nested.name}
                            </div>
                          ))}
                        </div>
                      )}
                      
                      <div className="mt-6 flex justify-between items-center">
                        <span className="text-[10px] text-gray-500 font-bold uppercase">42 Products</span>
                        <button className="text-xs text-brand-primary font-bold hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                          View All
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-brand-surface rounded-3xl border border-white/5 h-full flex flex-col items-center justify-center p-12 text-center opacity-60">
              <div className="w-20 h-20 bg-brand-accent rounded-3xl flex items-center justify-center mb-6">
                <Box size={40} className="text-gray-600" />
              </div>
              <h2 className="text-xl font-bold">Select a Master Category</h2>
              <p className="text-sm text-gray-500 mt-2 max-w-xs leading-relaxed">
                Choose a category from the left sidebar to view its sub-category structure, required attributes and filtering logic.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InventoryPage;
