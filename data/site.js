const whatsappNumber = "573202878530";
const whatsappBase = `https://wa.me/${whatsappNumber}`;

const contact = {
  phone: "+57 320 2878530",
  email: "copyservices.co@gmail.com",
  facebookUrl: "https://www.facebook.com/p/Copyservices-100086411343836",
  defaultMessage: "Hola, quiero información sobre CopyServices.",
};

const brand = {
  name: "CopyServices",
  tagline: "Donde tus ideas toman forma.",
  title: "CopyServices - Papelería, trámites y Puntored",
  logo: "img/logos/LOGO%20FONDO%20BLANCO.svg",
};

const hero = {
  image: "img/Banner%20Hero2.png",
  alt: "Banner de servicios CopyServices",
};

const map = {
  url: "https://www.google.com/maps?cid=3724333998245387144",
  embedUrl: "https://www.google.com/maps?cid=3724333998245387144&output=embed",
};

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Papelería y oficina", href: "#papeleria-oficina" },
  { label: "Trámites", href: "#tramites" },
  { label: "Puntored", href: "#puntored" },
  { label: "Productos", href: "#productos" },
  { label: "Sede", href: "#sede" },
];

const serviceGroups = [
  {
    id: "papeleria-oficina",
    title: "Servicios de papelería y oficina",
    className: "office",
    iconSrc: "https://unpkg.com/@tabler/icons@3.37.1/icons/outline/notebook.svg",
    summary: "Copias, impresiones, trabajos en computador y acabados para documentos.",
    message: "Hola, quiero consultar un servicio de papelería u oficina.",
    items: [
      "Fotocopias a color y blanco y negro.",
      "Impresiones láser a color y blanco y negro.",
      "Trabajos en computador.",
      "Transcripción y redacción de textos.",
      "Anillado.",
      "Laminado al calor desde tamaño cédula hasta oficio.",
      "Escáner.",
      "Guillotina de papel.",
    ],
  },
  {
    id: "tramites",
    title: "Servicios de trámites",
    className: "process",
    iconSrc: "https://unpkg.com/@tabler/icons@3.37.1/icons/outline/certificate.svg",
    summary: "Apoyo para certificados, recibos, radicaciones y gestiones virtuales.",
    message: "Hola, quiero consultar un trámite virtual.",
    items: [
      "Expedición de recibos de pago de estampillas municipales y departamentales.",
      "Expedición de certificados de tradición.",
      "Radicación de PQRS ante la Alcaldía y otras entidades públicas.",
      "Certificados de antecedentes judiciales, Contraloría y Procuraduría.",
      "Trámites virtuales diversos.",
    ],
  },
  {
    id: "puntored",
    title: "Servicios Puntored",
    className: "puntored",
    iconSrc: "img/PuntoRed.png",
    summary: "Pagos, recargas, movimientos bancarios, giros y servicios digitales.",
    intro: "Con el servicio Puntored te ofrecemos:",
    message: "Hola, quiero consultar un servicio Puntored.",
    items: [
      "Recargas a celular.",
      "Pago de servicios públicos y privados en más de 15.000 convenios.",
      "Retiros y depósitos bancarios: Davivienda, Colpatria, Grupo Aval.",
      "Depósitos y retiros en billeteras móviles: Daviplata, Nequi.",
      "Apuestas deportivas.",
      "Recargas a Netflix, DirecTV y cuentas de videojuegos.",
      "Giros por Western Union.",
    ],
  },
];

const products = [
  {
    id: "botones-publicitarios",
    title: "Botones publicitarios",
    className: "buttons",
    image: "img/BotonPublicitario.webp",
    imageAlt: "Botones publicitarios personalizados",
    message: "Hola, quiero consultar botones publicitarios.",
    text: "Botones personalizados para publicidad, eventos y promoción de marca.",
  },
  {
    id: "camisetas-estampadas",
    title: "Camisetas estampadas",
    className: "shirts",
    image: "img/camisetasEstampadas.jpg",
    imageAlt: "Camisetas estampadas personalizadas",
    message: "Hola, quiero consultar camisetas estampadas.",
    text: "Estampados personalizados para camisetas, diseños promocionales y detalles especiales.",
  },
  {
    id: "mugs-personalizados",
    title: "Mugs personalizados",
    className: "mugs",
    image: "img/mugs-personalizado.jpg",
    imageAlt: "Mugs personalizados",
    message: "Hola, quiero consultar mugs personalizados.",
    text: "Personalización de vasos de café y mugs para regalos, marca o eventos.",
  },
];

const branch = {
  name: "Copyservices",
  category: "Papelería, trámites y servicios digitales",
  address: "Conjunto Residencial Alto Piamonte, Alto, Cali, Valle del Cauca",
  phone: contact.phone,
  email: contact.email,
  schedule: "Abierto - Cierra 8 PM",
  image: "img/StreadView.jpg",
  mapUrl: map.url,
  mapEmbedUrl: map.embedUrl,
};

const footerServices = [
  { label: "Papelería y oficina", href: "#papeleria-oficina" },
  { label: "Trámites", href: "#tramites" },
  { label: "Puntored", href: "#puntored" },
];

const footerProducts = [
  { label: "Botones publicitarios", href: "#botones-publicitarios" },
  { label: "Camisetas estampadas", href: "#camisetas-estampadas" },
  { label: "Mugs personalizados", href: "#mugs-personalizados" },
];

function whatsapp(message) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}

module.exports = {
  brand,
  branch,
  contact,
  footerProducts,
  footerServices,
  hero,
  map,
  navItems,
  products,
  serviceGroups,
  whatsapp,
  whatsappBase,
  whatsappNumber,
};
