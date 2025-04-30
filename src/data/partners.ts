export interface Partner {
  id: string;
  name: string;
  url: string;
  description: string;
  logo?: string;
}

const partners: Partner[] = [
  {
    id: "ofitech",
    name: "ofitech.lat",
    url: "https://ofitech.lat",
    description: "Soluciones tecnológicas que facilitan becas en Excel, Python y desarrollan herramientas digitales como chat‑bots y analítica de datos para nuestra comunidad.",
    logo: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "casajavorai",
    name: "casajavorai.art",
    url: "https://casajavorai.art",
    description: "Espacio cultural autogestionado en San José (fundado 2019) que fusiona disciplinas artísticas y promueve la reflexión sobre problemáticas sociales de grupos históricamente marginados.",
    logo: "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

export default partners;