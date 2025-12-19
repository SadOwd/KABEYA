// Données pour le dashboard KABEYA INC
export const productionData = [
  { species: 'Ngolo', alevins: 31800, poidsTarget: 30000, ca: 150000, mortalite: 12, prixKg: 5 },
  { species: 'Tilapia', alevins: 27600, poidsTarget: 10500, ca: 52500, mortalite: 10, prixKg: 5 },
  { species: 'Kongo ya Sika', alevins: 18400, poidsTarget: 6050, ca: 30250, mortalite: 14, prixKg: 5 }
];

export const financialData = {
  investissement: 88500,
  chargesParCycle: 41530,
  caParCycle: 389000,
  resultatBrut: 347470,
  impots: 69494,
  resultatNet: 277976,
  roi: 628,
  seuilRentabilite: 8306
};

export const benefitDistribution = [
  { name: 'Réinvestissement', value: 40, amount: 111190, color: '#3b82f6', description: 'Extension, équipement, formation' },
  { name: 'Rémunération', value: 30, amount: 83393, color: '#10b981', description: 'Dividendes et rémunération' },
  { name: 'Réserve légale', value: 10, amount: 27798, color: '#f59e0b', description: 'Sécurité financière' },
  { name: 'Innovation', value: 10, amount: 27798, color: '#8b5cf6', description: 'R&D et développement' },
  { name: 'Prime personnel', value: 5, amount: 13899, color: '#ec4899', description: 'Motivation équipe' },
  { name: 'Actions sociales', value: 5, amount: 13899, color: '#06b6d4', description: 'Impact communautaire' }
];

export const monthlyEvolution = [
  { month: 'Jan', ventes: 0, depenses: 15000, production: 0, profit: -15000 },
  { month: 'Fév', ventes: 0, depenses: 18000, production: 0, profit: -18000 },
  { month: 'Mar', ventes: 0, depenses: 20000, production: 0, profit: -20000 },
  { month: 'Avr', ventes: 75000, depenses: 22000, production: 15000, profit: 53000 },
  { month: 'Mai', ventes: 125000, depenses: 25000, production: 30000, profit: 100000 },
  { month: 'Jun', ventes: 189000, depenses: 28000, production: 46550, profit: 161000 }
];

export const realtimeData = [
  { bassin: 'B1', espece: 'Ngolo', temperature: 28, ph: 7.2, oxygene: 6.5, status: 'optimal', poissons: 7950 },
  { bassin: 'B2', espece: 'Tilapia', temperature: 32, ph: 7.8, oxygene: 5.2, status: 'attention', poissons: 6900 },
  { bassin: 'B3', espece: 'Kongo ya Sika', temperature: 27, ph: 7.0, oxygene: 7.0, status: 'optimal', poissons: 4600 },
  { bassin: 'B4', espece: 'Ngolo', temperature: 29, ph: 7.4, oxygene: 6.8, status: 'optimal', poissons: 7950 }
];

export const recentTasks = [
  { id: 1, date: '08/12/2025', task: 'Distribution alimentaire - Matin', status: 'completed', responsible: 'Jean Resp. Alimentation', priority: 'high', time: '07:00' },
  { id: 2, date: '08/12/2025', task: 'Contrôle qualité eau tous bassins', status: 'completed', responsible: 'Marie Technicien', priority: 'high', time: '09:00' },
  { id: 3, date: '08/12/2025', task: 'Distribution alimentaire - Midi', status: 'completed', responsible: 'Jean Resp. Alimentation', priority: 'high', time: '12:00' },
  { id: 4, date: '08/12/2025', task: 'Relevé mortalité et anomalies', status: 'in-progress', responsible: 'Équipe Ouvriers', priority: 'medium', time: '14:00' },
  { id: 5, date: '08/12/2025', task: 'Distribution alimentaire - Soir', status: 'pending', responsible: 'Jean Resp. Alimentation', priority: 'high', time: '17:00' },
  { id: 6, date: '09/12/2025', task: 'Traitement sanitaire Bassin B2', status: 'pending', responsible: 'Marie Technicien', priority: 'high', time: '08:00' },
  { id: 7, date: '09/12/2025', task: 'Nettoyage bassin B1', status: 'pending', responsible: 'Équipe entretien', priority: 'medium', time: '10:00' },
  { id: 8, date: '10/12/2025', task: 'Échantillonnage poids poissons', status: 'pending', responsible: 'Marie Technicien', priority: 'medium', time: '09:00' }
];

