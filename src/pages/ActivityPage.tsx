import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowLeft, Target, AlertTriangle } from 'lucide-react';
import activities from '../data/activities';

const ActivityPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const activity = activities.find(a => a.id === id);
  
  if (!activity) {
    return (
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center py-20">
          <h1 className="text-3xl font-bold mb-4">Actividad no encontrada</h1>
          <p className="mb-8">La actividad que estás buscando no existe o ha sido removida.</p>
          <Link 
            to="/activities" 
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md inline-flex items-center"
          >
            <ArrowLeft size={18} className="mr-2" /> Ver todas las actividades
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero banner */}
      <div 
        className="h-[40vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${activity.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8 relative z-10">
          <div className="bg-teal-600 text-white text-sm font-medium py-1 px-3 rounded inline-block mb-4 w-fit">
            {activity.month} 2025
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{activity.title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Descripción</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {activity.description}
              </p>

              <div className="border-t pt-6">
                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <AlertTriangle size={20} className="mr-2 text-orange-500" /> Problemática que atiende
                </h3>
                <p className="text-gray-600 mb-6">
                  {activity.problem}
                </p>

                <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                  <Target size={20} className="mr-2 text-teal-600" /> Objetivo
                </h3>
                <p className="text-gray-600">
                  {activity.objective}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <Link 
                to="/activities" 
                className="text-teal-600 hover:text-teal-700 font-medium inline-flex items-center"
                onClick={(e) => {
                  e.preventDefault();
                  navigate(-1);
                }}
              >
                <ArrowLeft size={18} className="mr-2" /> Volver
              </Link>
            </div>
          </div>

          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Detalles</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Calendar size={18} className="mt-1 mr-3 text-teal-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Fecha</h4>
                    <p className="text-gray-600">{activity.month} 2025</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin size={18} className="mt-1 mr-3 text-teal-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Ubicación</h4>
                    <p className="text-gray-600">{activity.location}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Users size={18} className="mt-1 mr-3 text-teal-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-800">Responsables</h4>
                    <ul className="text-gray-600">
                      {activity.responsibles.map((responsible, index) => (
                        <li key={index}>{responsible}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Modalidad</h2>
              <p className="text-teal-800 bg-teal-100 py-1 px-3 rounded inline-block">
                {activity.modality}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityPage;