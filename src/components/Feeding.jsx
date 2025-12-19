import React from 'react';
import { Package, Info } from 'lucide-react';
import { feedingData } from '../data/mockData';

const Feeding = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-2 flex items-center">
          <Package className="w-6 h-6 mr-2 text-cyan-400" />
          Gestion de l'Alimentation
        </h2>
        <p className="text-gray-400">Grilles de ration et recommandations par espèce</p>
      </div>

      {/* Guide d'Alimentation */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">Grille de Ration par Espèce et Stade</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-3 text-gray-400">Espèce</th>
                <th className="text-left p-3 text-gray-400">Stade de croissance</th>
                <th className="text-left p-3 text-gray-400">Taux de ration (%/jour)</th>
                <th className="text-left p-3 text-gray-400">Fréquence</th>
                <th className="text-left p-3 text-gray-400">Type d'aliment</th>
              </tr>
            </thead>
            <tbody>
              {feedingData.map((item, idx) => (
                <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-all">
                  <td className="p-3 font-semibold text-cyan-400">{item.espece}</td>
                  <td className="p-3">{item.stade}</td>
                  <td className="p-3">
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-lg font-bold">
                      {item.taux}
                    </span>
                  </td>
                  <td className="p-3 text-gray-400">{item.frequence}</td>
                  <td className="p-3 text-sm text-gray-400">{item.quantiteType}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Formules de Calcul */}
      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4 text-cyan-400">📐 Formules de Calcul</h3>
        <div className="space-y-4">
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold mb-2">1. Calcul de la Biomasse</h4>
            <div className="bg-black/30 rounded p-3 font-mono text-sm">
              <p className="text-green-400">Biomasse (kg) = Nombre de poissons × Poids moyen (kg)</p>
            </div>
            <p className="text-xs text-gray-400 mt-2">Exemple: 1000 poissons × 0.5 kg = 500 kg de biomasse</p>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold mb-2">2. Quantité d'Aliment Quotidien</h4>
            <div className="bg-black/30 rounded p-3 font-mono text-sm">
              <p className="text-green-400">Quantité (kg) = Biomasse (kg) × Taux de ration (%)</p>
            </div>
            <p className="text-xs text-gray-400 mt-2">Exemple: 500 kg × 3% = 15 kg d'aliment par jour</p>
          </div>

          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold mb-2">3. Méthode d'Échantillonnage Pondéral</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-300">1. Prélever 10 à 20 poissons dans un bassin</p>
              <p className="text-gray-300">2. Peser l'ensemble → ex. 12 kg pour 15 poissons</p>
              <div className="bg-black/30 rounded p-3 font-mono">
                <p className="text-green-400">Poids moyen = Poids total / Nombre de poissons</p>
                <p className="text-cyan-400 mt-1">= 12 kg / 15 = 0,8 kg par poisson</p>
              </div>
              <p className="text-gray-300">4. Multiplier par le nombre total de poissons dans le bassin</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recommandations par Espèce */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/10 border border-blue-500/30 rounded-xl p-6">
          <h4 className="font-bold text-lg mb-4 text-blue-400">Ngolo (Clarias)</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-400 mb-1">🍽️ Régime alimentaire</p>
              <p className="text-white">Carnivore/Omnivore</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">📊 Ration recommandée</p>
              <p className="text-white">Alevin: 6-8% • Adulte: 3-5%</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">⏰ Fréquence</p>
              <p className="text-white">Alevin: 3x/jour • Adulte: 2x/jour</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">💡 Conseil</p>
              <p className="text-gray-300 text-xs">Préfère aliments riches en protéines (45-50%)</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500/10 to-green-600/10 border border-green-500/30 rounded-xl p-6">
          <h4 className="font-bold text-lg mb-4 text-green-400">Tilapia</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-400 mb-1">🍽️ Régime alimentaire</p>
              <p className="text-white">Omnivore</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">📊 Ration recommandée</p>
              <p className="text-white">Alevin: 8-10% • Adulte: 2-3%</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">⏰ Fréquence</p>
              <p className="text-white">Alevin: 3x/jour • Adulte: 2x/jour</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">💡 Conseil</p>
              <p className="text-gray-300 text-xs">Accepte bien les aliments commerciaux (30-35% protéines)</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-xl p-6">
          <h4 className="font-bold text-lg mb-4 text-purple-400">Kongo ya Sika</h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-400 mb-1">🍽️ Régime alimentaire</p>
              <p className="text-white">Herbivore/Omnivore</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">📊 Ration recommandée</p>
              <p className="text-white">Juvénile: 4-6% • Adulte: 2-3%</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">⏰ Fréquence</p>
              <p className="text-white">2x/jour (matin et soir)</p>
            </div>
            <div>
              <p className="text-gray-400 mb-1">💡 Conseil</p>
              <p className="text-gray-300 text-xs">Nécessite aliment spécifique ou plancton naturel</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bonnes Pratiques */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center">
          <Info className="w-5 h-5 mr-2 text-yellow-400" />
          Bonnes Pratiques d'Alimentation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-400 mb-3">✅ À Faire</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-green-400 flex-shrink-0">•</span>
                <span className="text-gray-300">Distribuer aux heures fixes (7h, 12h, 17h)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-400 flex-shrink-0">•</span>
                <span className="text-gray-300">Observer le comportement alimentaire</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-400 flex-shrink-0">•</span>
                <span className="text-gray-300">Ajuster les quantités selon la croissance</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-400 flex-shrink-0">•</span>
                <span className="text-gray-300">Conserver l'aliment au sec et à l'abri</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-green-400 flex-shrink-0">•</span>
                <span className="text-gray-300">Répartir uniformément dans le bassin</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-red-400 mb-3">❌ À Éviter</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-red-400 flex-shrink-0">•</span>
                <span className="text-gray-300">Suralimenter (pollution et coûts élevés)</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-400 flex-shrink-0">•</span>
                <span className="text-gray-300">Alimenter pendant traitement sanitaire</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-400 flex-shrink-0">•</span>
                <span className="text-gray-300">Utiliser aliment périmé ou moisi</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-400 flex-shrink-0">•</span>
                <span className="text-gray-300">Changer brutalement de type d'aliment</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-red-400 flex-shrink-0">•</span>
                <span className="text-gray-300">Négliger le contrôle de la qualité de l'eau</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Coût Aliment */}
      <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4 text-orange-400">💰 Estimation Coût Alimentaire</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-1">Prix moyen aliment</p>
            <p className="text-2xl font-bold text-orange-400">$9/sac 50kg</p>
            <p className="text-xs text-gray-500 mt-1">Soit $0.18/kg</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-1">Consommation cycle</p>
            <p className="text-2xl font-bold text-yellow-400">~5,500 kg</p>
            <p className="text-xs text-gray-500 mt-1">Pour 77,800 poissons</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <p className="text-sm text-gray-400 mb-1">Coût total/cycle</p>
            <p className="text-2xl font-bold text-red-400">~$1,000</p>
            <p className="text-xs text-gray-500 mt-1">Principale charge variable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feeding;
