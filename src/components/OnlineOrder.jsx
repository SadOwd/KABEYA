import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, CheckCircle, Calendar, User, Phone, Mail, MapPin, CreditCard, Package } from 'lucide-react';
import { productionData, pointsDeVente } from '../data/mockData';

const OnlineOrder = () => {
  const [cart, setCart] = useState([]);
  const [step, setStep] = useState(1); // 1: Produits, 2: Infos, 3: Confirmation
  const [orderInfo, setOrderInfo] = useState({
    clientType: 'existing',
    pointVenteId: '',
    nomClient: '',
    telephone: '',
    email: '',
    adresseLivraison: '',
    dateLivraison: '',
    notesSpeciales: '',
    modeReglement: 'comptant'
  });

  const addToCart = (espece) => {
    const existing = cart.find(item => item.espece === espece.species);
    if (existing) {
      setCart(cart.map(item =>
        item.espece === espece.species
          ? { ...item, quantite: item.quantite + 10 }
          : item
      ));
    } else {
      setCart([...cart, {
        espece: espece.species,
        quantite: 10,
        prixUnitaire: espece.prixKg,
        total: espece.prixKg * 10
      }]);
    }
  };

  const updateQuantity = (espece, delta) => {
    setCart(cart.map(item => {
      if (item.espece === espece) {
        const newQuantite = Math.max(10, item.quantite + delta);
        return {
          ...item,
          quantite: newQuantite,
          total: item.prixUnitaire * newQuantite
        };
      }
      return item;
    }));
  };

  const removeFromCart = (espece) => {
    setCart(cart.filter(item => item.espece !== espece));
  };

  const getTotalCart = () => {
    return cart.reduce((sum, item) => sum + item.total, 0);
  };

  const getTotalQuantity = () => {
    return cart.reduce((sum, item) => sum + item.quantite, 0);
  };

  const submitOrder = () => {
    if (cart.length === 0) {
      alert('⚠️ Votre panier est vide');
      return;
    }

    if (!orderInfo.nomClient || !orderInfo.telephone || !orderInfo.dateLivraison) {
      alert('⚠️ Veuillez remplir tous les champs obligatoires');
      return;
    }

    const orderNumber = `CMD-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 1000)).padStart(3, '0')}`;
    
    alert(`✅ Commande ${orderNumber} enregistrée avec succès!\n\nMontant total: $${getTotalCart()}\nQuantité totale: ${getTotalQuantity()}kg\n\nVous recevrez une confirmation par ${orderInfo.email ? 'email' : 'SMS'}`);
    
    // Reset
    setCart([]);
    setStep(1);
    setOrderInfo({
      clientType: 'existing',
      pointVenteId: '',
      nomClient: '',
      telephone: '',
      email: '',
      adresseLivraison: '',
      dateLivraison: '',
      notesSpeciales: '',
      modeReglement: 'comptant'
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2 flex items-center neon-glow">
              <ShoppingCart className="w-7 h-7 mr-3 text-cyan-400" />
              <span>Interface de Commande en Ligne</span>
            </h3>
            <p className="text-gray-400">Passez vos commandes directement depuis le dashboard</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingCart className="w-8 h-8 text-cyan-400" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse font-bold">
                  {cart.length}
                </span>
              )}
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-400">Montant total</p>
              <p className="text-3xl font-bold text-green-400">${getTotalCart().toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stepper */}
      <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between">
          {[
            { num: 1, label: 'Sélection Produits', icon: Package },
            { num: 2, label: 'Informations Client', icon: User },
            { num: 3, label: 'Confirmation', icon: CheckCircle }
          ].map(({ num, label, icon: Icon }) => (
            <div key={num} className="flex items-center flex-1">
              <div className={`flex items-center space-x-3 ${num < 3 ? 'flex-1' : ''}`}>
                <div className={`relative flex items-center justify-center w-12 h-12 rounded-full font-bold transition-all ${
                  step >= num ? 'btn-gradient scale-110' : 'glass-effect'
                }`}>
                  {step > num ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <Icon className="w-6 h-6" />
                  )}
                </div>
                <div>
                  <p className="text-xs text-gray-400">Étape {num}</p>
                  <p className="font-semibold">{label}</p>
                </div>
              </div>
              {num < 3 && (
                <div className={`flex-1 h-1 mx-4 rounded-full ${step > num ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-white/10'}`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Zone Principale */}
        <div className="lg:col-span-2 space-y-6">
          {/* Étape 1: Sélection Produits */}
          {step === 1 && (
            <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
              <h4 className="text-xl font-bold mb-6">Nos Produits Disponibles</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {productionData.map((espece, idx) => (
                  <div
                    key={idx}
                    className="glass-effect rounded-xl p-5 border border-white/10 hover:border-cyan-500 transition-all animate-slide-up"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h5 className="text-lg font-bold text-cyan-400">{espece.species}</h5>
                        <p className="text-sm text-gray-400">Poisson frais de qualité</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-400">${espece.prixKg}</p>
                        <p className="text-xs text-gray-400">/kg</p>
                      </div>
                    </div>

                    <div className="mb-4 p-3 bg-white/5 rounded-lg">
                      <p className="text-xs text-gray-400 mb-1">Stock disponible</p>
                      <p className="text-lg font-bold text-purple-400">{espece.poidsTarget.toLocaleString()} kg</p>
                    </div>

                    <button
                      onClick={() => addToCart(espece)}
                      className="w-full btn-gradient py-2 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:scale-105 transition-all"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Ajouter au panier</span>
                    </button>
                  </div>
                ))}
              </div>

              {cart.length > 0 && (
                <button
                  onClick={() => setStep(2)}
                  className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-500 py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center space-x-2 hover:scale-105 transition-all"
                >
                  <span>Continuer vers les informations</span>
                  <CheckCircle className="w-5 h-5" />
                </button>
              )}
            </div>
          )}

          {/* Étape 2: Informations Client */}
          {step === 2 && (
            <div className="glass-effect-strong rounded-2xl p-6 border border-white/10 animate-scale-in">
              <h4 className="text-xl font-bold mb-6">Informations de Livraison</h4>

              {/* Type de client */}
              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-400 mb-2 block">Type de client</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setOrderInfo({ ...orderInfo, clientType: 'existing' })}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all border ${
                      orderInfo.clientType === 'existing'
                        ? 'btn-gradient border-cyan-500'
                        : 'glass-effect border-white/10'
                    }`}
                  >
                    Client existant
                  </button>
                  <button
                    onClick={() => setOrderInfo({ ...orderInfo, clientType: 'new' })}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all border ${
                      orderInfo.clientType === 'new'
                        ? 'btn-gradient border-cyan-500'
                        : 'glass-effect border-white/10'
                    }`}
                  >
                    Nouveau client
                  </button>
                </div>
              </div>

              {/* Point de vente (si existant) */}
              {orderInfo.clientType === 'existing' && (
                <div className="mb-4">
                  <label className="text-sm font-semibold text-gray-400 mb-2 block">Point de vente</label>
                  <select
                    value={orderInfo.pointVenteId}
                    onChange={(e) => {
                      const point = pointsDeVente.find(p => p.id === e.target.value);
                      setOrderInfo({
                        ...orderInfo,
                        pointVenteId: e.target.value,
                        nomClient: point?.nom || '',
                        telephone: point?.telephone || '',
                        email: point?.email || '',
                        adresseLivraison: point?.adresse || ''
                      });
                    }}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                  >
                    <option value="">Sélectionnez un point de vente</option>
                    {pointsDeVente.filter(p => p.status === 'actif').map(point => (
                      <option key={point.id} value={point.id}>{point.nom} - {point.zone}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Informations */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-semibold text-gray-400 mb-2 block flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    Nom du client *
                  </label>
                  <input
                    type="text"
                    value={orderInfo.nomClient}
                    onChange={(e) => setOrderInfo({ ...orderInfo, nomClient: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                    placeholder="Nom complet"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-400 mb-2 block flex items-center">
                    <Phone className="w-4 h-4 mr-1" />
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    value={orderInfo.telephone}
                    onChange={(e) => setOrderInfo({ ...orderInfo, telephone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                    placeholder="+243 XXX XXX XXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-sm font-semibold text-gray-400 mb-2 block flex items-center">
                    <Mail className="w-4 h-4 mr-1" />
                    Email
                  </label>
                  <input
                    type="email"
                    value={orderInfo.email}
                    onChange={(e) => setOrderInfo({ ...orderInfo, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-400 mb-2 block flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    Date de livraison *
                  </label>
                  <input
                    type="date"
                    value={orderInfo.dateLivraison}
                    onChange={(e) => setOrderInfo({ ...orderInfo, dateLivraison: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-400 mb-2 block flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  Adresse de livraison *
                </label>
                <textarea
                  value={orderInfo.adresseLivraison}
                  onChange={(e) => setOrderInfo({ ...orderInfo, adresseLivraison: e.target.value })}
                  rows="2"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none text-white resize-none"
                  placeholder="Adresse complète"
                />
              </div>

              <div className="mb-4">
                <label className="text-sm font-semibold text-gray-400 mb-2 block">Mode de règlement</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: 'comptant', label: 'Comptant', icon: '💵' },
                    { value: 'virement', label: 'Virement', icon: '🏦' },
                    { value: 'mobile', label: 'Mobile Money', icon: '📱' }
                  ].map(({ value, label, icon }) => (
                    <button
                      key={value}
                      onClick={() => setOrderInfo({ ...orderInfo, modeReglement: value })}
                      className={`px-4 py-3 rounded-lg font-semibold transition-all border ${
                        orderInfo.modeReglement === value
                          ? 'btn-gradient border-cyan-500'
                          : 'glass-effect border-white/10'
                      }`}
                    >
                      <span className="mr-2">{icon}</span>
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm font-semibold text-gray-400 mb-2 block">Notes spéciales</label>
                <textarea
                  value={orderInfo.notesSpeciales}
                  onChange={(e) => setOrderInfo({ ...orderInfo, notesSpeciales: e.target.value })}
                  rows="3"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none text-white resize-none"
                  placeholder="Exigences particulières, horaire de livraison, etc."
                />
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 glass-effect py-3 rounded-lg font-semibold hover:glass-effect-strong transition-all"
                >
                  Retour
                </button>
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 btn-gradient py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Continuer</span>
                  <CheckCircle className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Étape 3: Confirmation */}
          {step === 3 && (
            <div className="glass-effect-strong rounded-2xl p-6 border border-white/10 animate-scale-in">
              <h4 className="text-xl font-bold mb-6 text-green-400">✓ Récapitulatif de la Commande</h4>

              <div className="bg-white/5 rounded-xl p-4 mb-6">
                <h5 className="font-semibold mb-3 text-cyan-400">Informations Client</h5>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-400">Nom:</p>
                    <p className="font-semibold">{orderInfo.nomClient}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Téléphone:</p>
                    <p className="font-semibold">{orderInfo.telephone}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-400">Adresse:</p>
                    <p className="font-semibold">{orderInfo.adresseLivraison}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Livraison:</p>
                    <p className="font-semibold text-orange-400">{new Date(orderInfo.dateLivraison).toLocaleDateString('fr-FR')}</p>
                  </div>
                  <div>
                    <p className="text-gray-400">Paiement:</p>
                    <p className="font-semibold text-purple-400">{orderInfo.modeReglement}</p>
                  </div>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 glass-effect py-3 rounded-lg font-semibold hover:glass-effect-strong transition-all"
                >
                  Modifier
                </button>
                <button
                  onClick={submitOrder}
                  className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 py-3 rounded-lg font-bold flex items-center justify-center space-x-2 hover:scale-105 transition-all"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>Confirmer la commande</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Panier */}
        <div className="space-y-4">
          <div className="glass-effect-strong rounded-2xl p-6 border border-white/10 sticky top-24">
            <h4 className="font-bold mb-4 flex items-center">
              <ShoppingCart className="w-5 h-5 mr-2 text-cyan-400" />
              Votre Panier
            </h4>

            {cart.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="w-12 h-12 text-gray-500 mx-auto mb-3 opacity-30" />
                <p className="text-gray-400 text-sm">Votre panier est vide</p>
              </div>
            ) : (
              <>
                <div className="space-y-3 mb-4 max-h-[400px] overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.espece} className="glass-effect rounded-lg p-3 border border-white/10">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-semibold">{item.espece}</p>
                          <p className="text-xs text-gray-400">${item.prixUnitaire}/kg</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.espece)}
                          className="p-1 hover:bg-red-500/20 rounded transition-all"
                        >
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.espece, -10)}
                            className="w-7 h-7 flex items-center justify-center glass-effect rounded hover:glass-effect-strong transition-all"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-bold min-w-[60px] text-center">{item.quantite} kg</span>
                          <button
                            onClick={() => updateQuantity(item.espece, 10)}
                            className="w-7 h-7 flex items-center justify-center glass-effect rounded hover:glass-effect-strong transition-all"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <p className="text-lg font-bold text-green-400">${item.total}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Quantité totale:</span>
                    <span className="font-bold">{getTotalQuantity()} kg</span>
                  </div>
                  <div className="flex justify-between text-lg">
                    <span className="font-bold">Total:</span>
                    <span className="font-bold text-green-400">${getTotalCart()}</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineOrder;
