import React, { useState } from 'react';
import { FileText, Plus, DollarSign, TrendingDown, PieChart as PieChartIcon } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { expenses } from '../data/mockData';

const Expenses = () => {
  const [expensesList, setExpensesList] = useState(expenses);
  const [filter, setFilter] = useState('all');

  // Calcul des totaux par catégorie
  const categoryTotals = expensesList.reduce((acc, expense) => {
    acc[expense.categorie] = (acc[expense.categorie] || 0) + expense.montant;
    return acc;
  }, {});

  const chartData = Object.entries(categoryTotals).map(([name, value]) => ({
    name,
    value,
    percentage: ((value / expensesList.reduce((sum, e) => sum + e.montant, 0)) * 100).toFixed(1)
  }));

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4'];

  const categories = [...new Set(expensesList.map(e => e.categorie))];
  const filteredExpenses = filter === 'all' ? expensesList : expensesList.filter(e => e.categorie === filter);

  const totalExpenses = expensesList.reduce((sum, e) => sum + e.montant, 0);

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <FileText className="w-6 h-6 mr-2 text-cyan-400" />
              Gestion des Dépenses
            </h2>
            <p className="text-gray-400">Suivi budgétaire et analyse des coûts</p>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-4 py-2 rounded-lg font-semibold transition-all shadow-lg flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Nouvelle Dépense</span>
          </button>
        </div>
      </div>

      {/* Stats Rapides */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6">
          <DollarSign className="w-8 h-8 text-blue-400 mb-3" />
          <p className="text-sm text-gray-400 mb-1">Total Dépenses</p>
          <p className="text-3xl font-bold text-blue-400">${totalExpenses.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6">
          <TrendingDown className="w-8 h-8 text-green-400 mb-3" />
          <p className="text-sm text-gray-400 mb-1">Dépense Moyenne</p>
          <p className="text-3xl font-bold text-green-400">${(totalExpenses / expensesList.length).toFixed(0)}</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6">
          <PieChartIcon className="w-8 h-8 text-orange-400 mb-3" />
          <p className="text-sm text-gray-400 mb-1">Catégories</p>
          <p className="text-3xl font-bold text-orange-400">{categories.length}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-6">
          <FileText className="w-8 h-8 text-purple-400 mb-3" />
          <p className="text-sm text-gray-400 mb-1">Transactions</p>
          <p className="text-3xl font-bold text-purple-400">{expensesList.length}</p>
        </div>
      </div>

      {/* Répartition par Catégorie */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Graphique */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-6">Répartition par Catégorie</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percentage }) => `${name}: ${percentage}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '12px' }}
                formatter={(value) => `$${value.toLocaleString()}`}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Détails par Catégorie */}
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
          <h3 className="text-xl font-bold mb-6">Détails par Catégorie</h3>
          <div className="space-y-3">
            {chartData.map((cat, idx) => (
              <div key={idx} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <div 
                      className="w-4 h-4 rounded" 
                      style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                    ></div>
                    <span className="font-semibold">{cat.name}</span>
                  </div>
                  <span className="text-lg font-bold" style={{ color: COLORS[idx % COLORS.length] }}>
                    ${cat.value.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 h-2 bg-white/10 rounded-full">
                    <div 
                      className="h-full rounded-full" 
                      style={{ 
                        backgroundColor: COLORS[idx % COLORS.length],
                        width: `${cat.percentage}%` 
                      }}
                    ></div>
                  </div>
                  <span className="text-xs font-semibold" style={{ color: COLORS[idx % COLORS.length] }}>
                    {cat.percentage}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filtres */}
      <div className="flex space-x-2 overflow-x-auto">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            filter === 'all' ? 'bg-blue-500 text-white' : 'bg-white/5 hover:bg-white/10'
          }`}
        >
          Toutes ({expensesList.length})
        </button>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
              filter === cat ? 'bg-blue-500 text-white' : 'bg-white/5 hover:bg-white/10'
            }`}
          >
            {cat} ({expensesList.filter(e => e.categorie === cat).length})
          </button>
        ))}
      </div>

      {/* Tableau des Dépenses */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">Historique des Dépenses</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-3 text-gray-400">Date</th>
                <th className="text-left p-3 text-gray-400">Nature</th>
                <th className="text-left p-3 text-gray-400">Catégorie</th>
                <th className="text-left p-3 text-gray-400">Montant</th>
                <th className="text-left p-3 text-gray-400">Mode Paiement</th>
                <th className="text-left p-3 text-gray-400">Fournisseur</th>
                <th className="text-left p-3 text-gray-400">Justificatif</th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.length === 0 ? (
                <tr>
                  <td colSpan="7" className="p-6 text-center text-gray-400">
                    Aucune dépense trouvée
                  </td>
                </tr>
              ) : (
                filteredExpenses.map((expense) => (
                  <tr key={expense.id} className="border-b border-white/10 hover:bg-white/5 transition-all">
                    <td className="p-3 text-gray-300">{expense.date}</td>
                    <td className="p-3 font-semibold">{expense.nature}</td>
                    <td className="p-3">
                      <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-500/20 text-blue-400">
                        {expense.categorie}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="text-lg font-bold text-green-400">${expense.montant}</span>
                    </td>
                    <td className="p-3 text-gray-400 text-sm">{expense.mode}</td>
                    <td className="p-3 text-gray-400 text-sm">{expense.fournisseur}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        expense.justificatif === 'Oui' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {expense.justificatif}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-white/20">
                <td colSpan="3" className="p-3 font-bold text-right">TOTAL</td>
                <td className="p-3">
                  <span className="text-2xl font-bold text-cyan-400">
                    ${filteredExpenses.reduce((sum, e) => sum + e.montant, 0).toLocaleString()}
                  </span>
                </td>
                <td colSpan="3"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Top Dépenses */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">Top 5 Dépenses</h3>
        <div className="space-y-3">
          {[...expensesList]
            .sort((a, b) => b.montant - a.montant)
            .slice(0, 5)
            .map((expense, idx) => (
              <div key={expense.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold">
                    {idx + 1}
                  </div>
                  <div>
                    <p className="font-semibold">{expense.nature}</p>
                    <p className="text-xs text-gray-400">{expense.date} • {expense.categorie}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-cyan-400">${expense.montant}</p>
                  <p className="text-xs text-gray-400">{((expense.montant / totalExpenses) * 100).toFixed(1)}% du total</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Conseils de Gestion */}
      <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4 text-yellow-400">💡 Conseils de Gestion Budgétaire</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-green-400 mb-3">✅ Bonnes Pratiques</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Garder tous les justificatifs de dépenses</li>
              <li>• Négocier achats groupés pour aliments</li>
              <li>• Comparer prix de plusieurs fournisseurs</li>
              <li>• Planifier dépenses importantes à l'avance</li>
              <li>• Maintenir une réserve pour imprévus (10%)</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-400 mb-3">⚠️ Points de Vigilance</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Alimentation = 40-50% des coûts variables</li>
              <li>• Éviter gaspillage d'aliment (suralimenter)</li>
              <li>• Contrôler consommation électricité</li>
              <li>• Vérifier qualité/prix des alevins</li>
              <li>• Anticiper hausses saisonnières des prix</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expenses;