export const treatments = [
  { 
    id: 1,
    date: '05/12/2025', 
    bassin: 'B1', 
    espece: 'Ngolo', 
    type: 'Préventif', 
    produit: 'Oxytétracycline', 
    dosage: '50mg/L',
    duree: '3 jours',
    mode: 'Bain',
    resultat: 'Efficace',
    responsable: 'Marie Technicien',
    observation: 'Comportement normal, mortalité réduite'
  },
  { 
    id: 2,
    date: '30/11/2025', 
    bassin: 'B2', 
    espece: 'Tilapia', 
    type: 'Curatif', 
    produit: 'Sel marin', 
    dosage: '3g/L',
    duree: '5 jours',
    mode: 'Bain',
    resultat: 'En cours',
    responsable: 'Marie Technicien',
    observation: 'Amélioration visible après 2 jours'
  },
  { 
    id: 3,
    date: '25/11/2025', 
    bassin: 'B3', 
    espece: 'Kongo ya Sika', 
    type: 'Préventif', 
    produit: 'Formol 37%', 
    dosage: '25ppm',
    duree: '1 jour',
    mode: 'Aspersion',
    resultat: 'Efficace',
    responsable: 'Marie Technicien',
    observation: 'Prévention parasites externes réussie'
  }
];

export const expenses = [
  { id: 1, date: '08/12/2025', nature: 'Aliments poissons (sac 50kg)', montant: 450, categorie: 'Alimentation', mode: 'Espèces', justificatif: 'Oui', fournisseur: 'AgriFeed RDC' },
  { id: 2, date: '07/12/2025', nature: 'Salaire ouvriers (hebdomadaire)', montant: 200, categorie: 'Main-d\'œuvre', mode: 'Mobile Money', justificatif: 'Oui', fournisseur: 'Équipe' },
  { id: 3, date: '06/12/2025', nature: 'Réparation pompe à eau', montant: 85, categorie: 'Entretien', mode: 'Espèces', justificatif: 'Oui', fournisseur: 'Atelier Mécanique' },
  { id: 4, date: '05/12/2025', nature: 'Produits sanitaires (Oxytétracycline)', montant: 120, categorie: 'Santé', mode: 'Virement', justificatif: 'Oui', fournisseur: 'VetAqua' },
  { id: 5, date: '04/12/2025', nature: 'Électricité (mensuel)', montant: 95, categorie: 'Énergie', mode: 'Virement', justificatif: 'Oui', fournisseur: 'SNEL' },
  { id: 6, date: '03/12/2025', nature: 'Transport alevins', montant: 150, categorie: 'Logistique', mode: 'Espèces', justificatif: 'Oui', fournisseur: 'Transport Lokasi' },
  { id: 7, date: '02/12/2025', nature: 'Filets de protection', montant: 75, categorie: 'Équipement', mode: 'Espèces', justificatif: 'Oui', fournisseur: 'Marché Central' }
];

