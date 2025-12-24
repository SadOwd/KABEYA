import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Mail, Store, TrendingUp } from 'lucide-react';
import { pointsDeVente } from '../data/mockData';

const MapView = () => {
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [mapCenter, setMapCenter] = useState({ lat: -4.3276, lng: 15.3136 }); // Kinshasa

  // Simulation carte interactive (sans Leaflet pour éviter les dépendances)
  const zones = [
    { name: 'Gombe', color: '#3b82f6', points: 3 },
    { name: 'Limete', color: '#10b981', points: 1 },
    { name: 'Kalamu', color: '#f59e0b', points: 1 },
    { name: 'Kintambo', color: '#ef4444', points: 1 },
    { name: 'Ngaliema', color: '#8b5cf6', points: 1 },
    { name: 'Bandalungwa', color: '#ec4899', points: 1 }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2 flex items-center">
              <MapPin className="w-7 h-7 mr-3 text-cyan-400" />
              <span className="neon-glow">Carte Interactive - Points de Vente</span>
            </h3>
            <p className="text-gray-400">Localisation GPS et zones de distribution à Kinshasa</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm text-gray-400">Points actifs</p>
              <p className="text-2xl font-bold text-green-400">{pointsDeVente.filter(p => p.status === 'actif').length}</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Zones couvertes</p>
              <p className="text-2xl font-bold text-blue-400">{zones.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Carte Simulée */}
        <div className="lg:col-span-2 glass-effect-strong rounded-2xl p-6 border border-white/10 relative overflow-hidden">
          {/* Fond de carte stylisé */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `repeating-linear-gradient(0deg, rgba(59, 130, 246, 0.1) 0px, transparent 1px, transparent 20px, rgba(59, 130, 246, 0.1) 21px),
                             repeating-linear-gradient(90deg, rgba(59, 130, 246, 0.1) 0px, transparent 1px, transparent 20px, rgba(59, 130, 246, 0.1) 21px)`
          }}></div>

          <div className="relative h-[500px] flex items-center justify-center">
            {/* Simulation de carte avec points */}
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Centre - Kinshasa */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
                  <div className="relative bg-cyan-500/30 border-2 border-cyan-400 rounded-full p-4">
                    <Navigation className="w-8 h-8 text-cyan-400" />
                  </div>
                  <p className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm font-bold text-cyan-400 whitespace-nowrap">
                    Ferme KABEYA
                  </p>
                </div>
              </div>

              {/* Points de vente positionnés */}
              {pointsDeVente.map((point, idx) => {
                // Positions simulées autour du centre
                const angles = [0, 45, 90, 135, 180, 225, 270, 315];
                const angle = angles[idx % 8];
                const radius = 150 + (idx % 3) * 30;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;

                return (
                  <div
                    key={point.id}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top: `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onClick={() => setSelectedPoint(point)}
                  >
                    {/* Cercle d'onde */}
                    <div className="absolute inset-0 animate-ping">
                      <div className={`w-12 h-12 rounded-full ${
                        point.status === 'actif' ? 'bg-green-400/30' : 'bg-red-400/30'
                      }`}></div>
                    </div>
                    
                    {/* Marqueur */}
                    <div className={`relative w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all group-hover:scale-125 ${
                      point.status === 'actif' 
                        ? 'bg-green-500/20 border-green-400' 
                        : 'bg-red-500/20 border-red-400'
                    } ${selectedPoint?.id === point.id ? 'scale-125 shadow-lg shadow-cyan-500/50' : ''}`}>
                      <Store className={`w-5 h-5 ${
                        point.status === 'actif' ? 'text-green-400' : 'text-red-400'
                      }`} />
                    </div>

                    {/* Tooltip au hover */}
                    <div className="absolute left-1/2 -translate-x-1/2 -top-16 opacity-0 group-hover:opacity-100 transition-all pointer-events-none z-10">
                      <div className="glass-effect-strong px-3 py-2 rounded-lg border border-white/20 whitespace-nowrap shadow-xl">
                        <p className="text-xs font-bold text-cyan-400">{point.nom}</p>
                        <p className="text-xs text-gray-400">{point.zone}</p>
                      </div>
                      <div className="w-2 h-2 bg-white/80 rotate-45 mx-auto -mt-1"></div>
                    </div>

                    {/* Ligne de connexion vers le centre */}
                    <svg className="absolute inset-0 pointer-events-none" style={{ width: '400px', height: '400px', left: '-175px', top: '-175px' }}>
                      <line
                        x1="200"
                        y1="200"
                        x2={200 - x}
                        y2={200 - y}
                        stroke={point.status === 'actif' ? '#10b981' : '#ef4444'}
                        strokeWidth="1"
                        strokeDasharray="5,5"
                        opacity="0.3"
                      />
                    </svg>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Légende */}
          <div className="absolute bottom-4 left-4 glass-effect rounded-lg p-3 border border-white/10">
            <p className="text-xs font-semibold mb-2 text-gray-400">Légende</p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-xs">Actif</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <span className="text-xs">Inactif</span>
              </div>
              <div className="flex items-center space-x-2">
                <Navigation className="w-3 h-3 text-cyan-400" />
                <span className="text-xs">Ferme</span>
              </div>
            </div>
          </div>
        </div>

        {/* Panel Détails */}
        <div className="space-y-4">
          {/* Info Point Sélectionné */}
          {selectedPoint ? (
            <div className="glass-effect-strong rounded-2xl p-6 border border-white/10 animate-scale-in">
              <div className="flex items-start justify-between mb-4">
                <h4 className="text-lg font-bold">{selectedPoint.nom}</h4>
                <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                  selectedPoint.status === 'actif' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {selectedPoint.status}
                </span>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">{selectedPoint.adresse}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-gray-300">{selectedPoint.telephone}</span>
                </div>
                {selectedPoint.email && (
                  <div className="flex items-center text-sm">
                    <Mail className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-300 text-xs">{selectedPoint.email}</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Volume/mois</p>
                  <p className="text-lg font-bold text-cyan-400">{selectedPoint.volumeMensuel} kg</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">CA/mois</p>
                  <p className="text-lg font-bold text-green-400">${selectedPoint.chiffreAffairesMensuel}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <p className="text-xs text-gray-400 mb-2">Coordonnées GPS</p>
                <p className="text-sm font-mono text-cyan-400">
                  {selectedPoint.coordonnees.lat.toFixed(4)}, {selectedPoint.coordonnees.lng.toFixed(4)}
                </p>
              </div>

              <button className="w-full mt-4 btn-gradient py-2 rounded-lg font-semibold flex items-center justify-center space-x-2">
                <Navigation className="w-4 h-4" />
                <span>Obtenir l'itinéraire</span>
              </button>
            </div>
          ) : (
            <div className="glass-effect-strong rounded-2xl p-6 border border-white/10 text-center">
              <MapPin className="w-12 h-12 text-gray-500 mx-auto mb-3 opacity-50" />
              <p className="text-gray-400">Cliquez sur un point pour voir les détails</p>
            </div>
          )}

          {/* Zones de Distribution */}
          <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
            <h4 className="font-bold mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-cyan-400" />
              Zones de Distribution
            </h4>
            <div className="space-y-3">
              {zones.map((zone, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: zone.color }}></div>
                    <span className="font-semibold">{zone.name}</span>
                  </div>
                  <span className="text-sm font-bold text-cyan-400">{zone.points} point{zone.points > 1 ? 's' : ''}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
