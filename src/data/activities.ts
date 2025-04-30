export interface Activity {
  id: string;
  month: string;
  title: string;
  description: string;
  responsibles: string[];
  modality: string;
  location: string;
  problem: string;
  objective: string;
  image?: string;
}

const activities: Activity[] = [
  {
    id: "mayo-2025",
    month: "Mayo",
    title: "Presentación de música electrónica + Micro-talleres de IA",
    description: "Disfruta de un set de música electrónica curado por Jefrey Suárez mientras aprendes los fundamentos de la Inteligencia Artificial para creativos. Aprenderás prompt engineering y generación de arte con IA.",
    responsibles: ["Jefrey Suárez", "Carlos Soto", "Stacy Suárez"],
    modality: "Virtual",
    location: "Twitch + Zoom",
    problem: "Escaso acceso local a eventos culturales durante la época de lluvias y brecha en competencias digitales emergentes",
    objective: "Ofrecer un espacio cultural en línea para 150 jóvenes e introducir a 30 participantes en herramientas IA 'no-code'",
    image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "junio-2025",
    month: "Junio",
    title: "Campaña 'Beca tu Futuro' – Difusión de becas Excel & Python",
    description: "En alianza con Academia UPC / Ofitech.lat, lanzamos una campaña de difusión de becas para cursos de Excel y programación en Python. Ofreceremos charlas en colegios y una fuerte presencia en redes sociales.",
    responsibles: ["Elena Chavarría"],
    modality: "Híbrida",
    location: "Redes sociales + Charlas en colegios",
    problem: "Falta de información sobre becas técnicas y desempleo juvenil por falta de habilidades TIC",
    objective: "Alcanzar 10,000 impresiones orgánicas en RRSS y lograr al menos 40 postulaciones a las becas",
    image: "https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "julio-2025",
    month: "Julio",
    title: "Varieté artística + Soporte web/audio en Casa Javorai",
    description: "Colaboración con Casa Javorai en San José, apoyando en la organización de una varieté artística, edición de su página web y producción de audio para el evento.",
    responsibles: ["Stacy Suárez", "Equipo técnico"],
    modality: "Híbrida",
    location: "Presencial (San José) + Trabajo remoto",
    problem: "Necesidad de visibilidad para artistas emergentes y plataforma web desactualizada de la casa cultural",
    objective: "Producir un evento con 8 números artísticos y publicar nueva sección web y 3 podcasts resaltando el evento",
    image: "https://images.pexels.com/photos/1481309/pexels-photo-1481309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "agosto-2025",
    month: "Agosto",
    title: "Jornada Educación Media 360° + Talleres Bach. Abierta MEP",
    description: "Convocatoria para actividad presencial en Esparza, enfocada en concientizar sobre la importancia de la formación en educación media, incluyendo talleres para bachillerato por educación abierta del MEP.",
    responsibles: ["Carlos Soto", "Jefrey Suárez"],
    modality: "Presencial",
    location: "Parque de Esparza",
    problem: "Alta deserción en 10º-11º año y desconocimiento de rutas de bachillerato por madurez",
    objective: "Reunir 200 estudiantes de 3 colegios, inscribir 60 jóvenes en Bach. Abierta MEP y difundir 50 becas UPC",
    image: "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "septiembre-2025",
    month: "Septiembre",
    title: "Diseño proyecto 'Expo-Arte Rural'",
    description: "Diseño y planificación de un proyecto de murales y música itinerante para los distritos rurales de Esparza. Este mes se dedicará a la búsqueda de fondos y alianzas.",
    responsibles: ["Junta Directiva"],
    modality: "Planificación",
    location: "Distritos rurales",
    problem: "Poca oferta cultural fuera del centro cantonal",
    objective: "Diseñar proyecto y buscar fondos antes del 31 de julio",
    image: "https://images.pexels.com/photos/1647962/pexels-photo-1647962.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "noviembre-2025",
    month: "Noviembre",
    title: "Festival 'Luces y Beats' pro-limpieza costera",
    description: "Festival de música electrónica y luces con fines ambientales, enfocado en la recaudación de fondos para una jornada de limpieza costera en alianza con MINAE.",
    responsibles: ["Elena Chavarría", "Carlos Soto"],
    modality: "Presencial",
    location: "Playa Doña Ana",
    problem: "Contaminación costera y poca conciencia ecológica",
    objective: "Recaudar ₡300,000 para comprar suministros de limpieza y convocar 100 voluntarios",
    image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "diciembre-2025",
    month: "Diciembre",
    title: "Feria de Talentos & Informe de Impacto 2025",
    description: "Cierre del año con una feria que muestra los talentos desarrollados durante las actividades del año. Se presentará el informe de impacto 2025 y se entregarán reconocimientos 'ConCultura Awards'.",
    responsibles: ["Junta Directiva completa"],
    modality: "Presencial",
    location: "UTN – Sede Pacífico",
    problem: "Necesidad de rendición de cuentas y cierre motivador",
    objective: "Presentar informe a CCPJ & patrocinadores, exhibir 20 proyectos juveniles y establecer metas 2026",
    image: "https://images.pexels.com/photos/2526106/pexels-photo-2526106.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export default activities;