export const feedingData = [
  { espece: 'Tilapia', stade: 'Alevin', taux: '8-10%', frequence: '3x/jour', quantiteType: 'Granulé fin 0.5mm' },
  { espece: 'Tilapia', stade: 'Juvénile', taux: '4-6%', frequence: '2x/jour', quantiteType: 'Granulé 2mm' },
  { espece: 'Tilapia', stade: 'Adulte', taux: '2-3%', frequence: '2x/jour', quantiteType: 'Granulé 4mm' },
  { espece: 'Ngolo', stade: 'Alevin', taux: '6-8%', frequence: '3x/jour', quantiteType: 'Granulé fin 1mm' },
  { espece: 'Ngolo', stade: 'Adulte', taux: '3-5%', frequence: '2x/jour', quantiteType: 'Granulé 5mm' },
  { espece: 'Kongo ya Sika', stade: 'Juvénile', taux: '4-6%', frequence: '2x/jour', quantiteType: 'Granulé 3mm' },
  { espece: 'Kongo ya Sika', stade: 'Adulte', taux: '2-3%', frequence: '2x/jour', quantiteType: 'Granulé 6mm' }
];

export const croissanceData = [
  { semaine: 1, ngolo: 50, tilapia: 20, kongoYaSika: 30 },
  { semaine: 2, ngolo: 80, tilapia: 35, kongoYaSika: 50 },
  { semaine: 3, ngolo: 120, tilapia: 55, kongoYaSika: 75 },
  { semaine: 4, ngolo: 170, tilapia: 80, kongoYaSika: 110 },
  { semaine: 5, ngolo: 230, tilapia: 110, kongoYaSika: 150 },
  { semaine: 6, ngolo: 300, tilapia: 145, kongoYaSika: 200 },
  { semaine: 7, ngolo: 380, tilapia: 185, kongoYaSika: 260 },
  { semaine: 8, ngolo: 470, tilapia: 230, kongoYaSika: 330 },
  { semaine: 9, ngolo: 570, tilapia: 280, kongoYaSika: 410 },
  { semaine: 10, ngolo: 680, tilapia: 335, kongoYaSika: 500 },
  { semaine: 11, ngolo: 800, tilapia: 395, kongoYaSika: 600 },
  { semaine: 12, ngolo: 930, tilapia: 460, kongoYaSika: 710 }
];

export const speciesInfo = [
  {
    name: 'Ngolo (Clarias gariepinus)',
    duree: '5-6 mois',
    poidsMaturite: '800g - 1,2kg',
    prixKg: 5,
    observations: 'Très résistant, croissance rapide, prisé localement',
    avantages: ['Résistance aux maladies', 'Croissance rapide', 'Adapté climat tropical'],
    defis: ['Cannibalisme si mal nourri', 'Nécessite oxygénation']
  },
  {
    name: 'Tilapia (Oreochromis niloticus)',
    duree: '6-7 mois',
    poidsMaturite: '300g - 600g',
    prixKg: 5,
    observations: 'Bonne acceptation du marché, croissance stable',
    avantages: ['Très demandé', 'Facile à élever', 'Omnivore'],
    defis: ['Reproduction rapide', 'Contrôle population nécessaire']
  },
  {
    name: 'Kongo ya Sika (Heterotis)',
    duree: '8-10 mois',
    poidsMaturite: '1kg et plus',
    prixKg: 5,
    observations: 'Produit semi-haut de gamme, prisé restaurants',
    avantages: ['Haute valeur marchande', 'Chair de qualité', 'Croissance importante'],
    defis: ['Cycle plus long', 'Alimentation spécifique']
  }
];

// ============================================
// NOUVELLES DONNÉES - POINTS DE VENTE
// ============================================

