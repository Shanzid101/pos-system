
import React from 'react';
import { Users, UserPlus, FileText, Receipt, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { CASHFLOW_DATA, PURCHASE_POS_DATA } from '../constants';

const DashboardPage: React.FC = () => {
  const summaryCards = [
    { title: 'Total Customers', value: '1,284', icon: <Users size={24} />, bg: 'bg-rose-500/10', color: 'text-rose-500', trend: '+12.5%' },
    { title: 'Total Vendors', value: '64', icon: <UserPlus size={24} />, bg: 'bg-emerald-500/10', color: 'text-emerald-500', trend: '+2.4%' },
    { title: 'Total Invoices', value: '3,842', icon: <FileText size={24} />, bg: 'bg-amber-500/10', color: 'text-amber-500', trend: '+18.7%' },
    { title: 'Total Bills', value: '152', icon: <Receipt size={24} />, bg: 'bg-sky-500/10', color: 'text-sky-500', trend: '-4.2%' },
  ];

  const incomeVsExpense = [
    { label: 'Income', amount: '৳42,500', percentage: 75, color: 'bg-brand-primary' },
    { label: 'Expense', amount: '৳12,800', percentage: 25, color: 'bg-rose-500' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">Real-time overview of your store performance</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-brand-surface border border-white/5 px-4 py-2 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors">Download PDF</button>
          <button className="bg-brand-primary text-white px-4 py-2 rounded-xl text-sm font-bold hover:brightness-110 shadow-lg shadow-brand-primary/10">Export Report</button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, idx) => (
          <div key={idx} className="bg-brand-surface p-6 rounded-3xl border border-white/5 relative overflow-hidden group hover:border-brand-primary/20 transition-all cursor-default">
            <div className={`w-14 h-14 ${card.bg} ${card.color} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
              {card.icon}
            </div>
            <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{card.title}</p>
            <div className="flex items-end justify-between mt-2">
              <h3 className="text-3xl font-bold">{card.value}</h3>
              <div className={`flex items-center gap-1 text-xs font-bold ${card.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'} bg-brand-accent px-2 py-1 rounded-lg`}>
                {card.trend.startsWith('+') ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                {card.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cashflow Line Chart */}
        <div className="lg:col-span-2 bg-brand-surface p-8 rounded-3xl border border-white/5">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold">Cashflow Analysis (৳)</h3>
            <select className="bg-brand-accent text-xs p-2 rounded-lg border border-white/5 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={CASHFLOW_DATA}>
                <defs>
                  <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#be63f9" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#be63f9" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                <Tooltip 
                  formatter={(value: number) => [`৳${value.toLocaleString()}`, 'Amount']}
                  contentStyle={{backgroundColor: '#1a1a27', borderColor: '#be63f9', borderRadius: '12px'}}
                  itemStyle={{color: '#be63f9'}}
                />
                <Area type="monotone" dataKey="value" stroke="#be63f9" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Progress Section */}
        <div className="bg-brand-surface p-8 rounded-3xl border border-white/5 space-y-10">
          <div>
            <h3 className="text-lg font-bold mb-6">Income vs Expense</h3>
            <div className="space-y-8">
              {incomeVsExpense.map((item, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-gray-400">{item.label}</span>
                    <span className="font-bold">{item.amount}</span>
                  </div>
                  <div className="h-3 w-full bg-brand-accent rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${item.color} rounded-full transition-all duration-1000 shadow-sm`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                  <p className="text-right text-[10px] text-gray-500 font-bold uppercase tracking-widest">{item.percentage}% OF GOAL</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5">
            <h3 className="text-lg font-bold mb-4">Quick Insights</h3>
            <div className="bg-brand-accent p-4 rounded-2xl border border-white/5">
              <p className="text-xs text-gray-400 leading-relaxed">
                Profit margins are up <span className="text-brand-primary font-bold">4.2%</span> compared to last week. Most sales are coming from <span className="text-brand-primary font-bold">Ladies Bags</span> category.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bar Chart Section */}
      <div className="bg-brand-surface p-8 rounded-3xl border border-white/5">
        <h3 className="text-lg font-bold mb-8">Purchase vs POS Report (৳)</h3>
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={PURCHASE_POS_DATA}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
              <Tooltip 
                cursor={{fill: 'rgba(255,255,255,0.05)'}} 
                formatter={(value: number) => [`৳${value.toLocaleString()}`, '']}
                contentStyle={{backgroundColor: '#1a1a27', border: 'none', borderRadius: '12px'}} 
              />
              <Legend verticalAlign="top" align="right" iconType="circle" wrapperStyle={{paddingBottom: '20px'}} />
              <Bar dataKey="purchase" fill="#be63f9" radius={[6, 6, 0, 0]} name="Warehouse Purchase" barSize={30} />
              <Bar dataKey="pos" fill="#232333" stroke="#be63f9" strokeWidth={1} radius={[6, 6, 0, 0]} name="POS Sales" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
