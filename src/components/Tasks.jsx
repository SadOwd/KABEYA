import React, { useState } from 'react';
import { Calendar, Clock, User, AlertCircle, CheckCircle, Plus } from 'lucide-react';
import { recentTasks } from '../data/mockData';

const Tasks = () => {
  const [tasks, setTasks] = useState(recentTasks);
  const [filter, setFilter] = useState('all');

  const filteredTasks = filter === 'all' ? tasks : tasks.filter(t => t.status === filter);

  const getStatusBadge = (status) => {
    switch(status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'in-progress':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'pending':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getPriorityBadge = (priority) => {
    switch(priority) {
      case 'high':
        return 'bg-red-500/20 text-red-400';
      case 'medium':
        return 'bg-orange-500/20 text-orange-400';
      case 'low':
        return 'bg-green-500/20 text-green-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'completed': return 'Effectuée';
      case 'in-progress': return 'En cours';
      case 'pending': return 'En attente';
      default: return status;
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2 flex items-center">
              <Calendar className="w-6 h-6 mr-2 text-cyan-400" />
              Calendrier des Tâches
            </h2>
            <p className="text-gray-400">Planning opérationnel et suivi d'exécution</p>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-4 py-2 rounded-lg font-semibold transition-all shadow-lg flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Nouvelle Tâche</span>
          </button>
        </div>
      </div>

      {/* Filtres */}
      <div className="flex space-x-2 overflow-x-auto">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            filter === 'all' ? 'bg-blue-500 text-white' : 'bg-white/5 hover:bg-white/10'
          }`}
        >
          Toutes ({tasks.length})
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            filter === 'completed' ? 'bg-green-500 text-white' : 'bg-white/5 hover:bg-white/10'
          }`}
        >
          Effectuées ({tasks.filter(t => t.status === 'completed').length})
        </button>
        <button
          onClick={() => setFilter('in-progress')}
          className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            filter === 'in-progress' ? 'bg-blue-500 text-white' : 'bg-white/5 hover:bg-white/10'
          }`}
        >
          En cours ({tasks.filter(t => t.status === 'in-progress').length})
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
            filter === 'pending' ? 'bg-yellow-500 text-white' : 'bg-white/5 hover:bg-white/10'
          }`}
        >
          En attente ({tasks.filter(t => t.status === 'pending').length})
        </button>
      </div>

      {/* Stats Rapides */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4">
          <CheckCircle className="w-8 h-8 text-green-400 mb-2" />
          <p className="text-2xl font-bold text-green-400">{tasks.filter(t => t.status === 'completed').length}</p>
          <p className="text-sm text-gray-400">Tâches effectuées</p>
        </div>
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-4">
          <Clock className="w-8 h-8 text-blue-400 mb-2" />
          <p className="text-2xl font-bold text-blue-400">{tasks.filter(t => t.status === 'in-progress').length}</p>
          <p className="text-sm text-gray-400">En cours</p>
        </div>
        <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-xl p-4">
          <AlertCircle className="w-8 h-8 text-yellow-400 mb-2" />
          <p className="text-2xl font-bold text-yellow-400">{tasks.filter(t => t.status === 'pending').length}</p>
          <p className="text-sm text-gray-400">En attente</p>
        </div>
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-xl p-4">
          <User className="w-8 h-8 text-purple-400 mb-2" />
          <p className="text-2xl font-bold text-purple-400">{new Set(tasks.map(t => t.responsible)).size}</p>
          <p className="text-sm text-gray-400">Responsables actifs</p>
        </div>
      </div>

      {/* Liste des Tâches */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-3 text-gray-400">Statut</th>
                <th className="text-left p-3 text-gray-400">Date</th>
                <th className="text-left p-3 text-gray-400">Heure</th>
                <th className="text-left p-3 text-gray-400">Tâche</th>
                <th className="text-left p-3 text-gray-400">Priorité</th>
                <th className="text-left p-3 text-gray-400">Responsable</th>
                <th className="text-left p-3 text-gray-400">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredTasks.length === 0 ? (
                <tr>
                  <td colSpan="7" className="p-6 text-center text-gray-400">
                    Aucune tâche trouvée
                  </td>
                </tr>
              ) : (
                filteredTasks.map((task) => (
                  <tr key={task.id} className="border-b border-white/10 hover:bg-white/5 transition-all">
                    <td className="p-3">
                      <span className={`px-3 py-1 rounded-lg text-xs font-semibold border ${getStatusBadge(task.status)} flex items-center space-x-1 w-fit`}>
                        {task.status === 'completed' && <CheckCircle className="w-3 h-3" />}
                        {task.status === 'in-progress' && <Clock className="w-3 h-3" />}
                        {task.status === 'pending' && <AlertCircle className="w-3 h-3" />}
                        <span>{getStatusText(task.status)}</span>
                      </span>
                    </td>
                    <td className="p-3 text-gray-300">{task.date}</td>
                    <td className="p-3 text-gray-400 text-sm">{task.time}</td>
                    <td className="p-3 font-semibold">{task.task}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityBadge(task.priority)} uppercase`}>
                        {task.priority}
                      </span>
                    </td>
                    <td className="p-3 text-gray-400 text-sm">{task.responsible}</td>
                    <td className="p-3">
                      <div className="flex space-x-2">
                        <button className="text-blue-400 hover:text-blue-300 text-xs">Modifier</button>
                        <button className="text-red-400 hover:text-red-300 text-xs">Supprimer</button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Planning Hebdomadaire */}
      <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Tâches Récurrentes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold text-cyan-400 mb-3">Quotidien</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Distribution alimentaire (3x/jour)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Contrôle des bassins</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Relevé de mortalité</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold text-green-400 mb-3">Hebdomadaire</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Analyse qualité eau (pH, T°, O₂)</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Nettoyage bassins</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Reporting interne</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-400 mb-3">Bimensuel</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Tri et échantillonnage poissons</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Contrôle croissance (pesée)</span>
              </li>
            </ul>
          </div>
          <div className="bg-white/5 rounded-lg p-4">
            <h4 className="font-semibold text-purple-400 mb-3">Mensuel</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Bilan financier</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Formation équipe</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