export const pointsDeVente = [
  {
    id: 'PV001',
    nom: 'Marché Central de Kinshasa',
    type: 'Marché de Gros',
    zone: 'Gombe',
    adresse: 'Avenue du Commerce, Gombe',
    telephone: '+243 812 345 678',
    email: 'contact@marchecentral.cd',
    responsable: 'Mama Thérèse',
    status: 'actif',
    dateOuverture: '2024-01-15',
    horaireOuverture: '06:00 - 18:00',
    typeClient: 'B2B',
    frequenceLivraison: 'Quotidienne',
    volumeMensuel: 2500,
    chiffreAffairesMensuel: 12500,
    modeReglement: 'Comptant',
    delaiPaiement: '0 jours',
    remise: 5,
    coordonnees: { lat: -4.3276, lng: 15.3136 }
  },
  {
    id: 'PV002',
    nom: 'Restaurant Le Gourmet',
    type: 'Restaurant',
    zone: 'Ngaliema',
    adresse: 'Boulevard du 30 Juin, Ngaliema',
    telephone: '+243 898 765 432',
    email: 'legourmet@restaurant.cd',
    responsable: 'Chef Pierre Malonga',
    status: 'actif',
    dateOuverture: '2024-03-20',
    horaireOuverture: '11:00 - 23:00',
    typeClient: 'B2B',
    frequenceLivraison: 'Bi-hebdomadaire',
    volumeMensuel: 600,
    chiffreAffairesMensuel: 3000,
    modeReglement: 'Virement',
    delaiPaiement: '15 jours',
    remise: 10,
    coordonnees: { lat: -4.3369, lng: 15.2665 }
  },
  {
    id: 'PV003',
    nom: 'Supermarché City Mall',
    type: 'Grande Surface',
    zone: 'Limete',
    adresse: 'Avenue de la Libération, Limete',
    telephone: '+243 815 234 567',
    email: 'achat@citymall.cd',
    responsable: 'Directeur Commercial',
    status: 'actif',
    dateOuverture: '2024-02-10',
    horaireOuverture: '08:00 - 21:00',
    typeClient: 'B2B',
    frequenceLivraison: 'Hebdomadaire',
    volumeMensuel: 1200,
    chiffreAffairesMensuel: 6000,
    modeReglement: 'Virement',
    delaiPaiement: '30 jours',
    remise: 8,
    coordonnees: { lat: -4.3827, lng: 15.3333 }
  },
  {
    id: 'PV004',
    nom: 'Hôtel Royal Palace',
    type: 'Hôtel',
    zone: 'Gombe',
    adresse: 'Avenue des Aviateurs, Gombe',
    telephone: '+243 820 111 222',
    email: 'procurement@royalpalace.cd',
    responsable: 'Chef Achats',
    status: 'actif',
    dateOuverture: '2024-04-05',
    horaireOuverture: '24/7',
    typeClient: 'B2B',
    frequenceLivraison: 'Tri-hebdomadaire',
    volumeMensuel: 800,
    chiffreAffairesMensuel: 4000,
    modeReglement: 'Virement',
    delaiPaiement: '15 jours',
    remise: 12,
    coordonnees: { lat: -4.3219, lng: 15.3147 }
  },
  {
    id: 'PV005',
    nom: 'Marché de Matongé',
    type: 'Marché Local',
    zone: 'Kalamu',
    adresse: 'Avenue Kasa-Vubu, Kalamu',
    telephone: '+243 897 654 321',
    email: null,
    responsable: 'Association des Commerçants',
    status: 'actif',
    dateOuverture: '2024-05-12',
    horaireOuverture: '05:00 - 19:00',
    typeClient: 'B2C',
    frequenceLivraison: 'Bi-hebdomadaire',
    volumeMensuel: 1500,
    chiffreAffairesMensuel: 7500,
    modeReglement: 'Comptant',
    delaiPaiement: '0 jours',
    remise: 3,
    coordonnees: { lat: -4.3368, lng: 15.3136 }
  },
  {
    id: 'PV006',
    nom: 'Grossiste Poisson Frais SA',
    type: 'Grossiste',
    zone: 'Kintambo',
    adresse: 'Rue des Pêcheurs, Kintambo',
    telephone: '+243 818 999 888',
    email: 'ventes@poissonfrais.cd',
    responsable: 'M. Joseph Mbala',
    status: 'actif',
    dateOuverture: '2024-06-01',
    horaireOuverture: '04:00 - 14:00',
    typeClient: 'B2B',
    frequenceLivraison: 'Quotidienne',
    volumeMensuel: 3000,
    chiffreAffairesMensuel: 15000,
    modeReglement: 'Comptant',
    delaiPaiement: '0 jours',
    remise: 7,
    coordonnees: { lat: -4.3465, lng: 15.2896 }
  },
  {
    id: 'PV007',
    nom: 'Restaurant Chez Ntemba',
    type: 'Restaurant',
    zone: 'Bandalungwa',
    adresse: 'Avenue Maman Yemo, Bandalungwa',
    telephone: '+243 899 111 000',
    email: 'contact@chezntemba.cd',
    responsable: 'Patron Ntemba',
    status: 'inactif',
    dateOuverture: '2024-07-15',
    horaireOuverture: '10:00 - 22:00',
    typeClient: 'B2B',
    frequenceLivraison: 'Hebdomadaire',
    volumeMensuel: 400,
    chiffreAffairesMensuel: 2000,
    modeReglement: 'Mobile Money',
    delaiPaiement: '7 jours',
    remise: 5,
    coordonnees: { lat: -4.3624, lng: 15.2951 }
  },
  {
    id: 'PV008',
    nom: 'Point de Vente Direct Ferme',
    type: 'Vente Directe',
    zone: 'Mont-Ngafula',
    adresse: 'Ferme KABEYA, Mont-Ngafula',
    telephone: '+243 814 441 299',
    email: 'david.kabeya@hotmail.com',
    responsable: 'David Kabeya',
    status: 'actif',
    dateOuverture: '2024-01-01',
    horaireOuverture: '08:00 - 17:00',
    typeClient: 'B2C',
    frequenceLivraison: 'Sur place',
    volumeMensuel: 800,
    chiffreAffairesMensuel: 4000,
    modeReglement: 'Comptant',
    delaiPaiement: '0 jours',
    remise: 0,
    coordonnees: { lat: -4.4297, lng: 15.2820 }
  }
];

