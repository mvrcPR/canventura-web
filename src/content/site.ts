export const locales = ["ca", "es", "fr", "en"] as const;
export type Locale = (typeof locales)[number];
export const languageNames = {
  ca: "Català",
  es: "Castellano",
  fr: "Français",
  en: "English",
};
export const siteUrl = "https://canventura.com";
export const restaurant = {
  name: "Can Ventura",
  phone: "+34972896178",
  phoneLabel: "972 896 178",
  email: "canventura@hotmail.com",
  address: "Plaça Major, 1 · Llívia, Girona",
  instagram: "https://www.instagram.com/canventurarestaurant/",
  directions:
    "https://www.google.com/maps/search/?api=1&query=Can+Ventura+Pla%C3%A7a+Major+1+Ll%C3%ADvia",
};
export const houseTour = {
  url: "https://www.google.com/maps/@42.4646971,1.9806291,0a,112.6y,94.91h,89.66t/data=!3m4!1e1!3m2!1sCIHM0ogKEICAgICBnKGvFQ!2e10?source=apiv3",
  // Request minimum zoom; Google clamps the initial view in its embedded viewer.
  embedUrl:
    "https://www.google.com/maps/embed?pb=!4v1791143233340!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0JuS0d2RlE.!2m2!1d42.46469705504466!2d1.980629136440221!3f94.91!4f-0.3400000000000034!5f0",
};
export function homePath(locale: Locale) {
  return locale === "ca" ? "/" : `/${locale}/`;
}
export function menuPath(locale: Locale) {
  return `${homePath(locale)}carta/`;
}
export function reservationUrl(locale: Locale) {
  return `https://canventura.myrestoo.net/${locale}/reservar`;
}
export function currentMenuUrl(locale: Locale) {
  return `https://canventura.com/${locale === "ca" ? "" : `${locale}/`}els-nostres-menus/`;
}

