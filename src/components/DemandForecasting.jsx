import React, { useState } from 'react';
import { TrendingUp, Calendar, BarChart3, AlertCircle, Target, Download, Filter } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { pointsDeVente, preCommandes, livraisonsHistorique } from '../data/mockData';

const DemandForecasting = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('6months');
  const [selectedSpecies, setSelectedSpecies] = useState('all');

  // Données historiques de demande (6 derniers mois)
  const historicalDemand = [
    { month: 'Juil', ngolo: 2200, tilapia: 1800, kongoYaSika: 900, total: 4900 },
    { month: 'Août', ngolo: 2400, tilapia: 2000, kongoYaSika: 1000, total: 5400 },
    { month: 'Sept', ngolo: 2600, tilapia: 2200, kongoYaSika: 1100, total: 5900 },
    { month: 'Oct', ngolo: 2800, tilapia: 2400, kongoYaSika: 1200, total: 6400 },
    { month: 'Nov', ngolo: 3000, tilapia: 2600, kongoYaSika: 1300, total: 6900 },
    { month: 'Déc', ngolo: 3200, tilapia: 2800, kongoYaSika: 1400, total: 7400 }
  ];

  // Prévisions (3 prochains mois)
  const forecastData = [
    { month: 'Jan', ngolo: 3400, tilapia: 3000, kongoYaSika: 1500, total: 7900, confiance: 85 },
    { month: 'Fév', ngolo: 3600, tilapia: 3200, kongoYaSika: 1600, total: 8400, confiance: 80 },
    { month: 'Mar', ngolo: 3800, tilapia: 3400, kongoYaSika: 1700, total: 8900, confiance: 75 }
  ];

  // Données combinées pour le graphique
  const combinedData = [
    ...historicalDemand.map(d => ({ ...d, type: 'historique' })),
    ...forecastData.map(d => ({ ...d, type: 'prevision' }))
  ];

  // Analyse par point de vente
  const demandByPoint = pointsDeVente
    .filter(p => p.status === 'actif')
    .map(p => ({
      nom: p.nom,
      zone: p.zone,
      volumeActuel: p.volumeMensuel,
      previsionCroissance: Math.floor(Math.random() * 30) + 10, // 10-40%
      demandePrevue: Math.floor(p.volumeMensuel * (1 + (Math.random() * 0.3 + 0.1)))
    }))
    .sort((a, b) => b.demandePrevue - a.demandePrevue);

  // Analyse saisonnière
  const seasonalAnalysis = [
    { saison: 'Janv-Mars', demande: 'Haute', facteur: 1.2, raison: 'Saison sèche, forte demande' },
    { saison: 'Avr-Juin', demande: 'Moyenne', facteur: 1.0, raison: 'Début saison pluies' },
    { saison: 'Juil-Sept', demande: 'Haute', facteur: 1.15, raison: 'Fêtes et événements' },
    { saison: 'Oct-Déc', demande: 'Très Haute', facteur: 1.3, raison: 'Fin année, Noël' }
  ];

  // Recommandations de production
  const productionRecommendations = [
    {
      espece: 'Ngolo',
      productionActuelle: 30000,
      demandePrevisionnelle: 40800,
      ecart: 10800,
      recommandation: 'Augmenter production de 36%',
      priorite: 'haute',
      action: 'Augmenter alevinage de 11,500 unités'
    },
    {
      espece: 'Tilapia',
      productionActuelle: 10500,
      demandePrevisionnelle: 13800,
      ecart: 3300,
      recommandation: 'Augmenter production de 31%',
      priorite: 'moyenne',
      action: 'Augmenter alevinage de 8,600 unités'
    },
    {
      espece: 'Kongo ya Sika',
      productionActuelle: 6050,
      demandePrevisionnelle: 7650,
      ecart: 1600,
      recommandation: 'Augmenter production de 26%',
      priorite: 'moyenne',
      action: 'Augmenter alevinage de 4,800 unités'
    }
  ];

  // Indicateurs clés
  const kpiForecasting = [
    { label: 'Croissance demande', value: '+17%', trend: 'up', color: 'text-green-400' },
    { label: 'Taux satisfaction', value: '94%', trend: 'stable', color: 'text-blue-400' },
    { label: 'Pré-commandes', value: preCommandes.length, trend: 'up', color: 'text-purple-400' },
    { label: 'Fiabilité prévisions', value: '82%', trend: 'up', color: 'text-cyan-400' }
  ];

  const getTrendIcon = (trend) => {
    if (trend === 'up') return '↗️';
    if (trend === 'down') return '↘️';
    return '➡️';
  };

  const getPriorityBadge = (priority) => {
    switch(priority) {
      case 'haute': return 'bg-red-500/20 text-red-400 border-red-500/50';
      case 'moyenne': return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'basse': return 'bg-green-500/20 text-green-400 border-green-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2 flex items-center neon-glow">
              <TrendingUp className="w-7 h-7 mr-3 text-cyan-400" />
              <span>Prévisions de Demande & Analytics</span>
            </h3>
            <p className="text-gray-400">Analyse prédictive et recommandations de production</p>
          </div>
          <button className="btn-gradient px-6 py-3 rounded-xl font-bold shadow-lg flex items-center space-x-2 hover:scale-105 transition-all">
            <Download className="w-5 h-5" />
            <span>Exporter Rapport</span>
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {kpiForecasting.map((kpi, idx) => (
          <div key={idx} className="glass-effect-strong rounded-xl p-5 border border-white/10 hover:scale-105 transition-all">
            <p className="text-sm text-gray-400 mb-2">{kpi.label}</p>
            <div className="flex items-end justify-between">
              <p className={`text-3xl font-bold ${kpi.color}`}>{kpi.value}</p>
              <span className="text-2xl">{getTrendIcon(kpi.trend)}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Graphique Principal */}
      <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-xl font-bold flex items-center">
            <BarChart3 className="w-6 h-6 mr-2 text-cyan-400" />
            Historique & Prévisions de Demande
          </h4>
          <div className="flex items-center space-x-2">
            <select
              value={selectedSpecies}
              onChange={(e) => setSelectedSpecies(e.target.value)}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none text-white text-sm"
            >
              <option value="all">Toutes espèces</option>
              <option value="ngolo">Ngolo</option>
              <option value="tilapia">Tilapia</option>
              <option value="kongoYaSika">Kongo ya Sika</option>
            </select>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={combinedData}>
            <defs>
              <linearGradient id="colorNgolo" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorTilapia" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorKongo" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }}
              labelStyle={{ color: '#e2e8f0', fontWeight: 'bold' }}
            />
            <Legend />
            {(selectedSpecies === 'all' || selectedSpecies === 'ngolo') && (
              <Area type="monotone" dataKey="ngolo" stroke="#3b82f6" fillOpacity={1} fill="url(#colorNgolo)" name="Ngolo (kg)" />
            )}
            {(selectedSpecies === 'all' || selectedSpecies === 'tilapia') && (
              <Area type="monotone" dataKey="tilapia" stroke="#10b981" fillOpacity={1} fill="url(#colorTilapia)" name="Tilapia (kg)" />
            )}
            {(selectedSpecies === 'all' || selectedSpecies === 'kongoYaSika') && (
              <Area type="monotone" dataKey="kongoYaSika" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorKongo)" name="Kongo ya Sika (kg)" />
            )}
          </AreaChart>
        </ResponsiveContainer>

        <div className="mt-4 flex items-center justify-center space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-gray-400">Historique (6 mois)</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
            <span className="text-gray-400">Prévisions (3 mois)</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recommandations de Production */}
        <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
          <h4 className="text-xl font-bold mb-6 flex items-center">
            <Target className="w-6 h-6 mr-2 text-cyan-400" />
            Recommandations de Production
          </h4>

          <div className="space-y-4">
            {productionRecommendations.map((rec, idx) => (
              <div key={idx} className="glass-effect rounded-xl p-4 border border-white/10 hover:border-cyan-500/50 transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h5 className="font-bold text-lg text-cyan-400">{rec.espece}</h5>
                    <p className="text-sm text-gray-400">{rec.recommandation}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-lg text-xs font-semibold border ${getPriorityBadge(rec.priorite)}`}>
                    {rec.priorite}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">Production actuelle</p>
                    <p className="text-lg font-bold text-blue-400">{rec.productionActuelle.toLocaleString()} kg</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">Demande prévue</p>
                    <p className="text-lg font-bold text-green-400">{rec.demandePrevisionnelle.toLocaleString()} kg</p>
                  </div>
                </div>

                <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3">
                  <p className="text-xs font-semibold text-orange-400 mb-1">📋 Action recommandée</p>
                  <p className="text-sm text-gray-300">{rec.action}</p>
                  <div className="mt-2 flex items-center">
                    <div className="flex-1 h-2 bg-white/10 rounded-full">
                      <div 
                        className="h-full bg-orange-400 rounded-full" 
                        style={{ width: `${(rec.ecart / rec.demandePrevisionnelle) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-2 text-xs font-bold text-orange-400">+{rec.ecart.toLocaleString()} kg</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Demande par Point de Vente */}
        <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
          <h4 className="text-xl font-bold mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-2 text-cyan-400" />
            Top Points de Vente - Prévisions
          </h4>

          <div className="space-y-3 max-h-[500px] overflow-y-auto">
            {demandByPoint.slice(0, 8).map((point, idx) => (
              <div key={idx} className="glass-effect rounded-xl p-4 border border-white/10 hover:scale-102 transition-all">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="font-semibold">{point.nom}</p>
                    <p className="text-xs text-gray-400">{point.zone}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-lg bg-green-500/20 text-green-400 font-semibold">
                    +{point.previsionCroissance}%
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-2">
                  <div>
                    <p className="text-xs text-gray-400">Actuel</p>
                    <p className="text-sm font-bold text-blue-400">{point.volumeActuel} kg/mois</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Prévu</p>
                    <p className="text-sm font-bold text-green-400">{point.demandePrevue} kg/mois</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-1 h-2 bg-white/10 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all" 
                      style={{ width: `${(point.demandePrevue / Math.max(...demandByPoint.map(p => p.demandePrevue))) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Analyse Saisonnière */}
      <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
        <h4 className="text-xl font-bold mb-6 flex items-center">
          <Calendar className="w-6 h-6 mr-2 text-cyan-400" />
          Analyse Saisonnière de la Demande
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {seasonalAnalysis.map((season, idx) => (
            <div key={idx} className="glass-effect rounded-xl p-5 border border-white/10 hover:scale-105 transition-all">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-bold text-cyan-400">{season.saison}</h5>
                <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${
                  season.demande === 'Très Haute' ? 'bg-red-500/20 text-red-400' :
                  season.demande === 'Haute' ? 'bg-orange-500/20 text-orange-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  {season.demande}
                </span>
              </div>

              <div className="mb-3">
                <p className="text-sm text-gray-400 mb-2">Facteur de demande</p>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 h-3 bg-white/10 rounded-full">
                    <div 
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" 
                      style={{ width: `${season.facteur * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-lg font-bold text-cyan-400">×{season.facteur}</span>
                </div>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                <p className="text-xs text-gray-300">{season.raison}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Alertes et Insights */}
      <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
        <h4 className="text-xl font-bold mb-6 flex items-center">
          <AlertCircle className="w-6 h-6 mr-2 text-yellow-400" />
          Insights & Recommandations Stratégiques
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="font-semibold text-green-400 mb-1">✅ Opportunité de Croissance</p>
                <p className="text-sm text-gray-300">La demande globale augmente de 17% sur les 3 prochains mois. Augmentez votre production pour répondre à cette demande croissante.</p>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <p className="font-semibold text-orange-400 mb-1">⚠️ Écart Production-Demande</p>
                <p className="text-sm text-gray-300">Un écart de 15,700 kg est prévu entre votre production actuelle et la demande. Planifiez dès maintenant l'augmentation de l'alevinage.</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="font-semibold text-blue-400 mb-1">📅 Pic Saisonnier Imminent</p>
                <p className="text-sm text-gray-300">Janvier-Mars représente une période de forte demande (×1.2). Assurez-vous d'avoir suffisamment de stock disponible.</p>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="font-semibold text-purple-400 mb-1">📊 Diversification Recommandée</p>
                <p className="text-sm text-gray-300">Le Ngolo représente 43% de votre demande. Considérez l'augmentation de la production de Kongo ya Sika pour mieux équilibrer votre offre.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemandForecasting;
