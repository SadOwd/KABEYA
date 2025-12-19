import React, { useState } from 'react';
import { Store, MapPin, Phone, Mail, User, TrendingUp, Package, Clock, CheckCircle, AlertCircle, Plus, Search, Filter, Download, Calendar, DollarSign } from 'lucide-react';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { pointsDeVente, livraisonsHistorique, preCommandes, statsPointsVente } from '../data/mockData';

const SalesPoints = () => {
  const [activeView, setActiveView] = useState('pointsVente');
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPoints = pointsDeVente.filter(point => {
    const matchStatus = filterStatus === 'all' || point.status === filterStatus;
    const matchSearch = point.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       point.zone.toLowerCase().includes(searchTerm.toLowerCase());
    return matchStatus && matchSearch;
  });

  const statsByType = pointsDeVente.reduce((acc, point) => {
    acc[point.type] = (acc[point.type] || 0) + 1;
    return acc;
  }, {});

  const typeChartData = Object.entries(statsByType).map(([name, value]) => ({ name, value }));

  const statsByZone = pointsDeVente.reduce((acc, point) => {
    if (point.status === 'actif') {
      acc[point.zone] = (acc[point.zone] || 0) + point.volumeMensuel;
    }
    return acc;
  }, {});

  const zoneChartData = Object.entries(statsByZone).map(([name, value]) => ({ name, value }));

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4', '#f97316'];

  const getStatusBadge = (status) => {
    switch(status) {
      case 'actif': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'inactif': return 'bg-red-500/20 text-red-400 border-red-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getPriorityBadge = (priority) => {
    switch(priority) {
      case 'haute': return 'bg-red-500/20 text-red-400';
      case 'moyenne': return 'bg-orange-500/20 text-orange-400';
      case 'basse': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getCommandeStatusBadge = (status) => {
    switch(status) {
      case 'confirmee': return { bg: 'bg-green-500/20', text: 'text-green-400', border: 'border-green-500/50', label: 'Confirmée', icon: CheckCircle };
      case 'en-attente': return { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/50', label: 'En attente', icon: Clock };
      case 'annulee': return { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/50', label: 'Annulée', icon: AlertCircle };
      default: return { bg: 'bg-gray-500/20', text: 'text-gray-400', border: 'border-gray-500/50', label: status, icon: Package };
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="glass-effect-strong rounded-2xl p-6 border border-white/10 shadow-2xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2 flex items-center neon-glow">
              <Store className="w-8 h-8 mr-3 text-cyan-400" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Gestion Points de Vente & Commandes
              </span>
            </h2>
            <p className="text-gray-400">Distribution, livraisons et pré-commandes de production</p>
          </div>
          <button className="btn-gradient px-6 py-3 rounded-xl font-bold shadow-lg flex items-center space-x-2 hover:scale-105 transition-all">
            <Plus className="w-5 h-5" />
            <span>Nouveau Point de Vente</span>
          </button>
        </div>

        {/* Statistiques Rapides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-effect rounded-xl p-4 border border-white/10 hover:scale-105 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Points de Vente</p>
                <p className="text-3xl font-bold text-blue-400">{statsPointsVente.totalPointsVente}</p>
                <p className="text-xs text-green-400 mt-1">↑ {statsPointsVente.pointsActifs} actifs</p>
              </div>
              <Store className="w-12 h-12 text-blue-400 opacity-50" />
            </div>
          </div>

          <div className="glass-effect rounded-xl p-4 border border-white/10 hover:scale-105 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Volume Mensuel</p>
                <p className="text-3xl font-bold text-green-400">{statsPointsVente.volumeTotalMensuel.toLocaleString()} kg</p>
                <p className="text-xs text-gray-400 mt-1">Production distribuée</p>
              </div>
              <TrendingUp className="w-12 h-12 text-green-400 opacity-50" />
            </div>
          </div>

          <div className="glass-effect rounded-xl p-4 border border-white/10 hover:scale-105 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">CA Mensuel</p>
                <p className="text-3xl font-bold text-yellow-400">${statsPointsVente.caMensuelTotal.toLocaleString()}</p>
                <p className="text-xs text-gray-400 mt-1">Distribution totale</p>
              </div>
              <DollarSign className="w-12 h-12 text-yellow-400 opacity-50" />
            </div>
          </div>

          <div className="glass-effect rounded-xl p-4 border border-white/10 hover:scale-105 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">Pré-commandes</p>
                <p className="text-3xl font-bold text-purple-400">{preCommandes.length}</p>
                <p className="text-xs text-gray-400 mt-1">{preCommandes.filter(c => c.status === 'confirmee').length} confirmées</p>
              </div>
              <Package className="w-12 h-12 text-purple-400 opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Sous-sections */}
      <div className="flex space-x-2 overflow-x-auto">
        {['pointsVente', 'preCommandes', 'livraisons', 'statistiques'].map((view) => {
          const labels = {
            pointsVente: `📍 Points de Vente (${filteredPoints.length})`,
            preCommandes: `📦 Pré-commandes (${preCommandes.length})`,
            livraisons: `🚚 Historique Livraisons (${livraisonsHistorique.length})`,
            statistiques: '📊 Statistiques'
          };
          return (
            <button
              key={view}
              onClick={() => setActiveView(view)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all whitespace-nowrap ${
                activeView === view ? 'btn-gradient shadow-lg' : 'glass-effect hover:glass-effect-strong'
              }`}
            >
              {labels[view]}
            </button>
          );
        })}
      </div>

      {/* POINTS DE VENTE VIEW */}
      {activeView === 'pointsVente' && (
        <div className="space-y-6">
          {/* Barre de Recherche */}
          <div className="glass-effect-strong rounded-2xl p-4 border border-white/10 flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[250px] relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher par nom ou zone..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
              >
                <option value="all">Tous les statuts</option>
                <option value="actif">Actifs</option>
                <option value="inactif">Inactifs</option>
              </select>
            </div>
            <button className="px-4 py-2 glass-effect rounded-lg hover:glass-effect-strong transition-all flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Exporter</span>
            </button>
          </div>

          {/* Grille Points de Vente */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredPoints.map((point, idx) => (
              <div
                key={point.id}
                className="glass-effect-strong rounded-2xl p-6 border border-white/10 hover:scale-102 transition-all cursor-pointer card-hover animate-slide-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-xl font-bold">{point.nom}</h3>
                      <span className={`px-3 py-1 rounded-lg text-xs font-semibold border ${getStatusBadge(point.status)}`}>
                        {point.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 flex items-center">
                      <Store className="w-4 h-4 mr-1" />
                      {point.type}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">ID: {point.id}</p>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm">
                    <MapPin className="w-4 h-4 text-blue-400 mr-2" />
                    <span className="text-gray-300">{point.adresse}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <User className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-gray-300">{point.responsable}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="w-4 h-4 text-purple-400 mr-2" />
                    <span className="text-gray-300">{point.telephone}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">Volume Mensuel</p>
                    <p className="text-lg font-bold text-cyan-400">{point.volumeMensuel.toLocaleString()} kg</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-xs text-gray-400 mb-1">CA Mensuel</p>
                    <p className="text-lg font-bold text-green-400">${point.chiffreAffairesMensuel.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PRÉ-COMMANDES VIEW */}
      {activeView === 'preCommandes' && (
        <div className="space-y-6">
          {preCommandes.map((commande, idx) => {
            const statusInfo = getCommandeStatusBadge(commande.status);
            const StatusIcon = statusInfo.icon;
            
            return (
              <div key={commande.id} className="glass-effect-strong rounded-2xl p-6 border border-white/10 animate-slide-up" style={{ animationDelay: `${idx * 0.05}s` }}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-bold text-cyan-400">{commande.numero}</h3>
                      <span className={`px-3 py-1 rounded-lg text-xs font-semibold border flex items-center space-x-1 ${statusInfo.bg} ${statusInfo.text} ${statusInfo.border}`}>
                        <StatusIcon className="w-3 h-3" />
                        <span>{statusInfo.label}</span>
                      </span>
                      <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${getPriorityBadge(commande.priorite)} uppercase`}>
                        {commande.priorite}
                      </span>
                    </div>
                    <p className="text-lg font-semibold">{commande.client}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-green-400">${commande.montantTotal.toLocaleString()}</p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-xl p-4 mb-4">
                  <h4 className="font-semibold mb-3 text-cyan-400">📦 Articles commandés</h4>
                  {commande.articles.map((article, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-white/5 rounded-lg mb-2">
                      <span className="font-semibold">{article.espece}</span>
                      <span className="font-bold text-green-400">{article.quantite} kg - ${article.total}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* LIVRAISONS VIEW */}
      {activeView === 'livraisons' && (
        <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
          <h3 className="text-xl font-bold mb-6">Historique des Livraisons</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-3 text-gray-400">ID</th>
                  <th className="text-left p-3 text-gray-400">Date</th>
                  <th className="text-left p-3 text-gray-400">Point de Vente</th>
                  <th className="text-left p-3 text-gray-400">Espèce</th>
                  <th className="text-left p-3 text-gray-400">Quantité</th>
                  <th className="text-left p-3 text-gray-400">Montant</th>
                  <th className="text-left p-3 text-gray-400">Statut</th>
                </tr>
              </thead>
              <tbody>
                {livraisonsHistorique.map((liv) => (
                  <tr key={liv.id} className="border-b border-white/10 hover:bg-white/5">
                    <td className="p-3 text-cyan-400">{liv.id}</td>
                    <td className="p-3">{liv.date}</td>
                    <td className="p-3">{liv.pointVente}</td>
                    <td className="p-3">{liv.espece}</td>
                    <td className="p-3">{liv.quantite} kg</td>
                    <td className="p-3 text-green-400">${liv.montant}</td>
                    <td className="p-3">
                      <span className="px-3 py-1 rounded-lg text-xs bg-green-500/20 text-green-400">
                        {liv.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* STATISTIQUES VIEW */}
      {activeView === 'statistiques' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-6">Répartition par Type</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie data={typeChartData} cx="50%" cy="50%" outerRadius={100} dataKey="value" label>
                  {typeChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-6">Volume par Zone</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={zoneChartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }} />
                <Bar dataKey="value" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </div>
  );
};

export default SalesPoints;
