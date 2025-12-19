import React from 'react';
import { DollarSign, TrendingUp, FileText, Target } from 'lucide-react';
import { financialData, benefitDistribution } from '../data/mockData';

const Finances = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-2">Gestion Financière</h2>
        <p className="text-gray-400">Analyse détaillée de la rentabilité et des flux</p>
      </div>

      {/* Résumé Financier */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-2xl p-6 hover:scale-105 transition-all">
          <DollarSign className="w-8 h-8 text-blue-400 mb-3" />
          <p className="text-sm text-gray-400 mb-1">Investissement Initial</p>
          <p className="text-3xl font-bold text-blue-400">${financialData.investissement.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-6 hover:scale-105 transition-all">
          <FileText className="w-8 h-8 text-red-400 mb-3" />
          <p className="text-sm text-gray-400 mb-1">Charges par Cycle</p>
          <p className="text-3xl font-bold text-red-400">${financialData.chargesParCycle.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 hover:scale-105 transition-all">
          <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
          <p className="text-sm text-gray-400 mb-1">CA par Cycle</p>
          <p className="text-3xl font-bold text-green-400">${financialData.caParCycle.toLocaleString()}</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl p-6 hover:scale-105 transition-all">
          <Target className="w-8 h-8 text-purple-400 mb-3" />
          <p className="text-sm text-gray-400 mb-1">ROI Annuel</p>
          <p className="text-3xl font-bold text-purple-400">{financialData.roi}%</p>
        </div>
      </div>

      {/* Compte de Résultat */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">Compte de Résultat - Par Cycle (6 mois)</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 bg-green-500/10 rounded-lg hover:bg-green-500/20 transition-all">
            <div>
              <span className="font-semibold">Chiffre d'Affaires</span>
              <p className="text-xs text-gray-400 mt-1">Ventes totales du cycle</p>
            </div>
            <span className="text-2xl font-bold text-green-400">${financialData.caParCycle.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between items-center p-4 bg-red-500/10 rounded-lg hover:bg-red-500/20 transition-all">
            <div>
              <span className="font-semibold">Charges Opérationnelles</span>
              <p className="text-xs text-gray-400 mt-1">Alevins, aliments, main-d'œuvre, etc.</p>
            </div>
            <span className="text-2xl font-bold text-red-400">-${financialData.chargesParCycle.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between items-center p-4 bg-blue-500/10 rounded-lg border-t-2 border-white/20 hover:bg-blue-500/20 transition-all">
            <div>
              <span className="font-semibold">Résultat Brut</span>
              <p className="text-xs text-gray-400 mt-1">Avant impôts et taxes</p>
            </div>
            <span className="text-2xl font-bold text-blue-400">${financialData.resultatBrut.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between items-center p-4 bg-orange-500/10 rounded-lg hover:bg-orange-500/20 transition-all">
            <div>
              <span className="font-semibold">Impôts et Taxes (20%)</span>
              <p className="text-xs text-gray-400 mt-1">Fiscalité applicable</p>
            </div>
            <span className="text-2xl font-bold text-orange-400">-${financialData.impots.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border-2 border-purple-500/50 hover:scale-105 transition-all">
            <div>
              <span className="font-bold text-lg">Résultat Net</span>
              <p className="text-xs text-gray-400 mt-1">Bénéfice final après tous les coûts</p>
            </div>
            <span className="text-3xl font-bold text-purple-400">${financialData.resultatNet.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Répartition du Bénéfice */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">Affectation du Bénéfice Net</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {benefitDistribution.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white/5 border border-white/10 rounded-lg p-4 hover:scale-105 transition-all cursor-pointer" 
              style={{ borderLeftColor: item.color, borderLeftWidth: '4px' }}
            >
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold">{item.name}</span>
                <span className="text-sm font-bold px-2 py-1 rounded" style={{ color: item.color, backgroundColor: `${item.color}20` }}>
                  {item.value}%
                </span>
              </div>
              <p className="text-2xl font-bold mb-2" style={{ color: item.color }}>
                ${item.amount.toLocaleString()}
              </p>
              <p className="text-xs text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Indicateurs de Performance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-6">
          <h4 className="font-semibold mb-3 text-green-400">Marge Brute</h4>
          <p className="text-3xl font-bold mb-2">{((financialData.resultatBrut / financialData.caParCycle) * 100).toFixed(1)}%</p>
          <p className="text-sm text-gray-400">Sur chiffre d'affaires</p>
          <div className="mt-3 h-2 bg-white/10 rounded-full">
            <div className="h-full bg-green-400 rounded-full" style={{ width: `${((financialData.resultatBrut / financialData.caParCycle) * 100)}%` }}></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-6">
          <h4 className="font-semibold mb-3 text-blue-400">Marge Nette</h4>
          <p className="text-3xl font-bold mb-2">{((financialData.resultatNet / financialData.caParCycle) * 100).toFixed(1)}%</p>
          <p className="text-sm text-gray-400">Après impôts</p>
          <div className="mt-3 h-2 bg-white/10 rounded-full">
            <div className="h-full bg-blue-400 rounded-full" style={{ width: `${((financialData.resultatNet / financialData.caParCycle) * 100)}%` }}></div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6">
          <h4 className="font-semibold mb-3 text-purple-400">Seuil de Rentabilité</h4>
          <p className="text-3xl font-bold mb-2">{financialData.seuilRentabilite.toLocaleString()} kg</p>
          <p className="text-sm text-gray-400">Production minimum</p>
          <div className="mt-3 h-2 bg-white/10 rounded-full">
            <div className="h-full bg-purple-400 rounded-full animate-pulse" style={{ width: '89%' }}></div>
          </div>
        </div>
      </div>

      {/* Analyse ROI */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Analyse du Retour sur Investissement (ROI)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-cyan-400">Calcul du ROI</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between p-2 bg-white/5 rounded">
                <span className="text-gray-400">Investissement initial</span>
                <span className="font-semibold">${financialData.investissement.toLocaleString()}</span>
              </div>
              <div className="flex justify-between p-2 bg-white/5 rounded">
                <span className="text-gray-400">Résultat net / cycle</span>
                <span className="font-semibold">${financialData.resultatNet.toLocaleString()}</span>
              </div>
              <div className="flex justify-between p-2 bg-white/5 rounded">
                <span className="text-gray-400">Cycles par an</span>
                <span className="font-semibold">2</span>
              </div>
              <div className="flex justify-between p-2 bg-green-500/20 rounded border border-green-500/50">
                <span className="font-bold">ROI annuel</span>
                <span className="font-bold text-green-400">{financialData.roi}%</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-green-400">Interprétation</h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                <p className="font-semibold text-green-400 mb-1">✅ ROI Exceptionnel</p>
                <p className="text-gray-300">Avec un ROI de {financialData.roi}%, l'investissement est amorti en moins de 2 mois.</p>
              </div>
              <div className="p-3 bg-blue-500/10 rounded-lg border border-blue-500/30">
                <p className="font-semibold text-blue-400 mb-1">📊 Rentabilité Élevée</p>
                <p className="text-gray-300">Chaque dollar investi génère ${(financialData.roi / 100).toFixed(2)} de bénéfice annuel.</p>
              </div>
              <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/30">
                <p className="font-semibold text-purple-400 mb-1">🎯 Performance Solide</p>
                <p className="text-gray-300">La marge nette de {((financialData.resultatNet / financialData.caParCycle) * 100).toFixed(1)}% démontre une excellente maîtrise des coûts.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finances;
