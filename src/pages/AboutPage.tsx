import React from 'react';
import { mission, vision, teamMembers } from '../data/organization';
import { ExternalLink } from 'lucide-react';
import partners from '../data/partners';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      {/* Hero */}
      <div className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">Sobre Nosotros</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            ConCultura Esparza nace con el propósito de desarrollar a la juventud esparzana
            a través de la gestión cultural, la formación digital y la acción social.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-gray-800">Nuestra Misión</h2>
              <p className="text-gray-600 leading-relaxed">{mission}</p>
            </div>
            <div className="bg-teal-600 p-8 rounded-lg shadow-md text-white">
              <h2 className="text-2xl font-bold mb-4">Nuestra Visión</h2>
              <p className="leading-relaxed">{vision}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Nuestro Equipo</h2>
            <p className="text-gray-600">
              Conoce a las personas que hacen posible nuestra labor cultural y educativa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow">
                <div 
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${member.photo})` }}
                ></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-800 group-hover:text-teal-600 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 font-medium text-sm mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Partners */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Alianzas Estratégicas</h2>
            <p className="text-gray-300">
              Estas organizaciones colaboran con nosotros para maximizar nuestro impacto cultural y educativo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-md">
                {partner.logo && (
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${partner.logo})` }}
                  ></div>
                )}
                <div className="p-6">
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
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Objetivos */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Nuestros Objetivos</h2>
            
            <div className="space-y-4 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-teal-600">1. Fomentar la participación juvenil</h3>
                <p className="text-gray-600">
                  Creamos experiencias artísticas como música, artes visuales y cine-foro para
                  involucrar a los jóvenes en actividades culturales enriquecedoras.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-teal-600">2. Impulsar el talento local</h3>
                <p className="text-gray-600">
                  Ofrecemos formación en producción musical, diseño web y producción multimedia
                  para desarrollar las habilidades creativas y técnicas de los jóvenes esparzanos.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-teal-600">3. Conectar cultura y ambiente</h3>
                <p className="text-gray-600">
                  Organizamos murales participativos y jornadas de limpieza en espacios públicos
                  para fomentar la conciencia ambiental a través del arte.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 text-teal-600">4. Fortalecer alianzas estratégicas</h3>
                <p className="text-gray-600">
                  Colaboramos con casas de la cultura, universidades y la Municipalidad
                  para amplificar nuestro impacto y crear proyectos comunitarios sostenibles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;