import type { TalkInfo, User } from "@/lib/types";

const talks: TalkInfo[] = [
    {
        id: "1",
        title: "El Telescopio James Webb: Revolucionando la Astronomía",
        description: "Descubre los últimos hallazgos del telescopio más potente jamás construido. Desde galaxias primordiales hasta exoplanetas habitables, exploramos cómo el JWST está cambiando nuestra comprensión del universo.",
        tags: ["astronomia", "tecnologia", "descubrimientos"],
        coverURl: "/assets/images/space1.jpg",
    },
    {
        id: "2",
        title: "Misión Artemis: El Retorno Humano a la Luna",
        description: "Un análisis detallado de la misión Artemis y los planes para establecer una base lunar permanente. Conoce los desafíos técnicos y científicos que enfrentamos en nuestro regreso al satélite natural.",
        tags: ["exploracion", "luna", "misiones"],
        coverURl: "/assets/images/space2.jpg",
    },
    {
        id: "3",
        title: "Vida en Marte: Evidencias y Posibilidades",
        description: "Examinamos las evidencias de vida pasada y presente en Marte. Desde los hallazgos del rover Perseverance hasta las futuras misiones tripuladas al planeta rojo.",
        tags: ["marte", "astrobiologia", "exploracion"],
        coverURl: "/assets/images/space3.jpg",
    },
    {
        id: "4",
        title: "Agujeros Negros: Los Gigantes Cósmicos",
        description: "Sumérgete en el fascinante mundo de los agujeros negros. Desde la primera imagen de Sagitario A* hasta las ondas gravitacionales, exploramos estos enigmáticos objetos cósmicos.",
        tags: ["astrofisica", "agujeros-negros", "ciencia"],
        coverURl: "/assets/images/space4.jpg",
    },
    {
        id: "5",
        title: "SpaceX y el Futuro de los Viajes Espaciales",
        description: "Analizamos cómo SpaceX está transformando la industria espacial con cohetes reutilizables, Starship y los planes para colonizar Marte. El futuro de la exploración espacial comercial.",
        tags: ["tecnologia", "spacex", "innovacion"],
        coverURl: "/assets/images/space5.jpg",
    },
];

const users: User[] = [
   {
       id: "1",
       name: "Dr. Elena Martínez",
       email: "e.martinez@nasa.gov",
       avatar: "/assets/images/user2.jpg",
       title: "Astrofísica de Exoplanetas - NASA",
       bio: "Especialista en detección y caracterización de exoplanetas habitables. Líder del equipo de análisis de datos del telescopio James Webb.",
   },
   {
       id: "2",
       name: "Comandante Alex Chen",
       email: "a.chen@esa.int",
       avatar: "/assets/images/user1.jpg",
       title: "Astronauta - Agencia Espacial Europea",
       bio: "Veterano de tres misiones espaciales incluyendo la Estación Espacial Internacional. Experto en operaciones EVA y sistemas de soporte vital.",
   },
   {
       id: "3",
       name: "Dr. María Rodríguez",
       email: "m.rodriguez@spacex.com",
       avatar: "/assets/images/user2.jpg",
       title: "Ingeniera de Propulsión - SpaceX",
       bio: "Ingeniera líder en el desarrollo de motores Raptor para misiones a Marte. Especialista en sistemas de propulsión avanzada y combustibles criogénicos.",
   }
]

export const getTalk = async (id: string): Promise<TalkInfo & { user: User }> => {
    const talk = talks.find((talk) => talk.id === id);
    const randomIndexUSer = Math.floor(Math.random() * users.length);
    if (!talk) {
        throw new Error(`talk with id ${id} not found`);
    }
    return {
        ...talk,
        user: users[randomIndexUSer]
    }
};