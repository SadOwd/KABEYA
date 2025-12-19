import React, { useState } from 'react';
import { Droplets, Plus, AlertTriangle } from 'lucide-react';
import { treatments } from '../data/mockData';

const Treatments = () => {
  const [treatmentList, setTreatmentList] = useState(treatments);

  const getTypeColor = (type) => {
    switch(type) {
      case 'Préventif': return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'Curatif': return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'D\'urgence': return 'bg-red-500/20 text-red-400 border-red-500/50';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getResultColor = (result) => {
    switch(result) {
      case 'Efficace': return 'text-green-400';
      case 'En cours': return 'text-blue-400';
      case 'Inefficace': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <Droplets className="w-6 h-6 mr-2 text-cyan-400" />
              Traitements Sanitaires
            </h2>
            <p className="text-gray-400">Historique et suivi des interventions</p>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-4 py-2 rounded-lg font-semibold transition-all shadow-lg flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Nouveau Traitement</span>
          </button>
        </div>
      </div>

      {/* Stats Rapides */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <Droplets className="w-8 h-8 text-green-400" />
            <span className="text-2xl font-bold text-green-400">{treatmentList.filter(t => t.type === 'Préventif').length}</span>
          </div>
          <h4 className="font-semibold mb-1">Traitements Préventifs</h4>
          <p className="text-sm text-gray-400">Maintenance régulière</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <AlertTriangle className="w-8 h-8 text-orange-400" />
            <span className="text-2xl font-bold text-orange-400">{treatmentList.filter(t => t.type === 'Curatif').length}</span>
          </div>
          <h4 className="font-semibold mb-1">Traitements Curatifs</h4>
          <p className="text-sm text-gray-400">Interventions correctives</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6">
          <div className="flex items-center justify-between mb-3">
            <Droplets className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold text-blue-400">{((treatmentList.filter(t => t.resultat === 'Efficace').length / treatmentList.length) * 100).toFixed(0)}%</span>
          </div>
          <h4 className="font-semibold mb-1">Taux d'Efficacité</h4>
          <p className="text-sm text-gray-400">Traitements réussis</p>
        </div>
      </div>

      {/* Historique des Traitements */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">Historique des Traitements</h3>
        <div className="space-y-4">
          {treatmentList.map((treatment) => (
            <div key={treatment.id} className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all border border-white/10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="font-bold text-lg">{treatment.bassin}</h4>
                    <span className={`px-3 py-1 rounded-lg text-xs font-semibold border ${getTypeColor(treatment.type)}`}>
                      {treatment.type}
                    </span>
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-400 text-sm">{treatment.date}</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    <span className="font-semibold text-cyan-400">{treatment.espece}</span> • {treatment.responsable}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400 mb-1">Résultat</p>
                  <p className={`font-bold ${getResultColor(treatment.resultat)}`}>{treatment.resultat}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="bg-black/20 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Produit utilisé</p>
                  <p className="font-semibold">{treatment.produit}</p>
                </div>
                <div className="bg-black/20 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Dosage</p>
                  <p className="font-semibold text-cyan-400">{treatment.dosage}</p>
                </div>
                <div className="bg-black/20 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Durée</p>
                  <p className="font-semibold">{treatment.duree}</p>
                </div>
                <div className="bg-black/20 rounded-lg p-3">
                  <p className="text-xs text-gray-400 mb-1">Mode application</p>
                  <p className="font-semibold">{treatment.mode}</p>
                </div>
              </div>

              {treatment.observation && (
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
                  <p className="text-xs font-semibold text-blue-400 mb-1">📝 Observation</p>
                  <p className="text-sm text-gray-300">{treatment.observation}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Produits Sanitaires */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">Produits Sanitaires Utilisés</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg p-4">
            <h4 className="font-semibold text-green-400 mb-3">Oxytétracycline</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400"><span className="font-semibold">Usage:</span> Antibiotique large spectre</p>
              <p className="text-gray-400"><span className="font-semibold">Dosage:</span> 50-75 mg/L</p>
              <p className="text-gray-400"><span className="font-semibold">Durée:</span> 3-5 jours</p>
              <p className="text-gray-400"><span className="font-semibold">Application:</span> Bain prolongé</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-lg p-4">
            <h4 className="font-semibold text-blue-400 mb-3">Sel Marin (NaCl)</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400"><span className="font-semibold">Usage:</span> Antiparasitaire, antifongique</p>
              <p className="text-gray-400"><span className="font-semibold">Dosage:</span> 3-5 g/L</p>
              <p className="text-gray-400"><span className="font-semibold">Durée:</span> 5-7 jours</p>
              <p className="text-gray-400"><span className="font-semibold">Application:</span> Bain prolongé</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-lg p-4">
            <h4 className="font-semibold text-purple-400 mb-3">Formol 37%</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400"><span className="font-semibold">Usage:</span> Antiparasites externes</p>
              <p className="text-gray-400"><span className="font-semibold">Dosage:</span> 15-25 ppm</p>
              <p className="text-gray-400"><span className="font-semibold">Durée:</span> 1 heure</p>
              <p className="text-gray-400"><span className="font-semibold">Application:</span> Bain court</p>
            </div>
          </div>
        </div>
      </div>

      {/* Protocoles de Traitement */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">Protocoles Recommandés</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-green-400 mb-4">🛡️ Traitement Préventif</h4>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-3">
                <p className="font-semibold text-sm mb-2">Mensuel - Désinfection légère</p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Bain de sel 3g/L pendant 24h</li>
                  <li>• Vérification parasites externes</li>
                  <li>• Observation comportement</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="font-semibold text-sm mb-2">Bimensuel - Contrôle parasitaire</p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Formol 20ppm pendant 1h</li>
                  <li>• Échantillonnage et observation</li>
                  <li>• Documentation des résultats</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-orange-400 mb-4">🏥 Traitement Curatif</h4>
            <div className="space-y-3">
              <div className="bg-white/5 rounded-lg p-3">
                <p className="font-semibold text-sm mb-2">Infection bactérienne</p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Oxytétracycline 50-75 mg/L</li>
                  <li>• Bain prolongé 3-5 jours</li>
                  <li>• Arrêt alimentation pendant traitement</li>
                  <li>• Surveillance quotidienne</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-3">
                <p className="font-semibold text-sm mb-2">Parasites externes</p>
                <ul className="text-xs text-gray-400 space-y-1">
                  <li>• Formol 25ppm bain court 1h</li>
                  <li>• Sel 5g/L bain prolongé 5-7 jours</li>
                  <li>• Répéter si nécessaire après 7 jours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Consignes de Sécurité */}
      <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4 text-red-400 flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2" />
          Consignes de Sécurité
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold text-yellow-400 mb-3">⚠️ Précautions</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Porter gants et masque lors manipulation</li>
              <li>• Ne jamais mélanger plusieurs produits</li>
              <li>• Respecter scrupuleusement les dosages</li>
              <li>• Aérer bassins après traitement au formol</li>
              <li>• Conserver produits hors de portée</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-cyan-400 mb-3">📋 Après Traitement</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• Surveiller oxygène dissous (risque chute)</li>
              <li>• Reprendre alimentation progressivement</li>
              <li>• Observer mortalité 48h post-traitement</li>
              <li>• Documenter efficacité du traitement</li>
              <li>• Éviter stress des poissons</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
