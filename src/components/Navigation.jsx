import React, { useState, useEffect, useRef } from 'react';
import { Activity, RefreshCw, Fish, DollarSign, Calendar, Package, Droplets, FileText, Store, ChevronLeft, ChevronRight } from 'lucide-react';

const Navigation = ({ activeTab, setActiveTab }) => {
  const [showLeftScroll, setShowLeftScroll] = useState(false);
  const [showRightScroll, setShowRightScroll] = useState(false);
  const scrollContainerRef = useRef(null);

  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: Activity, color: 'from-cyan-500 to-blue-500', badge: null },
    { id: 'realtime', label: 'Temps Réel', icon: RefreshCw, color: 'from-blue-500 to-teal-500', badge: 'LIVE' },
    { id: 'production', label: 'Production', icon: Fish, color: 'from-teal-500 to-cyan-500', badge: null },
    { id: 'finances', label: 'Finances', icon: DollarSign, color: 'from-yellow-500 to-orange-500', badge: null },
    { id: 'sales', label: 'Points de Vente', icon: Store, color: 'from-green-500 to-emerald-500', badge: null },
    { id: 'tasks', label: 'Tâches', icon: Calendar, color: 'from-purple-500 to-pink-500', badge: '3' },
    { id: 'feeding', label: 'Alimentation', icon: Package, color: 'from-emerald-500 to-green-500', badge: null },
    { id: 'treatments', label: 'Traitements', icon: Droplets, color: 'from-cyan-500 to-blue-500', badge: null },
    { id: 'expenses', label: 'Dépenses', icon: FileText, color: 'from-slate-500 to-gray-600', badge: null }
  ];

  // Gérer l'affichage des boutons de défilement
  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setShowLeftScroll(scrollLeft > 0);
      setShowRightScroll(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  // Défilement fluide
  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Navigation au clavier
  useEffect(() => {
    const handleKeyPress = (e) => {
      const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
      
      if (e.key === 'ArrowRight' && currentIndex < tabs.length - 1) {
        setActiveTab(tabs[currentIndex + 1].id);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setActiveTab(tabs[currentIndex - 1].id);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [activeTab, setActiveTab, tabs]);

  // Scroll vers l'onglet actif
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeButton = scrollContainerRef.current.querySelector(`[data-tab="${activeTab}"]`);
      if (activeButton) {
        activeButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [activeTab]);

  return (
    <div className="container mx-auto px-6 py-4 animate-slide-up">
      <div className="relative group">
        {/* Container principal */}
        <div className="relative glass-effect-strong rounded-2xl p-2 border border-white/10 shadow-2xl overflow-hidden">
          {/* Effet de fond animé */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/5 via-blue-500/5 to-teal-600/5 opacity-50 animate-gradient bg-[length:200%_auto]"></div>
          
          {/* Bouton de défilement gauche */}
          {showLeftScroll && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-slate-900/90 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-slate-800 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Défiler vers la gauche"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Bouton de défilement droite */}
          {showRightScroll && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-slate-900/90 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-slate-800 transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Défiler vers la droite"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

          {/* Container des onglets avec défilement */}
          <div 
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="relative flex space-x-2 overflow-x-auto scrollbar-hide px-10"
          >
            {tabs.map((tab, idx) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              
              return (
                <button
                  key={tab.id}
                  data-tab={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group/tab relative flex items-center space-x-3 px-6 py-3.5 rounded-xl transition-all duration-300 whitespace-nowrap font-semibold focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                    isActive
                      ? 'text-white scale-105 shadow-2xl'
                      : 'text-gray-400 hover:text-white hover:scale-102'
                  }`}
                  style={{
                    animationDelay: `${idx * 0.05}s`
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  tabIndex={0}
                >
                  {/* Fond actif avec gradient */}
                  {isActive && (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-r ${tab.color} rounded-xl opacity-100 transition-all duration-300`}></div>
                      <div className={`absolute inset-0 bg-gradient-to-r ${tab.color} rounded-xl blur-xl opacity-60 animate-pulse-glow`}></div>
                      
                      {/* Bordure lumineuse */}
                      <div className="absolute inset-0 rounded-xl border-2 border-white/20"></div>
                    </>
                  )}
                  
                  {/* Fond hover */}
                  {!isActive && (
                    <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover/tab:opacity-100 transition-opacity duration-300"></div>
                  )}
                  
                  {/* Icône avec animation */}
                  <div className="relative z-10">
                    <Icon className={`w-5 h-5 transition-all duration-300 ${
                      isActive 
                        ? 'scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' 
                        : 'group-hover/tab:scale-110 group-hover/tab:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]'
                    }`} />
                  </div>
                  
                  {/* Label */}
                  <span className={`relative z-10 transition-all duration-300 ${
                    isActive ? 'font-bold tracking-wide' : ''
                  }`}>
                    {tab.label}
                  </span>

                  {/* Badge (notifications, compteur, etc.) */}
                  {tab.badge && (
                    <div className={`relative z-10 ${
                      tab.badge === 'LIVE' 
                        ? 'px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse flex items-center space-x-1'
                        : 'w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-pulse'
                    }`}>
                      {tab.badge === 'LIVE' && (
                        <span className="w-2 h-2 bg-white rounded-full animate-ping absolute"></span>
                      )}
                      <span className="relative">{tab.badge}</span>
                    </div>
                  )}
                  
                  {/* Indicateur de sélection en bas */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse"></div>
                  )}

                  {/* Indicateur hover en haut */}
                  {!isActive && (
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-white/50 rounded-full group-hover/tab:w-8 transition-all duration-300"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Ligne décorative en bas */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Indicateur de raccourcis clavier */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <kbd className="px-2 py-1 bg-slate-800/50 border border-white/10 rounded text-white">←</kbd>
              <kbd className="px-2 py-1 bg-slate-800/50 border border-white/10 rounded text-white">→</kbd>
              <span>pour naviguer</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default Navigation;
