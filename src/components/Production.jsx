import React from 'react';
import { Fish, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { productionData, speciesInfo, croissanceData } from '../data/mockData';

const Production = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-2">Gestion de la Production</h2>
        <p className="text-gray-400">Suivi détaillé par espèce et cycle de croissance</p>
      </div>

      {/* Production Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {productionData.map((species, idx) => (
          <div key={idx} className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-xl p-6 hover:scale-105 transition-all shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{species.species}</h3>
              <Fish className="w-8 h-8 text-blue-400" />
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-gray-400">Alevins initiaux</p>
                <p className="text-2xl font-bold text-cyan-400">{species.alevins.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Production cible (kg)</p>
                <p className="text-2xl font-bold text-green-400">{species.poidsTarget.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">CA estimé</p>
                <p className="text-2xl font-bold text-yellow-400">${species.ca.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Taux mortalité</p>
                <div className="flex items-center space-x-2 mt-1">
                  <div className="flex-1 h-2 bg-white/10 rounded-full">
                    <div className="h-full bg-yellow-400 rounded-full" style={{ width: `${species.mortalite}%` }}></div>
                  </div>
                  <span className="text-sm font-bold text-yellow-400">{species.mortalite}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Courbe de Croissance */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6 flex items-center">
          <TrendingUp className="w-5 h-5 mr-2 text-cyan-400" />
          Courbe de Croissance (Poids moyen en grammes)
        </h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={croissanceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
            <XAxis dataKey="semaine" stroke="#94a3b8" label={{ value: 'Semaine', position: 'insideBottom', offset: -5 }} />
            <YAxis stroke="#94a3b8" label={{ value: 'Poids (g)', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }}
              labelStyle={{ color: '#e2e8f0', fontWeight: 'bold' }}
            />
            <Legend />
            <Line type="monotone" dataKey="ngolo" stroke="#3b82f6" strokeWidth={3} name="Ngolo" dot={{ fill: '#3b82f6', r: 4 }} />
            <Line type="monotone" dataKey="tilapia" stroke="#10b981" strokeWidth={3} name="Tilapia" dot={{ fill: '#10b981', r: 4 }} />
            <Line type="monotone" dataKey="kongoYaSika" stroke="#8b5cf6" strokeWidth={3} name="Kongo ya Sika" dot={{ fill: '#8b5cf6', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Caractéristiques des Espèces */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">Caractéristiques des Espèces</h3>
        <div className="space-y-4">
          {speciesInfo.map((info, idx) => (
            <div key={idx} className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-lg mb-2 text-cyan-400">{info.name}</h4>
                  <div className="space-y-1 text-sm">
                    <p className="text-gray-400">
                      <span className="font-semibold">Durée cycle:</span> {info.duree}
                    </p>
                    <p className="text-gray-400">
                      <span className="font-semibold">Poids maturité:</span> {info.poidsMaturite}
                    </p>
                    <p className="text-gray-400">
                      <span className="font-semibold">Prix/kg:</span> <span className="text-green-400">${info.prixKg}</span>
                    </p>
                    <p className="text-gray-400 italic mt-2">{info.observations}</p>
                  </div>
                </div>
                <div>
                  <div className="mb-3">
                    <p className="text-xs font-semibold text-green-400 mb-1">✅ Avantages</p>
                    {info.avantages.map((avantage, i) => (
                      <p key={i} className="text-xs text-gray-400 ml-2">• {avantage}</p>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-yellow-400 mb-1">⚠️ Défis</p>
                    {info.defis.map((defi, i) => (
                      <p key={i} className="text-xs text-gray-400 ml-2">• {defi}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tableau Récapitulatif */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Tableau Récapitulatif</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-3 text-gray-400">Espèce</th>
                <th className="text-left p-3 text-gray-400">Durée Cycle</th>
                <th className="text-left p-3 text-gray-400">Poids Maturité</th>
                <th className="text-left p-3 text-gray-400">Prix/kg</th>
                <th className="text-left p-3 text-gray-400">Observations</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="p-3 font-semibold">Ngolo (Clarias)</td>
                <td className="p-3">5-6 mois</td>
                <td className="p-3">800g - 1,2kg</td>
                <td className="p-3 text-green-400 font-bold">$5</td>
                <td className="p-3 text-sm text-gray-400">Très résistant, croissance rapide</td>
              </tr>
              <tr className="border-b border-white/10 hover:bg-white/5">
                <td className="p-3 font-semibold">Tilapia</td>
                <td className="p-3">6-7 mois</td>
                <td className="p-3">300g - 600g</td>
                <td className="p-3 text-green-400 font-bold">$5</td>
                <td className="p-3 text-sm text-gray-400">Bonne acceptation marché</td>
              </tr>
              <tr className="hover:bg-white/5">
                <td className="p-3 font-semibold">Kongo ya Sika</td>
                <td className="p-3">8-10 mois</td>
                <td className="p-3">1kg et plus</td>
                <td className="p-3 text-green-400 font-bold">$5</td>
                <td className="p-3 text-sm text-gray-400">Produit semi-haut de gamme</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Production;
