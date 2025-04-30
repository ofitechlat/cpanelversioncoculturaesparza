import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and short description */}
          <div className="space-y-4">
            <Logo className="text-white" />
            <p className="mt-2 text-sm">
              Fomentando el desarrollo integral de la juventud esparzana a través de la
              gestión cultural, formación digital y acción social.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {['Home', 'Activities', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>150 m oeste y 25 m norte de la UTN, Barrio San Rafael, Esparza</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>(506) 8888-8888</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a 
                  href="mailto:concultura.esparza@gmail.com" 
                  className="hover:text-white transition-colors"
                >
                  concultura.esparza@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Collaborators */}
          <div>
            <h4 className="text-white font-medium text-lg mb-4">Colaboradores</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://ofitech.lat" 
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Ofitech.lat
                </a>
              </li>
              <li>
                <a 
                  href="https://casajavorai.art" 
                  className="text-gray-400 hover:text-white transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Casa Javorai
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} ConCultura Esparza. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;