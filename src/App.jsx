import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Overview from './components/Overview';
import RealtimeMonitoring from './components/RealtimeMonitoring';
import Production from './components/Production';
import Finances from './components/Finances';
import Tasks from './components/Tasks';
import Feeding from './components/Feeding';
import Treatments from './components/Treatments';
import Expenses from './components/Expenses';

function App() {
  const [activeTab, setActiveTab] = useState('overview');
  const [alerts, setAlerts] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Système d'alertes automatiques
  useEffect(() => {
    const checkAlerts = () => {
      const newAlerts = [];
      
      // Alerte température eau
      if (Math.random() > 0.7) {
        newAlerts.push({
          id: Date.now() + 1,
          type: 'warning',
          title: 'Température eau élevée',
          message: 'Bassin B2: 32°C (optimal: 26-30°C)',
          time: new Date().toLocaleTimeString('fr-FR')
        });
      }
      
      // Alerte stock aliment
      if (Math.random() > 0.8) {
        newAlerts.push({
          id: Date.now() + 2,
          type: 'danger',
          title: 'Stock aliment faible',
          message: 'Reste 150kg - Réapprovisionnement urgent',
          time: new Date().toLocaleTimeString('fr-FR')
        });
      }
      
      // Alerte mortalité
      if (Math.random() > 0.85) {
        newAlerts.push({
          id: Date.now() + 3,
          type: 'info',
          title: 'Contrôle sanitaire',
          message: 'Traitement préventif planifié demain',
          time: new Date().toLocaleTimeString('fr-FR')
        });
      }

      // Alerte tâche en retard
      if (Math.random() > 0.9) {
        newAlerts.push({
          id: Date.now() + 4,
          type: 'danger',
          title: 'Tâche en retard',
          message: 'Nettoyage bassin B1 non effectué',
          time: new Date().toLocaleTimeString('fr-FR')
        });
      }

      setAlerts(newAlerts);
    };

    checkAlerts();
    const interval = setInterval(checkAlerts, 30000); // Check every 30s
    return () => clearInterval(interval);
  }, []);

  // Mise à jour temps réel
  useEffect(() => {
    const timer = setInterval(() => {
      setLastUpdate(new Date());
    }, 5000); // Update every 5s
    return () => clearInterval(timer);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'realtime':
        return <RealtimeMonitoring />;
      case 'production':
        return <Production />;
      case 'finances':
        return <Finances />;
      case 'tasks':
        return <Tasks />;
      case 'feeding':
        return <Feeding />;
      case 'treatments':
        return <Treatments />;
      case 'expenses':
        return <Expenses />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <Header alerts={alerts} setAlerts={setAlerts} lastUpdate={lastUpdate} />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-6 py-6">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;