// Historique de livraisons
export const livraisonsHistorique = [
  { id: 'LIV001', date: '08/12/2025', pointVente: 'PV001', espece: 'Ngolo', quantite: 250, montant: 1250, status: 'livree' },
  { id: 'LIV002', date: '08/12/2025', pointVente: 'PV006', espece: 'Tilapia', quantite: 180, montant: 900, status: 'livree' },
  { id: 'LIV003', date: '07/12/2025', pointVente: 'PV002', espece: 'Kongo ya Sika', quantite: 50, montant: 250, status: 'livree' },
  { id: 'LIV004', date: '07/12/2025', pointVente: 'PV003', espece: 'Ngolo', quantite: 120, montant: 600, status: 'livree' },
  { id: 'LIV005', date: '06/12/2025', pointVente: 'PV004', espece: 'Tilapia', quantite: 80, montant: 400, status: 'livree' },
  { id: 'LIV006', date: '06/12/2025', pointVente: 'PV005', espece: 'Ngolo', quantite: 150, montant: 750, status: 'livree' },
  { id: 'LIV007', date: '09/12/2025', pointVente: 'PV001', espece: 'Tilapia', quantite: 200, montant: 1000, status: 'en-cours' },
  { id: 'LIV008', date: '10/12/2025', pointVente: 'PV002', espece: 'Ngolo', quantite: 60, montant: 300, status: 'planifiee' }
];

