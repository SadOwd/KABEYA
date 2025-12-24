import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Fish, Award, TrendingUp, Zap } from 'lucide-react';

const SplashScreen = ({ onEnter }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = () => {
    setIsAnimating(true);
    setTimeout(() => {
      onEnter();
    }, 800);
  };

  return (
    <div className={`fixed inset-0 z-[9999] overflow-hidden transition-all duration-800 ${
      isAnimating ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    }`}>
      {/* Image de fond - Poissons/Bassin */}
      <div className="absolute inset-0">
        <img 
          src="/images/fish-background.jpg" 
          alt="Bassin de poissons" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* Fond animé premium avec dégradé dynamique - Overlay sur l'image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-cyan-900/90 to-teal-950/95 animate-gradient-shift">
        {/* Overlay avec effet de vague dynamique */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.25),transparent_50%)] animate-pulse-wave" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(14,165,233,0.25),transparent_50%)] animate-pulse-wave" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(20,184,166,0.25),transparent_50%)] animate-pulse-wave" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_70%,rgba(34,211,238,0.20),transparent_50%)] animate-pulse-wave" style={{ animationDelay: '3s' }} />
        </div>
      </div>

      {/* Effet de bulles d'eau animées */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={`bubble-${i}`}
            className="absolute rounded-full bg-white/20 backdrop-blur-sm animate-bubble-rise"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '-50px',
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 8}s`,
              border: '2px solid rgba(255, 255, 255, 0.1)'
            }}
          />
        ))}
      </div>

      {/* Grille de points animés */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(16,185,129,0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Particules flottantes premium - effet aquatique */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-water"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `rgba(6, 182, 212, ${Math.random() * 0.6 + 0.2})`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 8}s`,
              filter: 'blur(1.5px)',
              boxShadow: '0 0 10px rgba(6, 182, 212, 0.5)'
            }}
          />
        ))}
      </div>

      {/* Cercles lumineux décoratifs - thème aquatique */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-glow animate-float-slow" />
      <div className="absolute bottom-1/4 -right-20 w-[700px] h-[700px] bg-blue-500/20 rounded-full blur-[140px] animate-pulse-glow animate-float-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[100px] animate-pulse-glow animate-float-slow" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sky-500/20 rounded-full blur-[100px] animate-pulse-glow animate-float-slow" style={{ animationDelay: '6s' }} />

      {/* Contenu principal */}
      <div className="relative h-full flex flex-col items-center justify-center p-8">
        
        {/* Badge Premium en haut */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 animate-slide-down">
          <div className="glass-effect-strong px-6 py-3 rounded-full border border-cyan-400/40 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center space-x-3">
              <Award className="w-5 h-5 text-yellow-400 animate-pulse" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 font-bold">
                Système Premium de Gestion Aquacole
              </span>
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Logo Container Premium */}
        <div className="relative mb-12 animate-scale-in">
          {/* Triple glow effect - thème aquatique */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-teal-500 rounded-[3rem] blur-3xl opacity-35 animate-pulse-glow scale-125" />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-[3rem] blur-2xl opacity-45 animate-pulse-glow scale-110" style={{ animationDelay: '0.5s' }} />
          <div className="absolute inset-0 bg-cyan-500 rounded-[3rem] blur-xl opacity-55 animate-pulse-glow scale-105" style={{ animationDelay: '1s' }} />
          
          {/* Container du logo */}
          <div className="relative group cursor-pointer" onClick={handleEnter}>
            {/* Badge "Click to Enter" flottant */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20 animate-bounce-slow">
              <div className="glass-effect-strong px-8 py-3 rounded-2xl border-2 border-cyan-400/60 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5 text-yellow-400 animate-pulse" />
                  <span className="text-white font-bold text-lg">Cliquez pour entrer</span>
                  <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            {/* Cercle décoratif tournant */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-500/40 animate-spin-slow scale-110" />
            <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-spin-slow-reverse scale-115" />

            {/* Container principal du logo */}
            <div className="relative bg-gradient-to-br from-slate-950 to-blue-950/50 backdrop-blur-2xl p-16 rounded-[3rem] border-4 border-cyan-500/50 shadow-[0_0_100px_rgba(6,182,212,0.4)] hover:shadow-[0_0_150px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-700">
              
              {/* Logo */}
              <img 
                src="/images/logo.png" 
                alt="Kabeya Fresh" 
                className="w-80 h-80 object-contain animate-float group-hover:scale-110 transition-transform duration-700 drop-shadow-[0_0_30px_rgba(16,185,129,0.6)]"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              {/* Fallback Icon */}
              <div className="hidden w-80 h-80 items-center justify-center">
                <Fish className="w-48 h-48 text-cyan-400 animate-pulse drop-shadow-[0_0_30px_rgba(6,182,212,0.9)]" />
              </div>

              {/* Effet de brillance premium */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 rounded-[3rem]" />
              
              {/* Coins lumineux */}
              <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-cyan-400/70 rounded-tl-xl animate-pulse-slow" />
              <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/70 rounded-tr-xl animate-pulse-slow" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-cyan-400/70 rounded-bl-xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-cyan-400/70 rounded-br-xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>

        {/* Titre et description premium */}
        <div className="text-center space-y-6 max-w-4xl animate-slide-up" style={{ animationDelay: '0.3s' }}>
          {/* Titre principal */}
          <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tight">
            <span className="inline-block bg-gradient-to-r from-cyan-400 via-blue-300 to-teal-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto] drop-shadow-[0_0_35px_rgba(6,182,212,0.6)]">
              KABEYA FRESH
            </span>
          </h1>
          
          {/* Sous-titre avec icône */}
          <div className="flex items-center justify-center space-x-3 text-2xl md:text-3xl text-gray-300 font-bold">
            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-cyan-400" />
            <Fish className="w-8 h-8 text-cyan-400 animate-pulse" />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Pisciculture Durable
            </span>
            <Fish className="w-8 h-8 text-cyan-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
          
          {/* Localisation */}
          <p className="text-gray-400 text-xl font-medium flex items-center justify-center space-x-2">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            <span>Kinshasa, République Démocratique du Congo</span>
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          </p>

          {/* Statistiques premium avec cartes */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t-2 border-cyan-500/30">
            {[
              { value: '628%', label: 'ROI Annuel', icon: TrendingUp, color: 'from-cyan-400 to-blue-500', delay: '0.5s' },
              { value: '77.8T', label: 'Production/an', icon: Fish, color: 'from-blue-400 to-teal-500', delay: '0.6s' },
              { value: '$389K', label: 'CA/Cycle', icon: Zap, color: 'from-teal-400 to-cyan-500', delay: '0.7s' }
            ].map((stat, idx) => (
              <div key={idx} className="group animate-slide-up" style={{ animationDelay: stat.delay }}>
                <div className="relative glass-effect-strong p-6 rounded-2xl border border-cyan-500/40 hover:border-cyan-400/60 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden">
                  {/* Background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className="relative mb-3 flex justify-center">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Value */}
                  <div className={`text-4xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-sm text-gray-400 font-semibold">
                    {stat.label}
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton CTA Premium */}
        <button
          onClick={handleEnter}
          className="mt-16 relative group animate-slide-up"
          style={{ animationDelay: '0.8s' }}
        >
          {/* Glow externe */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
          
          {/* Bouton */}
          <div className="relative px-12 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-cyan-500/50 transition-all overflow-hidden">
            {/* Contenu */}
            <div className="relative z-10 flex items-center space-x-4">
              <Sparkles className="w-6 h-6 animate-spin-slow" />
              <span>Accéder au Dashboard</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
            </div>
            
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </div>
        </button>

        {/* Barre de progression */}
        <div className="mt-8 w-96 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="glass-effect-strong rounded-full p-1 border border-cyan-500/40">
            <div className="relative h-2 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-blue-400 to-teal-400 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.9)]"
                style={{ width: `${loadingProgress}%` }}
              />
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-2 font-semibold">
            Initialisation du système... {loadingProgress}%
          </p>
        </div>

        {/* Footer premium */}
        <div className="absolute bottom-8 left-0 right-0 text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="flex flex-col items-center space-y-3">
            {/* Version */}
            <div className="glass-effect-strong px-6 py-2 rounded-full border border-cyan-500/30">
              <p className="flex items-center space-x-2 text-sm">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-400">Système de Gestion Intelligent</span>
                <span className="text-cyan-400 font-bold">v1.0 Premium</span>
              </p>
            </div>
            
            {/* Copyright */}
            <p className="text-gray-500 text-sm">© 2025 Kabeya Fresh. Tous droits réservés.</p>
            <p className="text-gray-600 text-xs">Contact: +1 (514) 441-2992 • david.kabeya@hotmail.com</p>
          </div>
        </div>

        {/* Indicateur système actif */}
        <div className="absolute top-8 right-8 animate-slide-in-right">
          <div className="glass-effect-strong px-5 py-3 rounded-2xl border border-cyan-500/40 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center space-x-3">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.9)]"></span>
              </span>
              <div>
                <p className="text-cyan-400 text-sm font-bold">Système Actif</p>
                <p className="text-gray-500 text-xs">Opérationnel 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse-wave {
          0%, 100% { opacity: 0.2; transform: scale(1) translateY(0); }
          50% { opacity: 0.4; transform: scale(1.1) translateY(-10px); }
        }
        @keyframes bubble-rise {
          0% {
            bottom: -50px;
            opacity: 0;
            transform: translateX(0) scale(0.8);
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            bottom: 110vh;
            opacity: 0;
            transform: translateX(calc(var(--random-x, 0) * 100px)) scale(1.2);
          }
        }
        @keyframes float-water {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.6;
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
            opacity: 0.8;
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
            opacity: 0.7;
          }
        }
        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(20px, 20px);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 15s linear infinite;
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 15s ease infinite;
        }
        .animate-pulse-wave {
          animation: pulse-wave 6s ease-in-out infinite;
        }
        .animate-bubble-rise {
          animation: bubble-rise 12s ease-in-out infinite;
        }
        .animate-float-water {
          animation: float-water 8s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
