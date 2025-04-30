import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, ExternalLink } from 'lucide-react';
import activities from '../data/activities';
import partners from '../data/partners';
import { mission, vision } from '../data/organization';

const HomePage: React.FC = () => {
  // Filter activities to only show future ones or the latest 4
  const upcomingActivities = activities.slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-teal-900/60"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg animate-fade-up">
            ConCultura <span className="text-teal-400">Esparza</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-100 animate-fade-up animation-delay-100">
            Fomentando el desarrollo integral de la juventud esparzana a través de la
            gestión cultural, formación digital y acción social.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-200">
            <Link 
              to="/activities" 
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Ver actividades
            </Link>
            <Link 
              to="/about" 
              className="bg-transparent hover:bg-white/10 border border-white text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Conócenos
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Nuestra Misión</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {mission}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Visión</h3>
              <p className="text-gray-600 mb-6">{vision}</p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
              >
                Conoce más sobre nosotros <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="bg-teal-600 p-8 rounded-lg shadow-md text-white">
              <h3 className="text-2xl font-bold mb-4">Objetivos</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Fomentar participación juvenil mediante experiencias artísticas</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Impulsar talento local con formación en DJ, diseño web y producción multimedia</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Conectar cultura y ambiente, organizando murales y jornadas de limpieza</span>
                </li>
                <li className="flex">
                  <span className="mr-2">•</span>
                  <span>Fortalecer alianzas con casas de la cultura y universidades</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h4 className="text-teal-600 font-medium mb-2 flex items-center">
                <Calendar size={18} className="mr-2" /> ITINERARIO 2025
              </h4>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Próximas Actividades</h2>
            </div>
            <Link 
              to="/activities" 
              className="hidden md:flex items-center text-teal-600 hover:text-teal-700 font-medium"
            >
              Ver todas <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingActivities.map((activity) => (
              <Link 
                key={activity.id}
                to={`/activities/${activity.id}`} 
                className="group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${activity.image})` }}
                  >
                    <div className="bg-teal-600 text-white text-sm font-medium py-1 px-3 inline-block m-3 rounded">
                      {activity.month}
                    </div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-teal-600 transition-colors">
                      {activity.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {activity.description}
                    </p>
                    <div className="mt-auto flex items-center text-sm text-gray-500">
                      <div className="flex items-center mr-4">
                        <Users size={14} className="mr-1" />
                        <span>{activity.responsibles[0]}</span>
                      </div>
                      <div>
                        {activity.modality}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link 
              to="/activities" 
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
            >
              Ver todas las actividades <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h4 className="text-teal-400 font-medium mb-2 flex items-center justify-center">
              <Users size={18} className="mr-2" /> COLABORADORES
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestros Aliados</h2>
            <p className="text-gray-300">
              Trabajamos junto a organizaciones comprometidas con el desarrollo cultural y educativo
              de nuestra comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-gray-800 rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3 text-white">{partner.name}</h3>
                <p className="text-gray-300 mb-4">{partner.description}</p>
                <a 
                  href={partner.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium"
                >
                  Visitar sitio <ExternalLink size={14} className="ml-1" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Quieres ser parte de nuestro impacto?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Únete a nuestras actividades, propón ideas o colabora como voluntario.
            Juntos podemos hacer la diferencia en la cultura de Esparza.
          </p>
          <Link 
            to="/contact" 
            className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-medium text-lg inline-block transition-colors"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;