// Editorial copy based on the supplied design and the restaurant's current public website.
// Family names/year and contact details: design/assets/content-sources.json.
export const copy = {
  ca: {
    title: "Can Ventura · Restaurant a Llívia",
    description:
      "Cuina de la Cerdanya i una casa a la Plaça Major de Llívia. Descobreix Can Ventura, consulta la carta i reserva taula.",
    skip: "Anar al contingut",
    languages: "Idioma",
    navigation: "Navegació principal",
    navigationToggle: "Menú",
    book: "Reservar",
    home: "Inici",
    house: "La casa",
    kitchen: "La cuina",
    menu: "Carta",
    family: "La família",
    contact: "Contacte",
    reserve: "Reservar taula",
    reservation: "Reserva",
    intro: "Cuina de la Cerdanya. Una casa a Llívia.",
    scroll: "Segueix el fil",
    since: "A taula des de 1977",
    location: "Llívia · La Cerdanya",
    houseTitle: "Fem un tomb?",
    houseInvitation: "Entra, ets a casa.",
    houseText:
      "Una porta a la Plaça Major. A dins, sales amb història i taules per compartir-la.",
    openHouse: "Entrar a la casa",
    houseGallery: "Un tomb per Can Ventura",
    tourLoading: "Entrant a la casa…",
    openTourExternal: "Obrir el recorregut a Google Maps (nova pestanya)",
    close: "Tancar",
    kitchenTitle: "Del territori,\na la taula.",
    kitchenText: "Cuina de la Cerdanya, amb el que ens porta cada temporada.",
    galleryLabel: "Galeria d’imatges",
    previous: "Fotografia anterior",
    next: "Fotografia següent",
    photo: "Fotografia",
    of: "de",
    menuTitle: "Avui,\nquè et ve de gust?",
    menuText:
      "La nostra cuina segueix el ritme de les estacions. Consulta la carta i els menús abans de venir.",
    viewMenu: "Veure la carta",
    menuIntro: "La carta i els menús de Can Ventura.",
    menuSource: "Obrir la carta completa",
    menuUnavailable:
      "Pots consultar la carta completa aquí o trucar-nos si tens qualsevol dubte.",
    menuDocument: "Obrir aquesta pàgina de la carta",
    menuPage: "Pàgina",
    familyTitle: "Una casa.\nUna família.",
    familyText:
      "El 1977, en Josep i la Mercè van obrir Can Ventura amb la il·lusió de tenir una casa de menjars.",
    familySecond:
      "Des del 1994, en Jordi i l’Esther continuen aquella història, amb la família i l’equip que fan possible cada servei.",
    familyFoundersCaption: "Josep i Mercè, els fundadors.",
    familyTeamCaption: "La família i l’equip, al balcó de casa.",
    photoFounders: "Josep Pous i Mercè Rodríguez, fundadors de Can Ventura",
    photoFamily: "La família i l’equip de Can Ventura al balcó del restaurant",
    contactTitle: "Ens veiem\na Llívia.",
    findUs: "On som",
    callUs: "Parlem?",
    hours: "Horaris",
    hoursText:
      "Consulta els serveis disponibles en reservar o truca’ns per confirmar els horaris.",
    directions: "Com arribar-hi",
    instagram: "Segueix-nos a Instagram",
    designCredit: "Imagined by",
    back: "Tornar a la casa",
    notFound: "Aquesta pàgina no és a casa.",
    notFoundText: "Torna a l’inici i segueix el fil.",
    photoChef: "El cuiner de Can Ventura treballant amb una tòfona a la cuina",
    photoFacade: "Façana de Can Ventura a la Plaça Major de Llívia",
    photoRoom: "Una taula preparada a les sales de Can Ventura",
    photoDetails: "Detalls de la casa i de les seves sales",
    photoDish: "Un plat de la cuina de Can Ventura",
    foodPhotos: {
      cannelloni: "Canelons de carn, ceps i foie amb tòfona i salsa de parmesà",
      fillet: "Filet de vaca servit a la llosa calenta amb patates fregides",
      trotters:
        "Peus de porc farcits de botifarra negra amb allioli de codony",
      trinxat: "Trinxat de Cerdanya i rosta de Cal Jaume de Bellver",
      scallops: "Vieires amb arròs Venere i maionesa d’all negre",
      cod: "Bacallà d’autor El Barquero a la llauna",
      rumpsteak: "Rumpsteak de vedella amb rovell d’ou i salsa ponzu",
      donut: "Torrija de donut amb gelat de llet merengada",
      pearVichyssoise: "Vichyssoise de pera amb llagostins",
      strawberrySalmorejo:
        "Salmorejo de maduixa amb burrata de búfala DOP",
      mountainRice: "Arròs de muntanya amb botifarra de Cal Jaume",
      chickenLangoustines: "Pollastre amb escamarlans",
      duckMagret: "Magret d’ànec amb puré de carbassa i ratafia Rufaca",
      duckPears: "Tiró amb peres de Puigcerdà",
      organicBeef:
        "Llata ecològica de Cal Grauet amb castanyes i foie micuit",
      botifarraTrinxat:
        "Botifarra de Cal Jaume amb trinxat de Ceretani del Molí de Ger i maionesa de ceps",
      salmon:
        "Salmó marinat amb crema d’alvocat, pico de gallo i jalapeños",
      wildAsparagus:
        "Espàrrecs de marge amb ou de Cal Carbonell de Llívia a baixa temperatura i tòfona fresca",
    },
    photoGrill: "La cuina de Can Ventura a la brasa",
    photoHands: "Les mans del cuiner preparant un plat",
  },
  es: {
    title: "Can Ventura · Restaurante en Llívia",
    description:
      "Cocina de la Cerdanya y una casa en la Plaça Major de Llívia. Descubre Can Ventura, consulta la carta y reserva mesa.",
    skip: "Ir al contenido",
    languages: "Idioma",
    navigation: "Navegación principal",
    navigationToggle: "Menú",
    book: "Reservar",
    home: "Inicio",
    house: "La casa",
    kitchen: "La cocina",
    menu: "Carta",
    family: "La familia",
    contact: "Contacto",
    reserve: "Reservar mesa",
    reservation: "Reserva",
    intro: "Cocina de la Cerdanya. Una casa en Llívia.",
    scroll: "Sigue el hilo",
    since: "A la mesa desde 1977",
    location: "Llívia · La Cerdanya",
    houseTitle: "¿Damos una vuelta?",
    houseInvitation: "Entra, estás en casa.",
    houseText:
      "Una puerta en la Plaça Major. Dentro, salas con historia y mesas para compartirla.",
    openHouse: "Entrar en la casa",
    houseGallery: "Un paseo por Can Ventura",
    tourLoading: "Entrando en la casa…",
    openTourExternal: "Abrir el recorrido en Google Maps (nueva pestaña)",
    close: "Cerrar",
    kitchenTitle: "Del territorio,\na la mesa.",
    kitchenText: "Cocina de la Cerdanya, con lo que nos trae cada temporada.",
    galleryLabel: "Galería de imágenes",
    previous: "Fotografía anterior",
    next: "Fotografía siguiente",
    photo: "Fotografía",
    of: "de",
    menuTitle: "Hoy,\n¿qué te apetece?",
    menuText:
      "Nuestra cocina sigue el ritmo de las estaciones. Consulta la carta y los menús antes de venir.",
    viewMenu: "Ver la carta",
    menuIntro: "La carta y los menús de Can Ventura.",
    menuSource: "Abrir la carta completa",
    menuUnavailable:
      "Puedes consultar la carta completa aquí o llamarnos si tienes alguna duda.",
    menuDocument: "Abrir esta página de la carta",
    menuPage: "Página",
    familyTitle: "Una casa.\nUna familia.",
    familyText:
      "En 1977, Josep y Mercè abrieron Can Ventura con la ilusión de tener su propia casa de comidas.",
    familySecond:
      "Desde 1994, Jordi y Esther continúan aquella historia, junto a la familia y el equipo que hacen posible cada servicio.",
    familyFoundersCaption: "Josep y Mercè, los fundadores.",
    familyTeamCaption: "La familia y el equipo, en el balcón de casa.",
    photoFounders: "Josep Pous y Mercè Rodríguez, fundadores de Can Ventura",
    photoFamily:
      "La familia y el equipo de Can Ventura en el balcón del restaurante",
    contactTitle: "Nos vemos\nen Llívia.",
    findUs: "Dónde estamos",
    callUs: "¿Hablamos?",
    hours: "Horarios",
    hoursText:
      "Consulta los servicios disponibles al reservar o llámanos para confirmar los horarios.",
    directions: "Cómo llegar",
    instagram: "Síguenos en Instagram",
    designCredit: "Imagined by",
    back: "Volver a la casa",
    notFound: "Esta página no está en casa.",
    notFoundText: "Vuelve al inicio y sigue el hilo.",
    photoChef:
      "El cocinero de Can Ventura trabajando con una trufa en la cocina",
    photoFacade: "Fachada de Can Ventura en la Plaça Major de Llívia",
    photoRoom: "Una mesa preparada en las salas de Can Ventura",
    photoDetails: "Detalles de la casa y sus salas",
    photoDish: "Un plato de la cocina de Can Ventura",
    foodPhotos: {
      cannelloni:
        "Canelones de carne, ceps y foie con trufa y salsa de parmesano",
      fillet: "Filete de vaca servido a la piedra caliente con patatas fritas",
      trotters:
        "Manitas de cerdo rellenas de butifarra negra con alioli de membrillo",
      trinxat: "Trinxat de la Cerdanya con tocino de Cal Jaume de Bellver",
      scallops: "Vieiras con arroz Venere y mayonesa de ajo negro",
      cod: "Bacalao de autor El Barquero a la llauna",
      rumpsteak: "Rumpsteak de ternera con yema de huevo y salsa ponzu",
      donut: "Torrija de donut con helado de leche merengada",
      pearVichyssoise: "Vichyssoise de pera con langostinos",
      strawberrySalmorejo:
        "Salmorejo de fresa con burrata de búfala DOP",
      mountainRice: "Arroz de montaña con butifarra de Cal Jaume",
      chickenLangoustines: "Pollo con cigalas",
      duckMagret: "Magret de pato con puré de calabaza y ratafía Rufaca",
      duckPears: "Pato con peras de Puigcerdà",
      organicBeef:
        "Llata ecológica de Cal Grauet con castañas y foie micuit",
      botifarraTrinxat:
        "Butifarra de Cal Jaume con trinxat de Ceretani del Molí de Ger y mayonesa de ceps",
      salmon:
        "Salmón marinado con crema de aguacate, pico de gallo y jalapeños",
      wildAsparagus:
        "Espárragos silvestres con huevo de Cal Carbonell de Llívia a baja temperatura y trufa fresca",
    },
    photoGrill: "La cocina de Can Ventura a la brasa",
    photoHands: "Las manos del cocinero preparando un plato",
  },
  fr: {
    title: "Can Ventura · Restaurant à Llívia",
    description:
      "La cuisine de la Cerdagne, dans une maison de la Plaça Major à Llívia. Découvrez Can Ventura, consultez la carte et réservez votre table.",
    skip: "Aller au contenu",
    languages: "Langue",
    navigation: "Navigation principale",
    navigationToggle: "Menu",
    book: "Réserver",
    home: "Accueil",
    house: "La maison",
    kitchen: "La cuisine",
    menu: "Carte",
    family: "La famille",
    contact: "Contact",
    reserve: "Réserver une table",
    reservation: "Réserver",
    intro: "La cuisine de la Cerdagne. Une maison à Llívia.",
    scroll: "Suivez le fil",
    since: "À table depuis 1977",
    location: "Llívia · La Cerdagne",
    houseTitle: "On fait un tour ?",
    houseInvitation: "Entrez, vous êtes chez vous.",
    houseText:
      "Une porte sur la Plaça Major. À l’intérieur, des salles chargées d’histoire et des tables pour la partager.",
    openHouse: "Entrer dans la maison",
    houseGallery: "Un tour de Can Ventura",
    tourLoading: "Entrée dans la maison…",
    openTourExternal: "Ouvrir la visite dans Google Maps (nouvel onglet)",
    close: "Fermer",
    kitchenTitle: "Du terroir,\nà la table.",
    kitchenText: "Une cuisine de Cerdagne, au fil des saisons.",
    galleryLabel: "Galerie de photos",
    previous: "Photo précédente",
    next: "Photo suivante",
    photo: "Photo",
    of: "sur",
    menuTitle: "Aujourd’hui,\nqu’est-ce qui vous tente ?",
    menuText:
      "Notre cuisine suit le rythme des saisons. Consultez la carte et les menus avant votre visite.",
    viewMenu: "Voir la carte",
    menuIntro: "La carte et les menus de Can Ventura.",
    menuSource: "Ouvrir la carte complète",
    menuUnavailable:
      "Consultez la carte complète ici ou appelez-nous si vous avez une question.",
    menuDocument: "Ouvrir cette page de la carte",
    menuPage: "Page",
    familyTitle: "Une maison.\nUne famille.",
    familyText:
      "En 1977, Josep et Mercè ont ouvert Can Ventura avec le rêve de tenir leur propre restaurant.",
    familySecond:
      "Depuis 1994, Jordi et Esther poursuivent cette histoire, avec la famille et l’équipe qui rendent chaque service possible.",
    familyFoundersCaption: "Josep et Mercè, les fondateurs.",
    familyTeamCaption: "La famille et l’équipe, au balcon de Can Ventura.",
    photoFounders: "Josep Pous et Mercè Rodríguez, fondateurs de Can Ventura",
    photoFamily: "La famille et l’équipe de Can Ventura au balcon du restaurant",
    contactTitle: "À bientôt\nà Llívia.",
    findUs: "Nous trouver",
    callUs: "On en parle ?",
    hours: "Horaires",
    hoursText:
      "Consultez les services disponibles lors de la réservation ou appelez-nous pour confirmer les horaires.",
    directions: "Comment venir",
    instagram: "Suivez-nous sur Instagram",
    designCredit: "Imagined by",
    back: "Retour à la maison",
    notFound: "Cette page n’est pas à la maison.",
    notFoundText: "Revenez à l’accueil et suivez le fil.",
    photoChef: "Le cuisinier de Can Ventura travaillant une truffe en cuisine",
    photoFacade: "Façade de Can Ventura sur la Plaça Major à Llívia",
    photoRoom: "Une table dressée dans les salles de Can Ventura",
    photoDetails: "Détails de la maison et de ses salles",
    photoDish: "Un plat de la cuisine de Can Ventura",
    foodPhotos: {
      cannelloni:
        "Cannellonis de viande, cèpes et foie gras, truffe et sauce au parmesan",
      fillet: "Filet de bœuf servi sur pierre chaude avec des frites",
      trotters:
        "Pieds de porc farcis au boudin noir, aïoli au coing",
      trinxat:
        "Trinxat de Cerdagne et lard croustillant de Cal Jaume de Bellver",
      scallops: "Saint-Jacques, riz Venere et mayonnaise à l’ail noir",
      cod: "Morue de signature El Barquero à la llauna",
      rumpsteak: "Rumsteck de bœuf, jaune d’œuf et sauce ponzu",
      donut: "Torrija de donut et glace au lait meringué",
      pearVichyssoise: "Vichyssoise de poire aux crevettes",
      strawberrySalmorejo:
        "Salmorejo de fraise et burrata au lait de bufflonne AOP",
      mountainRice: "Riz de montagne à la botifarra de Cal Jaume",
      chickenLangoustines: "Poulet aux langoustines",
      duckMagret: "Magret de canard, purée de courge et ratafia Rufaca",
      duckPears: "Canard aux poires de Puigcerdà",
      organicBeef:
        "Paleron de bœuf bio de Cal Grauet, châtaignes et foie gras mi-cuit",
      botifarraTrinxat:
        "Botifarra de Cal Jaume, trinxat de Ceretani du Molí de Ger et mayonnaise aux cèpes",
      salmon:
        "Saumon mariné, crème d’avocat, pico de gallo et jalapeños",
      wildAsparagus:
        "Asperges sauvages, œuf de Cal Carbonell de Llívia cuit à basse température et truffe fraîche",
    },
    photoGrill: "La cuisine de Can Ventura au gril",
    photoHands: "Les mains du cuisinier préparant un plat",
  },
  en: {
    title: "Can Ventura · Restaurant in Llívia",
    description:
      "Cerdanya cooking in a house on Plaça Major, Llívia. Discover Can Ventura, explore the menu and book a table.",
    skip: "Skip to content",
    languages: "Language",
    navigation: "Main navigation",
    navigationToggle: "Menu",
    book: "Book",
    home: "Home",
    house: "The house",
    kitchen: "The kitchen",
    menu: "Menu",
    family: "The family",
    contact: "Contact",
    reserve: "Book a table",
    reservation: "Book",
    intro: "Cerdanya cooking. A house in Llívia.",
    scroll: "Follow the thread",
    since: "Around the table since 1977",
    location: "Llívia · Cerdanya",
    houseTitle: "Shall we have a look?",
    houseInvitation: "Come in, you're at home.",
    houseText:
      "A door on Plaça Major. Inside, rooms with a history and tables to share it around.",
    openHouse: "Step inside",
    houseGallery: "A look around Can Ventura",
    tourLoading: "Stepping inside…",
    openTourExternal: "Open the tour in Google Maps (new tab)",
    close: "Close",
    kitchenTitle: "From the land,\nto the table.",
    kitchenText: "Cuisine from Cerdanya, with what each season brings.",
    galleryLabel: "Photo gallery",
    previous: "Previous photo",
    next: "Next photo",
    photo: "Photo",
    of: "of",
    menuTitle: "What takes\nyour fancy today?",
    menuText:
      "Our cooking follows the seasons. Explore the menus before you visit.",
    viewMenu: "Explore the menu",
    menuIntro: "The menus at Can Ventura.",
    menuSource: "Open the full menu",
    menuUnavailable:
      "Explore the full menu here, or give us a call if you have any questions.",
    menuDocument: "Open this menu page",
    menuPage: "Page",
    familyTitle: "One house.\nOne family.",
    familyText:
      "In 1977, Josep and Mercè opened Can Ventura with the dream of running a restaurant of their own.",
    familySecond:
      "Since 1994, Jordi and Esther have carried that story forward, alongside the family and team who make every service possible.",
    familyFoundersCaption: "Josep and Mercè, the founders.",
    familyTeamCaption: "The family and team, on the restaurant balcony.",
    photoFounders: "Josep Pous and Mercè Rodríguez, founders of Can Ventura",
    photoFamily: "The Can Ventura family and team on the restaurant balcony",
    contactTitle: "See you\nin Llívia.",
    findUs: "Find us",
    callUs: "Let’s talk",
    hours: "Opening hours",
    hoursText:
      "Check the available services when booking, or call us to confirm opening hours.",
    directions: "Get directions",
    instagram: "Follow us on Instagram",
    designCredit: "Imagined by",
    back: "Back to the house",
    notFound: "This page isn’t at home.",
    notFoundText: "Head back to the homepage and follow the thread.",
    photoChef: "The Can Ventura chef working with a truffle in the kitchen",
    photoFacade: "The façade of Can Ventura on Plaça Major, Llívia",
    photoRoom: "A table set in the dining rooms at Can Ventura",
    photoDetails: "Details of the house and its rooms",
    photoDish: "A dish from the Can Ventura kitchen",
    foodPhotos: {
      cannelloni:
        "Meat, porcini and foie gras cannelloni with truffle and Parmesan sauce",
      fillet: "Beef fillet served on a hot stone with chips",
      trotters:
        "Pig’s trotters stuffed with black pudding and quince aioli",
      trinxat: "Cerdanya trinxat with crispy pork from Cal Jaume de Bellver",
      scallops: "Scallops with Venere rice and black garlic mayonnaise",
      cod: "El Barquero signature cod a la llauna",
      rumpsteak: "Rump steak with egg yolk and ponzu sauce",
      donut: "Donut torrija with leche merengada ice cream",
      pearVichyssoise: "Pear vichyssoise with prawns",
      strawberrySalmorejo:
        "Strawberry salmorejo with PDO buffalo burrata",
      mountainRice: "Mountain-style rice with Cal Jaume botifarra",
      chickenLangoustines: "Chicken with langoustines",
      duckMagret: "Duck magret with pumpkin purée and Rufaca ratafia",
      duckPears: "Duck with Puigcerdà pears",
      organicBeef:
        "Organic beef shoulder from Cal Grauet with chestnuts and mi-cuit foie gras",
      botifarraTrinxat:
        "Cal Jaume botifarra with Ceretani trinxat from Molí de Ger and porcini mayonnaise",
      salmon:
        "Marinated salmon with avocado cream, pico de gallo and jalapeños",
      wildAsparagus:
        "Wild asparagus with a slow-cooked egg from Cal Carbonell in Llívia and fresh truffle",
    },
    photoGrill: "Cooking over the grill at Can Ventura",
    photoHands: "The chef’s hands preparing a dish",
  },
} satisfies Record<Locale, Record<string, string>>;