// Pré-commandes
export const preCommandes = [
  {
    id: 'PC001',
    numero: 'CMD-2025-001',
    pointVente: 'PV001',
    client: 'Marché Central de Kinshasa',
    dateCommande: '05/12/2025',
    dateLivraisonSouhaitee: '20/01/2026',
    status: 'confirmee',
    priorite: 'haute',
    articles: [
      { espece: 'Ngolo', quantite: 500, prixUnitaire: 5, total: 2500 },
      { espece: 'Tilapia', quantite: 300, prixUnitaire: 5, total: 1500 }
    ],
    montantTotal: 4000,
    acompteVerse: 1000,
    resteAPayer: 3000,
    modeReglement: 'Comptant',
    notesSpeciales: 'Poissons vivants préférés, livraison tôt le matin',
    responsableCommande: 'Mama Thérèse',
    telephone: '+243 812 345 678'
  },
  {
    id: 'PC002',
    numero: 'CMD-2025-002',
    pointVente: 'PV003',
    client: 'Supermarché City Mall',
    dateCommande: '08/12/2025',
    dateLivraisonSouhaitee: '25/01/2026',
    status: 'en-attente',
    priorite: 'moyenne',
    articles: [
      { espece: 'Kongo ya Sika', quantite: 150, prixUnitaire: 5, total: 750 },
      { espece: 'Tilapia', quantite: 200, prixUnitaire: 5, total: 1000 }
    ],
    montantTotal: 1750,
    acompteVerse: 0,
    resteAPayer: 1750,
    modeReglement: 'Virement',
    notesSpeciales: 'Emballage sous vide requis, étiquetage avec date',
    responsableCommande: 'Directeur Commercial',
    telephone: '+243 815 234 567'
  },
  {
    id: 'PC003',
    numero: 'CMD-2025-003',
    pointVente: 'PV004',
    client: 'Hôtel Royal Palace',
    dateCommande: '10/12/2025',
    dateLivraisonSouhaitee: '15/01/2026',
    status: 'confirmee',
    priorite: 'haute',
    articles: [
      { espece: 'Ngolo', quantite: 200, prixUnitaire: 5, total: 1000 },
      { espece: 'Kongo ya Sika', quantite: 100, prixUnitaire: 5, total: 500 }
    ],
    montantTotal: 1500,
    acompteVerse: 500,
    resteAPayer: 1000,
    modeReglement: 'Virement',
    notesSpeciales: 'Qualité premium exigée pour restaurant gastronomique',
    responsableCommande: 'Chef Achats',
    telephone: '+243 820 111 222'
  },
  {
    id: 'PC004',
    numero: 'CMD-2025-004',
    pointVente: 'PV002',
    client: 'Restaurant Le Gourmet',
    dateCommande: '12/12/2025',
    dateLivraisonSouhaitee: '30/01/2026',
    status: 'en-attente',
    priorite: 'basse',
    articles: [
      { espece: 'Tilapia', quantite: 150, prixUnitaire: 5, total: 750 }
    ],
    montantTotal: 750,
    acompteVerse: 0,
    resteAPayer: 750,
    modeReglement: 'Virement',
    notesSpeciales: 'Poissons éviscérés, poids uniforme 400-500g',
    responsableCommande: 'Chef Pierre Malonga',
    telephone: '+243 898 765 432'
  },
  {
    id: 'PC005',
    numero: 'CMD-2025-005',
    pointVente: 'PV006',
    client: 'Grossiste Poisson Frais SA',
    dateCommande: '14/12/2025',
    dateLivraisonSouhaitee: '10/02/2026',
    status: 'confirmee',
    priorite: 'haute',
    articles: [
      { espece: 'Ngolo', quantite: 800, prixUnitaire: 5, total: 4000 },
      { espece: 'Tilapia', quantite: 600, prixUnitaire: 5, total: 3000 }
    ],
    montantTotal: 7000,
    acompteVerse: 2000,
    resteAPayer: 5000,
    modeReglement: 'Comptant',
    notesSpeciales: 'Commande régulière mensuelle, livraison à 4h du matin',
    responsableCommande: 'M. Joseph Mbala',
    telephone: '+243 818 999 888'
  }
];

// Statistiques points de vente
export const statsPointsVente = {
  totalPointsVente: 8,
  pointsActifs: 7,
  pointsInactifs: 1,
  volumeTotalMensuel: 10800,
  caMensuelTotal: 54000,
  moyenneCommandeParPoint: 1350,
  meilleurClient: 'PV006',
  zonePlusActive: 'Gombe'
};
