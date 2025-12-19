import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Fish, TrendingUp, DollarSign, Users, AlertTriangle, Target, Droplets } from 'lucide-react';
import { productionData, financialData, benefitDistribution, monthlyEvolution } from '../data/mockData';

const Overview = () => {
  const kpis = [
    { 
      title: 'CA par Cycle', 
      value: `$${financialData.caParCycle.toLocaleString()}`, 
      change: '+100%', 
      icon: DollarSign, 
      color: 'bg-green-500', 
      trend: 'up' 
    },
    { 
      title: 'Résultat Net', 
      value: `$${financialData.resultatNet.toLocaleString()}`, 
      change: `+${financialData.roi}% ROI`, 
      icon: TrendingUp, 
      color: 'bg-blue-500', 
      trend: 'up' 
    },
    { 
      title: 'Production', 
      value: '77,800 kg', 
      change: '2 cycles/an', 
      icon: Fish, 
      color: 'bg-purple-500', 
      trend: 'stable' 
    },
    { 
      title: 'Emplois', 
      value: '10-15', 
      change: 'Objectif 2026', 
      icon: Users, 
      color: 'bg-orange-500', 
      trend: 'up' 
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* KPIs Grid Premium */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => {
          const Icon = kpi.icon;
          return (
            <div 
              key={idx} 
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:scale-105 transition-all duration-300 cursor-pointer shadow-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${kpi.color} p-3 rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                    kpi.trend === 'up' ? 'bg-green-500/20 text-green-400' :
                    kpi.trend === 'down' ? 'bg-red-500/20 text-red-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {kpi.change}
                  </span>
                </div>
              </div>
              <h3 className="text-gray-400 text-sm mb-1">{kpi.title}</h3>
              <p className="text-3xl font-bold mb-1 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                {kpi.value}
              </p>
              <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
                <div className={`h-full ${kpi.color} animate-pulse`} style={{ width: '75%' }}></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Production par Espèce */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center">
              <Fish className="w-5 h-5 mr-2 text-blue-400" />
              Production par Espèce (kg)
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
              <XAxis dataKey="species" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }}
                labelStyle={{ color: '#e2e8f0', fontWeight: 'bold' }}
              />
              <Bar dataKey="poidsTarget" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity={1}/>
                  <stop offset="100%" stopColor="#06b6d4" stopOpacity={0.8}/>
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Répartition du Bénéfice */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold flex items-center">
              <Target className="w-5 h-5 mr-2 text-green-400" />
              Répartition du Bénéfice
            </h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={benefitDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {benefitDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }}
                formatter={(value, name, props) => [`$${props.payload.amount.toLocaleString()}`, props.payload.name]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Evolution Chart Full Width */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-cyan-400" />
            Évolution Mensuelle du Cycle
          </h3>
          <div className="flex space-x-2">
            <span className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-lg">● Ventes</span>
            <span className="text-xs bg-red-500/20 text-red-400 px-3 py-1 rounded-lg">● Dépenses</span>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={monthlyEvolution}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }}
              labelStyle={{ color: '#e2e8f0', fontWeight: 'bold' }}
            />
            <Legend />
            <Line type="monotone" dataKey="ventes" stroke="#10b981" strokeWidth={3} name="Ventes ($)" dot={{ fill: '#10b981', r: 5 }} />
            <Line type="monotone" dataKey="depenses" stroke="#ef4444" strokeWidth={3} name="Dépenses ($)" dot={{ fill: '#ef4444', r: 5 }} />
            <Line type="monotone" dataKey="production" stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 5" name="Production (kg)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Indicateurs Temps Réel */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-6 hover:scale-105 transition-all shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <AlertTriangle className="w-8 h-8 text-yellow-400" />
            <span className="text-2xl font-bold text-yellow-400">10-15%</span>
          </div>
          <h4 className="font-semibold mb-1">Taux de Mortalité</h4>
          <p className="text-sm text-gray-400">Estimé selon pratiques sanitaires</p>
          <div className="mt-3 flex items-center space-x-2">
            <div className="flex-1 h-2 bg-white/10 rounded-full">
              <div className="h-full bg-yellow-400 rounded-full" style={{ width: '12%' }}></div>
            </div>
            <span className="text-xs font-semibold text-yellow-400">12%</span>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-6 hover:scale-105 transition-all shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <Droplets className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold text-blue-400">Optimal</span>
          </div>
          <h4 className="font-semibold mb-1">Qualité de l'Eau</h4>
          <p className="text-sm text-gray-400">pH, température, oxygène contrôlés</p>
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
            <div className="bg-white/5 p-2 rounded text-center">
              <p className="text-gray-400">pH</p>
              <p className="font-bold text-cyan-400">7.2</p>
            </div>
            <div className="bg-white/5 p-2 rounded text-center">
              <p className="text-gray-400">T°C</p>
              <p className="font-bold text-cyan-400">28°</p>
            </div>
            <div className="bg-white/5 p-2 rounded text-center">
              <p className="text-gray-400">O₂</p>
              <p className="font-bold text-cyan-400">6.5</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 hover:scale-105 transition-all shadow-xl">
          <div className="flex items-center justify-between mb-3">
            <Target className="w-8 h-8 text-green-400" />
            <span className="text-2xl font-bold text-green-400">{financialData.seuilRentabilite.toLocaleString()} kg</span>
          </div>
          <h4 className="font-semibold mb-1">Seuil de Rentabilité</h4>
          <p className="text-sm text-gray-400">Production minimum pour équilibre</p>
          <div className="mt-3 flex items-center space-x-2">
            <div className="flex-1 h-2 bg-white/10 rounded-full">
              <div className="h-full bg-green-400 rounded-full animate-pulse" style={{ width: '90%' }}></div>
            </div>
            <span className="text-xs font-semibold text-green-400">90%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
