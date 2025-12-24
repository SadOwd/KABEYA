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
    caMensuel: 12500,
    modeReglement: 'Comptant',
    delaiPaiement: '0 jours',
    tauxRemise: 5,
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
    caMensuel: 3000,
    modeReglement: 'Virement',
    delaiPaiement: '15 jours',
    tauxRemise: 10,
    coordonnees: { lat: -4.3369, lng: 15.2665 }
  }
];

export const livraisonsHistorique = [
  { 
    id: 'LIV001', 
    date: '21/12/2025', 
    pointVente: 'Marché Central de Kinshasa',
    adresse: 'Avenue du Commerce, Gombe',
    articles: ['Ngolo'], 
    quantite: 250, 
    montant: 1250, 
    status: 'livree',
    chauffeur: 'Jean Transport',
    contact: '+243 812 345 678'
  }
];

export const preCommandes = [
  {
    id: 'PC001',
    numeroCommande: 'CMD-2025-001',
    pointVente: 'Marché Central de Kinshasa',
    client: 'Mama Thérèse',
    dateCommande: '05/12/2025',
    dateLivraisonSouhaitee: '20/01/2026',
    status: 'confirmee',
    priorite: 'haute',
    articles: [
      { espece: 'Ngolo', quantite: 500, prixUnitaire: 5, montant: 2500 }
    ],
    montantTotal: 2500,
    acompteVerse: 1000,
    resteAPayer: 1500,
    modeReglement: 'Comptant',
    notes: 'Poissons vivants préférés',
    contact: '+243 812 345 678'
  }
];

export const statsPointsVente = {
  totalPointsVente: 2,
  pointsActifs: 2,
  pointsInactifs: 0,
  volumeTotalMensuel: 3100,
  caMensuelTotal: 15500,
  moyenneCommandeParPoint: 1550,
  meilleurClient: 'PV001',
  zonePlusActive: 'Gombe'
};

export const stockPoissons = [
  {
    produit: 'Tilapia Frais',
    categorie: 'Poissons d\'eau douce',
    quantiteEnStock: 450,
    seuilAlerte: 200,
    prixUnitaire: 3.50,
    derniereMiseAJour: '21/12/2025'
  },
  {
    produit: 'Capitaine',
    categorie: 'Poissons d\'eau douce',
    quantiteEnStock: 180,
    seuilAlerte: 150,
    prixUnitaire: 5.00,
    derniereMiseAJour: '21/12/2025'
  },
  {
    produit: 'Maquereau Fumé',
    categorie: 'Poissons transformés',
    quantiteEnStock: 320,
    seuilAlerte: 250,
    prixUnitaire: 4.20,
    derniereMiseAJour: '20/12/2025'
  },
  {
    produit: 'Sardines',
    categorie: 'Poissons marins',
    quantiteEnStock: 280,
    seuilAlerte: 200,
    prixUnitaire: 2.80,
    derniereMiseAJour: '21/12/2025'
  },
  {
    produit: 'Crevettes',
    categorie: 'Fruits de mer',
    quantiteEnStock: 95,
    seuilAlerte: 120,
    prixUnitaire: 12.00,
    derniereMiseAJour: '20/12/2025'
  }
];

export const mouvementsStock = [
  {
    id: 'MVT001',
    date: '21/12/2025 08:30',
    produit: 'Tilapia Frais',
    type: 'Entrée',
    quantite: 200,
    reference: 'ACH-2025-012',
    motif: 'Achat Fournisseur'
  },
  {
    id: 'MVT002',
    date: '21/12/2025 10:15',
    produit: 'Capitaine Congelé',
    type: 'Sortie',
    quantite: 150,
    reference: 'LIV-2025-045',
    motif: 'Livraison Client'
  }
];

export const alertesStock = [
  {
    id: 'ALT001',
    type: 'warning',
    priorite: 'haute',
    espece: 'Crevettes',
    message: 'Stock en dessous du seuil d\'alerte',
    dateAlerte: '21/12/2025',
    action: 'Réapprovisionner rapidement'
  }
];

export const factures = [
  {
    numeroFacture: 'FAC-2025-001',
    client: 'Restaurant Le Gourmet',
    pointDeVente: 'Gombe',
    dateEmission: '15/12/2025',
    dateEcheance: '15/01/2026',
    montantHT: 1500,
    tva: 225,
    montantTotal: 1725,
    statut: 'Payée',
    montantPaye: 1725,
    resteAPayer: 0,
    articles: [
      { produit: 'Tilapia Frais', quantite: 120, prixUnitaire: 5.5, montant: 660 },
      { produit: 'Capitaine Congelé', quantite: 80, prixUnitaire: 6.8, montant: 544 }
    ]
  },
  {
    numeroFacture: 'FAC-2025-002',
    client: 'Hôtel Memling',
    pointDeVente: 'Gombe',
    dateEmission: '16/12/2025',
    dateEcheance: '16/01/2026',
    montantHT: 2800,
    tva: 420,
    montantTotal: 3220,
    statut: 'En attente',
    montantPaye: 0,
    resteAPayer: 3220,
    articles: [
      { produit: 'Maquereau Fumé', quantite: 200, prixUnitaire: 4.8, montant: 960 }
    ]
  },
  {
    numeroFacture: 'FAC-2025-003',
    client: 'Restaurant La Belle Vue',
    pointDeVente: 'Limete',
    dateEmission: '14/12/2025',
    dateEcheance: '14/01/2026',
    montantHT: 980,
    tva: 147,
    montantTotal: 1127,
    statut: 'En retard',
    montantPaye: 0,
    resteAPayer: 1127,
    articles: [
      { produit: 'Sardines', quantite: 100, prixUnitaire: 2.8, montant: 280 }
    ]
  }
];

export const statsFacturation = {
  totalFactures: 3,
  facturesPayees: 1,
  facturesEnAttente: 1,
  facturesEnRetard: 1,
  montantTotalFacture: 6072,
  montantEncaisse: 1725,
  montantEnAttente: 4347,
  tauxRecouvrement: 28.4,
  delaiPaiementMoyen: 15
};

export const stock = [
  {
    id: 'STK001',
    produit: 'Tilapia Frais',
    categorie: 'Poisson Frais',
    quantite: 850,
    stockMinimum: 200,
    prixUnitaire: 5.5,
    emplacement: 'Chambre Froide A',
    statut: 'Optimal'
  },
  {
    id: 'STK002',
    produit: 'Capitaine Congelé',
    categorie: 'Poisson Congelé',
    quantite: 450,
    stockMinimum: 300,
    prixUnitaire: 6.8,
    emplacement: 'Chambre Froide B',
    statut: 'Optimal'
  },
  {
    id: 'STK003',
    produit: 'Silure Fumé',
    categorie: 'Poisson Transformé',
    quantite: 180,
    stockMinimum: 150,
    prixUnitaire: 8.5,
    emplacement: 'Zone Séchage',
    statut: 'Bas'
  },
  {
    id: 'STK004',
    produit: 'Carpe Premium',
    categorie: 'Poisson Frais',
    quantite: 95,
    stockMinimum: 100,
    prixUnitaire: 7.2,
    emplacement: 'Chambre Froide A',
    statut: 'Critique'
  }
];

export const paiements = [
  {
    id: 'PAY001',
    date: '16/12/2025',
    numeroFacture: 'FAC-2025-001',
    client: 'Restaurant Le Gourmet',
    montant: 1725,
    methodePaiement: 'Virement Bancaire'
  }
];
