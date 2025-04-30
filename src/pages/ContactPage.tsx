import React, { useState } from 'react';
import { MapPin, Mail, Phone, Send, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formState.name || !formState.email || !formState.message) {
      toast.error('Por favor complete todos los campos requeridos');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real implementation, you'd send this data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Mensaje enviado con éxito');
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Hubo un problema al enviar su mensaje');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="pt-24 pb-12">
      {/* Hero */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contáctanos</h1>
            <p className="text-xl text-teal-100 leading-relaxed">
              Estamos aquí para escucharte. Ponte en contacto con nosotros para cualquier consulta, 
              propuesta de colaboración o si quieres unirte a nuestras actividades.
            </p>
          </div>
        </div>
      </div>
      
      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Envíanos un mensaje</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <input 
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`inline-flex items-center px-6 py-3 rounded-md text-white font-medium transition-colors
                      ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-teal-600 hover:bg-teal-700'}`}
                  >
                    {isSubmitting ? (
                      <>Enviando...</>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Información de contacto</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin size={20} className="mr-3 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Dirección</h3>
                    <p className="text-gray-600">150 m oeste y 25 m norte de la UTN, Barrio San Rafael, Esparza</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={20} className="mr-3 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Correo electrónico</h3>
                    <a 
                      href="mailto:concultura.esparza@gmail.com" 
                      className="text-teal-600 hover:text-teal-700 transition-colors"
                    >
                      concultura.esparza@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={20} className="mr-3 text-teal-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-medium text-gray-800">Teléfono</h3>
                    <p className="text-gray-600">(506) 8888-8888</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Horarios */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Horarios de atención</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Lunes a Viernes</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sábados</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domingos</span>
                  <span className="font-medium">Cerrado</span>
                </div>
              </div>
            </div>
            
            {/* Mapa / Ubicación */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-gray-800">Nuestra ubicación</h2>
              <div className="rounded-lg overflow-hidden bg-gray-200 h-48 flex items-center justify-center">
                <a 
                  href="https://maps.app.goo.gl/5Lx1W1YYn1q1nmHm9" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-teal-600 hover:text-teal-700 transition-colors flex items-center font-medium"
                >
                  <MapPin className="mr-2" />
                  Ver en Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 mt-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Preguntas frecuentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-3 text-gray-800">¿Cómo puedo participar en sus actividades?</h3>
              <p className="text-gray-600">
                Puedes participar asistiendo a nuestros eventos, siguiéndonos en redes sociales para estar al tanto
                de nuestras actividades, o contactándonos directamente para unirte como voluntario.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-3 text-gray-800">¿Ofrecen oportunidades de voluntariado?</h3>
              <p className="text-gray-600">
                ¡Sí! Siempre buscamos personas entusiastas que quieran contribuir. Envíanos un mensaje
                detallando tus intereses y habilidades.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-3 text-gray-800">¿Pueden dar talleres en mi institución?</h3>
              <p className="text-gray-600">
                Ofrecemos talleres y charlas en instituciones educativas y organizaciones comunitarias.
                Contáctanos para discutir opciones y disponibilidad.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold mb-3 text-gray-800">¿Cómo puedo apoyar a ConCultura?</h3>
              <p className="text-gray-600">
                Puedes apoyarnos asistiendo a eventos, difundiendo nuestras actividades,
                ofreciendo tus habilidades como voluntario o proponiendo colaboraciones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;