import img1 from "assets/img/ivslider-ley-cambio-orden-apellidos1560x170.jpg";
import img2 from "assets/img/slider_extranjeros_v3.jpg";
import img3 from "assets/img/slider-calendario-civilmovil.jpg";
import img4 from "assets/img/slider-plan-de-refuerzo.jpg";
import {
  BankIcon,
  CedulaIcon,
  ClaveUniqueIcon,
  FileMarkIcon,
  PersonsIcon,
  TruckIcon,
} from "assets/icons";

export const certificados = [
  {
    nombre: "Más solicitados",
    data: [
      {
        nombre: "Certificado Nacimiento Para Asignación Familiar",
        costo: 1000,
      },
      { nombre: "Certificado Antecedentes Fines Particulares", 
        costo: 1500 
      },
      {
        nombre: "Certificado de Matrimonio Para Asignación Familiar",
        costo: 2100,
      },
    ],
  },
  {
    nombre: "Nacimiento",
    data: [
      { 
        nombre: "Certificado Nacimiento Para Matricula", 
        costo: 12000 
      },
      {
        nombre: "Certificado Nacimiento Para Asignación Familiar",
        costo: 1000,
      },
      { 
        nombre: "Certificado Nacimiento Para Todo Tramite", 
        costo: 2500 
      },
    ],
  },
  {
    nombre: "Matrimonio",
    data: [
      {
        nombre: "Certificado de Matrimonio Todo tramite sin Inscripciones",
        costo: 1500,
      },
      {
        nombre: "Certificado de Matrimonio Para Asignación Familiar",
        costo: 2100,
      },
      {
        nombre: "Informe de Cese de convivencia", 
        costo: 1800 
      },
      {
        nombre: "Certificado de Matrimonio Todo tramite con Inscripciones",
        costo: 1700,
      },
    ],
  },
];

export const images = [img1, img2, img3, img4];

export const statusRequests = [
  "Cédula Identidad y Pasaporte",
  "Extractos publicados de Posesión Efectiva",
  "Posesiones Efectivas",
  "Transparencia",
  "Vehículos",
  "Persona Jurídica sin Fines de Lucro",
  "Inscripción Instit. y Pers. Naturales apoyo a Discapacidad",
  "Libreta Matrimonio",
  "Cédula de identidad para extranjeros",
];

export const consultings = [
  "Vigencia de un documento",
  "Inhabilidades para trabajar con menores de edad por delitos sexuales",
  "Inhabilidades por delito de maltrato relevante",
  "Multas de tránsito no pagadas",
  "No donante",
  "Banco de datos personales",
];

export const verifications = [
  "Electrónicos y de Posesiones Efectivas",
  "Posesión Efectiva",
];

export const makings = [
  { titulo: "Cédula de identidad", icon: CedulaIcon },
  { titulo: "Como obtener Clave Unica", icon: ClaveUniqueIcon },
  { titulo: "Acuerdo Unión Civil", icon: PersonsIcon },
  {
    titulo: "Transferencia de vehículos (declaración consensual)",
    icon: TruckIcon,
  },
  { titulo: "Matrimonio Civil", icon: BankIcon },
  { titulo: "Todos los trámites", icon: FileMarkIcon },
];
