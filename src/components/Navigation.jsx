import React from 'react';
import { Activity, RefreshCw, Fish, DollarSign, Calendar, Package, Droplets, FileText } from 'lucide-react';

const Navigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'overview', label: 'Vue d\'ensemble', icon: Activity, color: 'from-blue-500 to-cyan-500' },
    { id: 'realtime', label: 'Temps Réel', icon: RefreshCw, color: 'from-green-500 to-emerald-500' },
    { id: 'production', label: 'Production', icon: Fish, color: 'from-purple-500 to-pink-500' },
    { id: 'finances', label: 'Finances', icon: DollarSign, color: 'from-yellow-500 to-orange-500' },
    { id: 'tasks', label: 'Tâches', icon: Calendar, color: 'from-red-500 to-rose-500' },
    { id: 'feeding', label: 'Alimentation', icon: Package, color: 'from-indigo-500 to-blue-500' },
    { id: 'treatments', label: 'Traitements', icon: Droplets, color: 'from-cyan-500 to-teal-500' },
    { id: 'expenses', label: 'Dépenses', icon: FileText, color: 'from-orange-500 to-amber-500' }
  ];

  return (
    <div className="container mx-auto px-6 py-4 animate-slide-up">
      <div className="relative glass-effect-strong rounded-2xl p-2 border border-white/10 shadow-2xl overflow-hidden">
        {/* Effet de fond animé */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-500/5 to-purple-600/5 opacity-50 animate-gradient bg-[length:200%_auto]"></div>
        
        <div className="relative flex space-x-2 overflow-x-auto scrollbar-hide">
          {tabs.map((tab, idx) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`group relative flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 whitespace-nowrap font-semibold ${
                  isActive
                    ? 'text-white scale-105 shadow-lg'
                    : 'text-gray-400 hover:text-white hover:scale-102'
                }`}
                style={{
                  animationDelay: `${idx * 0.05}s`
                }}
              >
                {/* Fond actif avec gradient */}
                {isActive && (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-r ${tab.color} rounded-xl opacity-100 transition-opacity`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-r ${tab.color} rounded-xl blur-xl opacity-50 animate-pulse-glow`}></div>
                  </>
                )}
                
                {/* Fond hover */}
                {!isActive && (
                  <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                )}
                
                {/* Icône */}
                <div className="relative">
                  <Icon className={`w-4 h-4 transition-transform ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                  {isActive && (
                    <div className="absolute inset-0 blur-sm bg-white/50 rounded-full"></div>
                  )}
                </div>
                
                {/* Label */}
                <span className="relative">{tab.label}</span>
                
                {/* Indicateur de sélection */}
                {isActive && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Ligne décorative en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Navigation;
