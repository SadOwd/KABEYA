import React, { useState, useEffect } from 'react';
import { Droplets, Thermometer, Wind, Activity, AlertCircle } from 'lucide-react';
import { realtimeData } from '../data/mockData';

const RealtimeMonitoring = () => {
  const [data, setData] = useState(realtimeData);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      // Simuler des variations en temps réel
      setData(prevData => prevData.map(bassin => ({
        ...bassin,
        temperature: (bassin.temperature + (Math.random() - 0.5) * 0.5).toFixed(1),
        ph: (bassin.ph + (Math.random() - 0.5) * 0.1).toFixed(1),
        oxygene: (bassin.oxygene + (Math.random() - 0.5) * 0.2).toFixed(1),
        status: bassin.temperature > 31 ? 'attention' : 'optimal'
      })));
      setLastUpdate(new Date());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status) => {
    switch(status) {
      case 'optimal': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'attention': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'critique': return 'bg-red-500/20 text-red-400 border-red-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getParamColor = (param, value) => {
    if (param === 'temperature') {
      if (value >= 26 && value <= 30) return 'text-green-400';
      if (value > 30 && value <= 32) return 'text-yellow-400';
      return 'text-red-400';
    }
    if (param === 'ph') {
      if (value >= 6.5 && value <= 8.0) return 'text-green-400';
      return 'text-yellow-400';
    }
    if (param === 'oxygene') {
      if (value >= 5) return 'text-green-400';
      if (value >= 3) return 'text-yellow-400';
      return 'text-red-400';
    }
    return 'text-white';
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Monitoring Temps Réel</h2>
            <p className="text-gray-400">Surveillance en direct des bassins</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400">Dernière mise à jour</p>
            <p className="text-lg font-semibold text-cyan-400">{lastUpdate.toLocaleTimeString('fr-FR')}</p>
            <div className="flex items-center justify-end mt-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-xs text-green-400">En ligne</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bassins Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((bassin, idx) => (
          <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all shadow-xl">
            {/* Header Bassin */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">{bassin.bassin}</h3>
                <p className="text-sm text-gray-400">{bassin.espece} • {bassin.poissons.toLocaleString()} poissons</p>
              </div>
              <div className={`px-3 py-1 rounded-lg border ${getStatusColor(bassin.status)} font-semibold text-xs uppercase`}>
                {bassin.status}
              </div>
            </div>

            {/* Paramètres */}
            <div className="grid grid-cols-3 gap-4 mb-4">
              {/* Température */}
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <Thermometer className={`w-6 h-6 mx-auto mb-2 ${getParamColor('temperature', bassin.temperature)}`} />
                <p className="text-xs text-gray-400 mb-1">Température</p>
                <p className={`text-2xl font-bold ${getParamColor('temperature', bassin.temperature)}`}>
                  {bassin.temperature}°C
                </p>
                <p className="text-xs text-gray-500 mt-1">Optimal: 26-30°C</p>
              </div>

              {/* pH */}
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <Droplets className={`w-6 h-6 mx-auto mb-2 ${getParamColor('ph', bassin.ph)}`} />
                <p className="text-xs text-gray-400 mb-1">pH</p>
                <p className={`text-2xl font-bold ${getParamColor('ph', bassin.ph)}`}>
                  {bassin.ph}
                </p>
                <p className="text-xs text-gray-500 mt-1">Optimal: 6.5-8.0</p>
              </div>

              {/* Oxygène */}
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <Wind className={`w-6 h-6 mx-auto mb-2 ${getParamColor('oxygene', bassin.oxygene)}`} />
                <p className="text-xs text-gray-400 mb-1">Oxygène</p>
                <p className={`text-2xl font-bold ${getParamColor('oxygene', bassin.oxygene)}`}>
                  {bassin.oxygene} mg/L
                </p>
                <p className="text-xs text-gray-500 mt-1">Min: 5 mg/L</p>
              </div>
            </div>

            {/* Alertes spécifiques */}
            {bassin.status !== 'optimal' && (
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 flex items-start space-x-2">
                <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-yellow-400">Action requise</p>
                  <p className="text-xs text-gray-300 mt-1">
                    {bassin.temperature > 31 ? 'Température élevée - Vérifier aération' : 'Surveillance recommandée'}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Légende */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h3 className="text-lg font-bold mb-4">Paramètres Optimaux</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-lg p-4">
            <Thermometer className="w-5 h-5 text-blue-400 mb-2" />
            <p className="text-sm font-semibold mb-1">Température</p>
            <p className="text-xs text-gray-400">• Optimal: 26-30°C</p>
            <p className="text-xs text-gray-400">• Tolérance: 24-32°C</p>
            <p className="text-xs text-red-400 mt-1">• Critique: &lt;24°C ou &gt;32°C</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <Droplets className="w-5 h-5 text-cyan-400 mb-2" />
            <p className="text-sm font-semibold mb-1">pH</p>
            <p className="text-xs text-gray-400">• Optimal: 6.5-8.0</p>
            <p className="text-xs text-gray-400">• Neutre: 7.0</p>
            <p className="text-xs text-yellow-400 mt-1">• Surveiller si &lt;6 ou &gt;8.5</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <Wind className="w-5 h-5 text-green-400 mb-2" />
            <p className="text-sm font-semibold mb-1">Oxygène Dissous</p>
            <p className="text-xs text-gray-400">• Optimal: &gt;5 mg/L</p>
            <p className="text-xs text-gray-400">• Minimum: 3 mg/L</p>
            <p className="text-xs text-red-400 mt-1">• Critique: &lt;3 mg/L</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtimeMonitoring;
