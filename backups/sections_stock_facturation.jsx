      {/* SECTION 5: STOCK */}
      {activeView === 'stock' && (
        <div className="space-y-6 animate-slide-up">
          {/* Stats Stock */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Stock Total</p>
                  <p className="text-3xl font-bold text-white">
                    {mockData.stock.reduce((acc, item) => acc + item.quantite, 0).toLocaleString()} kg
                  </p>
                </div>
                <Package className="w-12 h-12 text-green-400" />
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Valeur Stock</p>
                  <p className="text-3xl font-bold text-yellow-400">
                    ${mockData.stock.reduce((acc, item) => acc + (item.quantite * item.prixUnitaire), 0).toLocaleString()}
                  </p>
                </div>
                <DollarSign className="w-12 h-12 text-yellow-400" />
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Alertes Stock</p>
                  <p className="text-3xl font-bold text-red-400">
                    {mockData.stock.filter(item => item.statut === 'Critique').length}
                  </p>
                </div>
                <AlertTriangle className="w-12 h-12 text-red-400" />
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Produits Actifs</p>
                  <p className="text-3xl font-bold text-green-400">
                    {mockData.stock.length}
                  </p>
                </div>
                <Fish className="w-12 h-12 text-green-400" />
              </div>
            </div>
          </div>

          {/* Tableau Stock Détaillé */}
          <div className="glass-effect-strong rounded-xl p-6 border border-white/10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">📦 Inventaire Stock</h3>
              <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Ajouter Produit
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Produit</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Catégorie</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-semibold">Stock (kg)</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-semibold">Stock Mini</th>
                    <th className="text-right py-3 px-4 text-gray-400 font-semibold">Prix Unit.</th>
                    <th className="text-right py-3 px-4 text-gray-400 font-semibold">Valeur</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Emplacement</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-semibold">Statut</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.stock.map((item) => (
                    <tr key={item.id} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                            <Fish className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-semibold">{item.produit}</p>
                            <p className="text-gray-400 text-xs">ID: {item.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-300">{item.categorie}</td>
                      <td className="py-4 px-4 text-center">
                        <span className="text-white font-bold text-lg">{item.quantite.toLocaleString()}</span>
                      </td>
                      <td className="py-4 px-4 text-center text-gray-400">{item.stockMinimum}</td>
                      <td className="py-4 px-4 text-right text-green-400 font-semibold">
                        ${item.prixUnitaire.toFixed(2)}
                      </td>
                      <td className="py-4 px-4 text-right text-yellow-400 font-bold">
                        ${(item.quantite * item.prixUnitaire).toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-gray-300">{item.emplacement}</td>
                      <td className="py-4 px-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                          item.statut === 'Optimal' ? 'bg-green-500/20 text-green-400 border-green-500/50' :
                          item.statut === 'Bas' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50' :
                          'bg-red-500/20 text-red-400 border-red-500/50'
                        }`}>
                          {item.statut}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-2 hover:bg-green-500/20 rounded-lg transition-colors" title="Modifier">
                            <Edit className="w-4 h-4 text-green-400" />
                          </button>
                          <button className="p-2 hover:bg-blue-500/20 rounded-lg transition-colors" title="Mouvement">
                            <TrendingUp className="w-4 h-4 text-blue-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mouvements de Stock Récents */}
          <div className="glass-effect-strong rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-4 text-white">📊 Mouvements Récents</h3>
            <div className="space-y-3">
              {mockData.mouvementsStock.map((mouvement) => (
                <div key={mouvement.id} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      mouvement.type === 'Entrée' ? 'bg-green-500/20' : 'bg-red-500/20'
                    }`}>
                      {mouvement.type === 'Entrée' ? 
                        <TrendingUp className="w-6 h-6 text-green-400" /> : 
                        <TrendingDown className="w-6 h-6 text-red-400" />
                      }
                    </div>
                    <div>
                      <p className="text-white font-semibold">{mouvement.produit}</p>
                      <p className="text-gray-400 text-sm">{mouvement.date} - {mouvement.reference}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-bold ${
                      mouvement.type === 'Entrée' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {mouvement.type === 'Entrée' ? '+' : '-'}{mouvement.quantite} kg
                    </p>
                    <p className="text-gray-400 text-sm">{mouvement.motif}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* SECTION 6: FACTURATION */}
      {activeView === 'facturation' && (
        <div className="space-y-6 animate-slide-up">
          {/* Stats Facturation */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">CA Total</p>
                  <p className="text-3xl font-bold text-yellow-400">
                    ${mockData.factures.reduce((acc, f) => acc + f.montantTotal, 0).toLocaleString()}
                  </p>
                </div>
                <DollarSign className="w-12 h-12 text-yellow-400" />
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Payées</p>
                  <p className="text-3xl font-bold text-green-400">
                    ${mockData.factures.filter(f => f.statut === 'Payée').reduce((acc, f) => acc + f.montantTotal, 0).toLocaleString()}
                  </p>
                </div>
                <CheckCircle className="w-12 h-12 text-green-400" />
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">En Attente</p>
                  <p className="text-3xl font-bold text-orange-400">
                    ${mockData.factures.filter(f => f.statut === 'En attente').reduce((acc, f) => acc + f.montantTotal, 0).toLocaleString()}
                  </p>
                </div>
                <Clock className="w-12 h-12 text-orange-400" />
              </div>
            </div>

            <div className="glass-effect rounded-xl p-6 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-1">En Retard</p>
                  <p className="text-3xl font-bold text-red-400">
                    ${mockData.factures.filter(f => f.statut === 'En retard').reduce((acc, f) => acc + f.montantTotal, 0).toLocaleString()}
                  </p>
                </div>
                <AlertTriangle className="w-12 h-12 text-red-400" />
              </div>
            </div>
          </div>

          {/* Tableau Factures */}
          <div className="glass-effect-strong rounded-xl p-6 border border-white/10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">💰 Factures & Paiements</h3>
              <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Plus className="w-5 h-5" />
                Nouvelle Facture
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">N° Facture</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Client</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Date</th>
                    <th className="text-left py-3 px-4 text-gray-400 font-semibold">Échéance</th>
                    <th className="text-right py-3 px-4 text-gray-400 font-semibold">Montant</th>
                    <th className="text-right py-3 px-4 text-gray-400 font-semibold">Payé</th>
                    <th className="text-right py-3 px-4 text-gray-400 font-semibold">Reste</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-semibold">Statut</th>
                    <th className="text-center py-3 px-4 text-gray-400 font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mockData.factures.map((facture) => (
                    <tr key={facture.id} className="border-b border-gray-800 hover:bg-gray-800/30 transition-colors">
                      <td className="py-4 px-4">
                        <span className="text-white font-bold">{facture.numeroFacture}</span>
                      </td>
                      <td className="py-4 px-4">
                        <div>
                          <p className="text-white font-semibold">{facture.client}</p>
                          <p className="text-gray-400 text-xs">{facture.pointVente}</p>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-gray-300">{facture.dateEmission}</td>
                      <td className="py-4 px-4 text-gray-300">{facture.dateEcheance}</td>
                      <td className="py-4 px-4 text-right text-yellow-400 font-bold">
                        ${facture.montantTotal.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-right text-green-400 font-semibold">
                        ${facture.montantPaye.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-right text-orange-400 font-semibold">
                        ${facture.resteAPayer.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-center">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                          facture.statut === 'Payée' ? 'bg-green-500/20 text-green-400 border-green-500/50' :
                          facture.statut === 'En attente' ? 'bg-orange-500/20 text-orange-400 border-orange-500/50' :
                          facture.statut === 'Partielle' ? 'bg-blue-500/20 text-blue-400 border-blue-500/50' :
                          'bg-red-500/20 text-red-400 border-red-500/50'
                        }`}>
                          {facture.statut}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center justify-center gap-2">
                          <button className="p-2 hover:bg-blue-500/20 rounded-lg transition-colors" title="Voir">
                            <Eye className="w-4 h-4 text-blue-400" />
                          </button>
                          <button className="p-2 hover:bg-green-500/20 rounded-lg transition-colors" title="Paiement">
                            <DollarSign className="w-4 h-4 text-green-400" />
                          </button>
                          <button className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors" title="Télécharger">
                            <Download className="w-4 h-4 text-purple-400" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Détails Articles Facturés */}
          <div className="glass-effect-strong rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-4 text-white">📦 Articles Facturés</h3>
            <div className="space-y-3">
              {mockData.factures.slice(0, 3).map((facture) => (
                <div key={facture.id} className="p-4 bg-gray-800/30 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="text-white font-bold">{facture.numeroFacture}</p>
                      <p className="text-gray-400 text-sm">{facture.client}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                      facture.statut === 'Payée' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'
                    }`}>
                      {facture.statut}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {facture.articles.map((article, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm">
                        <span className="text-gray-300">{article.produit} - {article.quantite} kg × ${article.prixUnitaire}</span>
                        <span className="text-yellow-400 font-semibold">${article.montant.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Historique Paiements */}
          <div className="glass-effect-strong rounded-xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-4 text-white">💳 Historique des Paiements</h3>
            <div className="space-y-3">
              {mockData.paiements.map((paiement) => (
                <div key={paiement.id} className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{paiement.numeroFacture}</p>
                      <p className="text-gray-400 text-sm">{paiement.date} - {paiement.client}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 text-lg font-bold">${paiement.montant.toLocaleString()}</p>
                    <p className="text-gray-400 text-sm">{paiement.methodePaiement}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
