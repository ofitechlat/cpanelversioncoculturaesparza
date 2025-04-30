export const mission = "Fomentar el desarrollo integral de la juventud esparzana a través de la gestión cultural, la formación digital y la acción social, propiciando espacios de creación artística y aprendizaje colaborativo que inspiran a la comunidad a participar activamente en su propio progreso.";

export const vision = "Convertirnos en el referente cantonal de innovación cultural autogestionada, reconocido por integrar arte, tecnología, conciencia ambiental y equidad social, creando redes de colaboración a nivel nacional e internacional.";

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  photo?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "carlos",
    name: "Carlos Armando Soto Monge",
    position: "Presidente",
    bio: "Gestor cultural con experiencia en la organización de eventos artísticos y tecnológicos. Comprometido con el desarrollo integral de la juventud esparzana.",
    photo: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "stacy",
    name: "Stacy Suárez",
    position: "Vicepresidenta",
    bio: "Artista visual y diseñadora web con enfoque en la inclusión digital. Coordina la relación con espacios culturales y la presencia online de la organización.",
    photo: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "jefrey",
    name: "Jefrey Suárez",
    position: "Secretario",
    bio: "Productor musical y DJ con experiencia en la organización de eventos. Responsable de la programación musical y la documentación de actividades.",
    photo: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "elena",
    name: "Elena Chavarría",
    position: "Tesorera",
    bio: "Especialista en gestión de proyectos con enfoque en sostenibilidad. Coordina la recaudación de fondos y administra los recursos de la organización.",
    photo: "https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];