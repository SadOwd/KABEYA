import React, { useState } from 'react';
import { Bell, Send, Users, Mail, Phone, MessageSquare, CheckCircle, Clock, AlertCircle, Filter, Search } from 'lucide-react';
import { pointsDeVente, preCommandes } from '../data/mockData';

const NotificationSystem = () => {
  const [selectedRecipients, setSelectedRecipients] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [notificationType, setNotificationType] = useState('info');
  const [sendMethod, setSendMethod] = useState('email');
  const [searchTerm, setSearchTerm] = useState('');

  // Notifications historiques
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      date: '08/12/2025 14:30',
      type: 'info',
      destinataires: ['PV001', 'PV006'],
      message: 'Nouvelle récolte disponible - 2000kg Ngolo',
      canal: 'email',
      status: 'envoyée',
      ouvertPar: ['PV001']
    },
    {
      id: 2,
      date: '07/12/2025 09:15',
      type: 'urgent',
      destinataires: ['PV002', 'PV004'],
      message: 'Livraison reportée au 10/12 pour cause météo',
      canal: 'sms',
      status: 'envoyée',
      ouvertPar: ['PV002', 'PV004']
    },
    {
      id: 3,
      date: '06/12/2025 16:45',
      type: 'promo',
      destinataires: ['PV001', 'PV003', 'PV005'],
      message: 'Promotion : -10% sur commandes >500kg ce week-end',
      canal: 'whatsapp',
      status: 'envoyée',
      ouvertPar: ['PV001', 'PV003']
    },
    {
      id: 4,
      date: '05/12/2025 11:00',
      type: 'info',
      destinataires: ['PV008'],
      message: 'Votre commande CMD-2025-001 est prête pour retrait',
      canal: 'email',
      status: 'envoyée',
      ouvertPar: ['PV008']
    }
  ]);

  const filteredPoints = pointsDeVente.filter(point =>
    point.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
    point.zone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleRecipient = (pointId) => {
    setSelectedRecipients(prev =>
      prev.includes(pointId)
        ? prev.filter(id => id !== pointId)
        : [...prev, pointId]
    );
  };

  const selectAll = () => {
    setSelectedRecipients(pointsDeVente.filter(p => p.status === 'actif').map(p => p.id));
  };

  const clearAll = () => {
    setSelectedRecipients([]);
  };

  const sendNotification = () => {
    if (selectedRecipients.length === 0 || !notificationMessage.trim()) {
      alert('⚠️ Veuillez sélectionner des destinataires et saisir un message');
      return;
    }

    const newNotification = {
      id: notifications.length + 1,
      date: new Date().toLocaleString('fr-FR'),
      type: notificationType,
      destinataires: [...selectedRecipients],
      message: notificationMessage,
      canal: sendMethod,
      status: 'envoyée',
      ouvertPar: []
    };

    setNotifications([newNotification, ...notifications]);
    
    // Reset form
    setSelectedRecipients([]);
    setNotificationMessage('');
    
    alert(`✅ Notification envoyée avec succès à ${selectedRecipients.length} destinataire(s) via ${sendMethod.toUpperCase()}`);
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'urgent': return { icon: AlertCircle, color: 'text-red-400', bg: 'bg-red-500/20' };
      case 'promo': return { icon: Bell, color: 'text-yellow-400', bg: 'bg-yellow-500/20' };
      default: return { icon: MessageSquare, color: 'text-blue-400', bg: 'bg-blue-500/20' };
    }
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'envoyée': return 'bg-green-500/20 text-green-400';
      case 'en-attente': return 'bg-yellow-500/20 text-yellow-400';
      case 'erreur': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2 flex items-center neon-glow">
              <Bell className="w-7 h-7 mr-3 text-cyan-400 animate-bounce" />
              <span>Système de Notifications Clients</span>
            </h3>
            <p className="text-gray-400">Envoi d'alertes et communications aux points de vente</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-400">Notifications envoyées</p>
              <p className="text-2xl font-bold text-green-400">{notifications.length}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Panneau d'envoi */}
        <div className="lg:col-span-2 space-y-6">
          {/* Nouvelle Notification */}
          <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <Send className="w-5 h-5 mr-2 text-cyan-400" />
              Nouvelle Notification
            </h4>

            {/* Type de notification */}
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-400 mb-2 block">Type de notification</label>
              <div className="grid grid-cols-3 gap-3">
                {['info', 'urgent', 'promo'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setNotificationType(type)}
                    className={`px-4 py-3 rounded-lg font-semibold transition-all border ${
                      notificationType === type
                        ? 'btn-gradient border-cyan-500'
                        : 'glass-effect border-white/10 hover:border-cyan-500/50'
                    }`}
                  >
                    {type === 'info' && '📢 Info'}
                    {type === 'urgent' && '🚨 Urgent'}
                    {type === 'promo' && '🎉 Promo'}
                  </button>
                ))}
              </div>
            </div>

            {/* Canal d'envoi */}
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-400 mb-2 block">Canal d'envoi</label>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { value: 'email', icon: Mail, label: 'Email' },
                  { value: 'sms', icon: Phone, label: 'SMS' },
                  { value: 'whatsapp', icon: MessageSquare, label: 'WhatsApp' },
                  { value: 'all', icon: Send, label: 'Tous' }
                ].map(({ value, icon: Icon, label }) => (
                  <button
                    key={value}
                    onClick={() => setSendMethod(value)}
                    className={`px-3 py-3 rounded-lg font-semibold transition-all border flex flex-col items-center space-y-1 ${
                      sendMethod === value
                        ? 'btn-gradient border-cyan-500'
                        : 'glass-effect border-white/10 hover:border-cyan-500/50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Message */}
            <div className="mb-4">
              <label className="text-sm font-semibold text-gray-400 mb-2 block">Message</label>
              <textarea
                value={notificationMessage}
                onChange={(e) => setNotificationMessage(e.target.value)}
                placeholder="Saisissez votre message ici..."
                rows="4"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none text-white resize-none"
              />
              <p className="text-xs text-gray-500 mt-1">{notificationMessage.length} caractères</p>
            </div>

            {/* Modèles rapides */}
            <div className="mb-6">
              <label className="text-sm font-semibold text-gray-400 mb-2 block">Modèles rapides</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  'Nouvelle récolte disponible aujourd\'hui 🎣',
                  'Livraison prévue demain matin 🚚',
                  'Promotion spéciale ce week-end 🎉',
                  'Votre commande est prête pour retrait ✅'
                ].map((template, idx) => (
                  <button
                    key={idx}
                    onClick={() => setNotificationMessage(template)}
                    className="text-left px-3 py-2 glass-effect rounded-lg hover:glass-effect-strong transition-all text-sm"
                  >
                    {template}
                  </button>
                ))}
              </div>
            </div>

            {/* Bouton Envoi */}
            <button
              onClick={sendNotification}
              className="w-full btn-gradient py-4 rounded-xl font-bold text-lg shadow-lg flex items-center justify-center space-x-3 hover:scale-105 transition-all"
            >
              <Send className="w-6 h-6" />
              <span>Envoyer à {selectedRecipients.length} destinataire(s)</span>
            </button>
          </div>

          {/* Historique */}
          <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
            <h4 className="text-xl font-bold mb-6 flex items-center">
              <Clock className="w-5 h-5 mr-2 text-cyan-400" />
              Historique des Notifications
            </h4>

            <div className="space-y-3">
              {notifications.map((notif) => {
                const typeInfo = getTypeIcon(notif.type);
                const TypeIcon = typeInfo.icon;
                
                return (
                  <div key={notif.id} className="glass-effect rounded-xl p-4 border border-white/10 hover:border-cyan-500/50 transition-all">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${typeInfo.bg}`}>
                          <TypeIcon className={`w-5 h-5 ${typeInfo.color}`} />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">{notif.date}</p>
                          <p className="font-semibold">{notif.message}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-lg text-xs font-semibold ${getStatusBadge(notif.status)}`}>
                        {notif.status}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-white/10">
                      <div className="flex items-center space-x-4 text-xs">
                        <span className="text-gray-400">
                          📧 {notif.canal.toUpperCase()}
                        </span>
                        <span className="text-gray-400">
                          👥 {notif.destinataires.length} destinataires
                        </span>
                        <span className="text-green-400">
                          ✓ {notif.ouvertPar.length} ouvert(s)
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Liste Destinataires */}
        <div className="space-y-4">
          <div className="glass-effect-strong rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-bold flex items-center">
                <Users className="w-5 h-5 mr-2 text-cyan-400" />
                Destinataires
              </h4>
              <div className="flex space-x-2">
                <button
                  onClick={selectAll}
                  className="text-xs px-3 py-1 glass-effect rounded-lg hover:glass-effect-strong transition-all"
                >
                  Tous
                </button>
                <button
                  onClick={clearAll}
                  className="text-xs px-3 py-1 glass-effect rounded-lg hover:glass-effect-strong transition-all"
                >
                  Aucun
                </button>
              </div>
            </div>

            {/* Recherche */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-cyan-500 focus:outline-none text-white text-sm"
              />
            </div>

            {/* Liste */}
            <div className="space-y-2 max-h-[600px] overflow-y-auto">
              {filteredPoints.map((point) => {
                const isSelected = selectedRecipients.includes(point.id);
                const isActive = point.status === 'actif';
                
                return (
                  <div
                    key={point.id}
                    onClick={() => isActive && toggleRecipient(point.id)}
                    className={`p-3 rounded-lg transition-all cursor-pointer ${
                      isSelected 
                        ? 'bg-cyan-500/20 border border-cyan-500' 
                        : 'glass-effect border border-white/10 hover:border-cyan-500/50'
                    } ${!isActive ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-semibold text-sm">{point.nom}</p>
                        <p className="text-xs text-gray-400">{point.zone}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        {isActive ? (
                          <CheckCircle className={`w-5 h-5 ${isSelected ? 'text-cyan-400' : 'text-gray-600'}`} />
                        ) : (
                          <span className="text-xs text-red-400">Inactif</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSystem;
