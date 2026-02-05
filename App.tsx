
import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import Sidebar from './components/Sidebar';
import TopNav from './components/TopNav';
import DashboardPage from './pages/DashboardPage';
import InventoryPage from './pages/InventoryPage';
import { Page } from './types';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="flex min-h-screen bg-brand-background text-white">
      {/* Sidebar */}
      <Sidebar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen}
      />

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'ml-0'}`}>
        <TopNav onLogout={() => setIsAuthenticated(false)} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        
        <main className="p-4 md:p-8 flex-1 overflow-y-auto">
          {currentPage === 'dashboard' && <DashboardPage />}
          {currentPage === 'inventory' && <InventoryPage />}
          {['pos', 'invoices', 'reports'].includes(currentPage) && (
            <div className="flex flex-col items-center justify-center h-full opacity-50">
              <h1 className="text-2xl font-bold uppercase mb-2">{currentPage} View</h1>
              <p>Module integration in progress...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
