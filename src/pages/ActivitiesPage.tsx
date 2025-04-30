import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Users } from 'lucide-react';
import activities from '../data/activities';

const ActivitiesPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Actividades 2025</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity) => (
            <Link 
              key={activity.id}
              to={`/activities/${activity.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${activity.image})` }}
              >
                <div className="bg-teal-600 text-white text-sm font-medium py-1 px-3 inline-block m-3 rounded">
                  {activity.month}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-teal-600">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {activity.description}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="flex items-center mr-4">
                    <Users size={14} className="mr-1" />
                    <span>{activity.responsibles[0]}</span>
                  </div>
                  <div>
                    {activity.modality}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesPage;