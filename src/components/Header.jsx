import React, { useState } from 'react';
import { Fish, Bell, Download, RefreshCw, AlertTriangle, Sparkles } from 'lucide-react';
import jsPDF from 'jspdf';

const Header = ({ alerts, setAlerts, lastUpdate }) => {
  const [showAlerts, setShowAlerts] = useState(false);

  const exportToPDF = async () => {
    try {
      const doc = new jsPDF('p', 'mm', 'a4');
      
      doc.setFontSize(20);
      doc.setTextColor(16, 185, 129);
      doc.text('KABEYA INC', 105, 20, { align: 'center' });
      
      doc.setFontSize(12);
      doc.setTextColor(100, 100, 100);
      doc.text('Rapport de Gestion Piscicole', 105, 28, { align: 'center' });
      doc.text(`Généré le: ${new Date().toLocaleDateString('fr-FR')}`, 105, 35, { align: 'center' });
      
      doc.setDrawColor(16, 185, 129);
      doc.setLineWidth(0.5);
      doc.line(20, 40, 190, 40);
      
      doc.setFontSize(14);
      doc.setTextColor(0, 0, 0);
      doc.text('Indicateurs Clés de Performance', 20, 50);
      
      doc.setFontSize(10);
      doc.text('• CA par Cycle: $389,000', 25, 58);
      doc.text('• Résultat Net: $277,976', 25, 65);
      doc.text('• ROI Annuel: 628%', 25, 72);
      doc.text('• Production Totale: 77,800 kg', 25, 79);
      doc.text('• Seuil de Rentabilité: 8,306 kg', 25, 86);
      
      doc.setFontSize(14);
      doc.text('Production par Espèce', 20, 100);
      doc.setFontSize(10);
      doc.text('• Ngolo: 30,000 kg - $150,000', 25, 108);
      doc.text('• Tilapia: 10,500 kg - $52,500', 25, 115);
      doc.text('• Kongo ya Sika: 6,050 kg - $30,250', 25, 122);
      
      doc.setFontSize(14);
      doc.text('Résumé Financier', 20, 136);
      doc.setFontSize(10);
      doc.text('• Investissement Initial: $88,500', 25, 144);
      doc.text('• Charges par Cycle: $41,530', 25, 151);
      doc.text('• Résultat Brut: $347,470', 25, 158);
      doc.text('• Impôts et Taxes: $69,494', 25, 165);
      doc.text('• Résultat Net: $277,976', 25, 172);
      
      if (alerts.length > 0) {
        doc.setFontSize(14);
        doc.setTextColor(255, 0, 0);
        doc.text('Alertes Actives', 20, 186);
        doc.setFontSize(9);
        doc.setTextColor(0, 0, 0);
        
        alerts.slice(0, 5).forEach((alert, idx) => {
          doc.text(`• ${alert.title}: ${alert.message}`, 25, 194 + (idx * 7));
        });
      }
      
      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text('KABEYA INC - Pisciculture Durable • Kinshasa, RDC', 105, 280, { align: 'center' });
      doc.text('Contact: +1 (514) 441-2992 • david.kabeya@hotmail.com', 105, 285, { align: 'center' });
      
      doc.save(`KABEYA-Rapport-${new Date().toISOString().split('T')[0]}.pdf`);
      
      alert('✅ Rapport PDF généré avec succès!');
    } catch (error) {
      console.error('Erreur export PDF:', error);
      alert('❌ Erreur lors de la génération du PDF');
    }
  };

  return (
    <header className="glass-effect-strong sticky top-0 z-50 border-b border-white/10 shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 via-emerald-500/10 to-teal-600/10 opacity-50"></div>
      
      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo et Titre */}
          <div className="flex items-center space-x-4 animate-slide-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-400 rounded-xl blur-lg opacity-75 animate-pulse-glow"></div>
              <div className="relative bg-black/80 p-2 rounded-xl shadow-2xl animate-float border border-green-500/30">
                <img 
                  src="/images/logo.png" 
                  alt="Kabeya Fresh" 
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    // Fallback si l'image n'est pas trouvée
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-16 h-16 items-center justify-center">
                  <Fish className="w-10 h-10 text-green-400" />
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold neon-glow flex items-center space-x-2">
                <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  KABEYA FRESH
                </span>
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
              </h1>
              <p className="text-sm text-gray-300 font-medium">
                Pisciculture Durable • Kinshasa, RDC
              </p>
            </div>
          </div>

          {/* Actions Rapides */}
          <div className="flex items-center space-x-3 animate-slide-in-right">
            {/* Dernière mise à jour */}
            <div className="hidden md:flex items-center space-x-2 glass-effect px-4 py-2 rounded-xl border border-white/10 hover:border-green-500/50 transition-all">
              <div className="relative">
                <RefreshCw className="w-4 h-4 text-green-400 animate-spin-slow" />
                <div className="absolute inset-0 bg-green-400/20 rounded-full blur-md"></div>
              </div>
              <div className="text-xs">
                <p className="text-gray-400 font-medium">Dernière MAJ</p>
                <p className="font-bold text-green-400">{lastUpdate.toLocaleTimeString('fr-FR')}</p>
              </div>
            </div>

            {/* Bouton Alertes */}
            <div className="relative">
              <button 
                onClick={() => setShowAlerts(!showAlerts)}
                className="relative glass-effect hover:glass-effect-strong p-3 rounded-xl border border-white/10 hover:border-yellow-500/50 transition-all group"
              >
                <Bell className="w-5 h-5 text-yellow-400 group-hover:animate-bounce" />
                {alerts.length > 0 && (
                  <>
                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse-glow font-bold">
                      {alerts.length}
                    </span>
                    <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-xl animate-pulse-glow"></div>
                  </>
                )}
              </button>

              {/* Dropdown Alertes */}
              {showAlerts && (
                <div className="absolute right-0 mt-3 w-96 glass-effect-strong rounded-2xl shadow-2xl border border-white/10 z-50 max-h-[32rem] overflow-hidden animate-scale-in">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-transparent to-teal-600/20 pointer-events-none"></div>
                  
                  <div className="relative p-4 border-b border-white/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-bold text-lg flex items-center space-x-2">
                          <Bell className="w-5 h-5 text-yellow-400" />
                          <span>Alertes Système</span>
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">Notifications en temps réel</p>
                      </div>
                      {alerts.length > 0 && (
                        <button
                          onClick={() => setAlerts([])}
                          className="text-xs text-red-400 hover:text-red-300 px-3 py-1 rounded-lg bg-red-500/10 hover:bg-red-500/20 transition-all"
                        >
                          Effacer tout
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="overflow-y-auto max-h-96 p-2">
                    {alerts.length === 0 ? (
                      <div className="p-8 text-center text-gray-400 animate-fade-in">
                        <div className="relative inline-block mb-3">
                          <Bell className="w-16 h-16 mx-auto opacity-20" />
                          <Sparkles className="w-6 h-6 absolute -top-2 -right-2 text-green-400 animate-pulse" />
                        </div>
                        <p className="font-semibold">Aucune alerte active</p>
                        <p className="text-xs mt-2">Le système fonctionne normalement</p>
                      </div>
                    ) : (
                      alerts.map((alert, idx) => (
                        <div 
                          key={alert.id} 
                          className={`p-4 mb-2 rounded-xl cursor-pointer transition-all border animate-slide-up ${
                            alert.type === 'danger' ? 'bg-red-500/10 border-red-500/30 hover:bg-red-500/20' :
                            alert.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500/30 hover:bg-yellow-500/20' :
                            'bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20'
                          }`}
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <p className="font-semibold text-sm mb-1">{alert.title}</p>
                              <p className="text-xs text-gray-300 leading-relaxed">{alert.message}</p>
                            </div>
                            <AlertTriangle className={`w-5 h-5 flex-shrink-0 ml-3 ${
                              alert.type === 'danger' ? 'text-red-400' :
                              alert.type === 'warning' ? 'text-yellow-400' :
                              'text-blue-400'
                            }`} />
                          </div>
                          <div className="flex items-center justify-between mt-3 pt-2 border-t border-white/10">
                            <p className="text-xs text-gray-500 flex items-center">
                              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                              {alert.time}
                            </p>
                            <button className="text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10 transition-all">
                              Détails
                            </button>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Bouton Export PDF */}
            <button 
              onClick={exportToPDF}
              className="relative btn-gradient px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-green-500/30 flex items-center space-x-2 hover:shadow-green-500/50 hover:scale-105 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <Download className="w-4 h-4 relative z-10 group-hover:animate-bounce" />
              <span className="hidden md:inline relative z-10">Export PDF</span>
            </button>

            {/* Statut Cycle */}
            <div className="glass-effect border border-green-500/30 px-4 py-2 rounded-xl hover:border-green-500/50 transition-all group">
              <p className="text-xs text-gray-400 font-medium">Cycle 1 - 2025</p>
              <p className="text-sm font-bold text-green-400 flex items-center mt-1">
                <span className="relative flex h-3 w-3 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                En production
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de progression décorative */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-400 to-teal-400 opacity-50"></div>
    </header>
  );
};

export default Header;
