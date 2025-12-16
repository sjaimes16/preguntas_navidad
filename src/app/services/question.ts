import { Injectable } from '@angular/core';

export interface Question {
  question: string;
  options: string[];
  answer: number; // Índice de la respuesta correcta (0, 1, 2, 3)
}

@Injectable({
  providedIn: 'root',
})
export class Question {
  
  // GRUPO 1: Geografía e Historia
  private group1: any[] = [
    { question: '¿Cuál es el océano más grande?', options: ['Atlántico', 'Pacífico', 'Índico', 'Ártico'], answer: 1 },
    { question: '¿En qué continente se encuentra Egipto?', options: ['África', 'Asia', 'Europa', 'América'], answer: 0 },
    { question: '¿Qué famoso edificio se encuentra en París?', options: ['Torre Eiffel', 'Coliseo', 'Pirámide de Giza', 'Big Ben'], answer: 0 },
    { question: '¿Qué día celebramos la Navidad?', options: ['25 de diciembre', '1 de enero', '5 de enero', '14 de febrero'], answer: 0 },
    { question: '¿Qué color es tradicionalmente asociado con Santa Claus?', options: ['Rojo', 'Azul', 'Verde', 'Blanco'], answer: 0 },
    { question: '¿En qué país se originó el Papá Noel tal como lo conocemos hoy?', options: ['Francia', 'Estados Unidos', 'Italia', 'Rusia'], answer: 1 },
    { question: '¿Cuál es el animal que tradicionalmente acompaña a Santa Claus en la víspera de Navidad?', options: ['Reno', 'Perro', 'Gato', 'Oso'], answer: 0 },
    { question: '¿Cómo se llama el reno líder de Santa Claus?', options: ['Rodolfo', 'Cometa', 'Dancer', 'Vixen'], answer: 0 },
    { question: '¿De qué país es originario el árbol de Navidad?', options: ['Alemania', 'Estados Unidos', 'Italia', 'Francia'], answer: 0 },
    { question: '¿Qué figura histórica inspiró originalmente a Santa Claus según la tradición europea?', "options": ["San Nicolás de Bari", "San Benito", "San Patricio", "Carlomagno"], answer: 0 },

    { question: '¿Cuál es la moneda oficial de Japón?', options: ['Yen', 'Dólar', 'Euro', 'Won'], answer: 0 },
    { question: '¿Qué día se celebra el Día de Acción de Gracias en Estados Unidos?', options: ['El tercer jueves de noviembre', 'El primer lunes de octubre', 'El 1 de enero', 'El 25 de diciembre'], answer: 0 },
    { question: '¿Cuál es el país más grande del mundo en superficie?', options: ['Canadá', 'Estados Unidos', 'Rusia', 'China'], answer: 2 },
    { question: '¿En qué país se originó la tradición del “Calendario de Adviento”?', options: ['Alemania', 'Francia', 'Italia', 'España'], answer: 0 },
    { question: '¿Qué tipo de árbol es tradicionalmente usado como árbol de Navidad?', options: ['Pino', 'Abeto', 'Ciprés', 'Sauce'], answer: 1 },
    { question: '¿En qué año se estrenó la primera película de “Harry Potter”?', options: ['1997', '2001', '2004', '2007'], answer: 1 },
    { question: '¿Qué día de diciembre se celebra el Día de la Virgen de Guadalupe?', options: ['12 de diciembre', '6 de diciembre', '24 de diciembre', '8 de diciembre'], answer: 0 },
    { question: '¿Qué autor escribió "Un Cuento de Navidad"?', options: ['Mark Twain', 'Charles Dickens', 'Leo Tolstoy', 'Jane Austen'], answer: 1 },
    { question: '¿Quién inventó el teléfono?', options: ['Thomas Edison', 'Nikola Tesla', 'Alexander Graham Bell', 'Albert Einstein'], answer: 2 },
    { question: '¿Cuál es la capital de Canadá?', options: ['Ottawa', 'Toronto', 'Montreal', 'Vancouver'], answer: 0 },

    { question: '¿Cómo se llama el reno de Santa Claus con la nariz roja?', options: ['Rodolfo', 'Blitzen', 'Dancer', 'Vixen'], answer: 0 },
    { question: '¿Qué año se fundó la ciudad de Roma según la leyenda?', options: ['753 a.C.', '500 a.C.', '1000 a.C.', '400 a.C.'], answer: 0 },
    { question: '¿Qué representan las novenas de Navidad?', options: ['Nueve días de oración antes de Navidad', 'Fiestas y juegos navideños', 'Procesiones solo el 24 de diciembre', 'Celebraciones sin significado religioso'], answer: 0 },
    { question: '¿Cuál es el segundo planeta más cercano al sol?', options: ['Venus', 'Marte', 'Mercurio', 'Júpiter'], answer: 0 },
    { question: '¿Quién fue el primer emperador de China?', options: ['Qin Shi Huang', 'Sun Tzu', 'Confucio', 'Zhang Qian'], answer: 0 },
    { question: '¿Qué pintura famosa fue robada en 1994 del Museo de Arte de Oslo?', options: ['La Gioconda', 'El Grito', 'La Noche Estrellada', 'El Nacimiento de Venus'], answer: 1 },
    { question: '¿Qué día se celebra el Solsticio de Invierno?', options: ['21 de diciembre', '1 de diciembre', '25 de diciembre', '31 de diciembre'], answer: 0 },
    { question: '¿En qué año fue la primera vez que se celebró la Navidad como fiesta oficial en los Estados Unidos?', options: ['1820', '1776', '1850', '1890'], answer: 0 },
    { question: '¿Cuál es el río más largo del mundo?', options: ['Nilo', 'Amazonas', 'Misisipi', 'Yangtsé'], answer: 1 },
    { question: '¿Qué guerra terminó el 11 de noviembre de 1918?', options: ['Primera Guerra Mundial', 'Guerra de Secesión', 'Guerra Franco-Prusiana', 'Segunda Guerra Mundial'], answer: 0 }
];


  // GRUPO 2: Ciencia y Naturaleza
  private group2: any[] = [
    // Preguntas Fáciles
    { question: '¿Cuál es la capital de España?', options: ['Madrid', 'Barcelona', 'Sevilla', 'Valencia'], answer: 0 },
    { question: '¿Qué día de diciembre se celebra el Día de San Esteban?', options: ['26 de diciembre', '24 de diciembre', '31 de diciembre', '10 de diciembre'], answer: 0 },
    { question: '¿Cuál es el significado tradicional de la corona de Adviento que se utiliza durante la Navidad?', options: ['Representa los regalos que traerá Papá Noel', 'Simboliza la eternidad y la esperanza', 'Indica los días de vacaciones escolares', 'Representa a los Reyes Magos'], answer: 1 },
    { question: '¿Por qué muchas celebraciones navideñas incluyen el uso de luces y velas?', options: ['Para decorar únicamente los árboles', 'Porque representan la llegada del verano', 'Porque simbolizan la luz y la esperanza en tiempos de oscuridad', 'Para ahuyentar los malos espíritus'], answer: 2 },
    { question: '¿Cuántos continentes existen en el mundo?', options: ['5', '6', '7', '8'], answer: 2 },
    { question: '¿De qué color es el "Grinch"?', options: ['Rojo', 'Verde', 'Azul', 'Amarillo'], answer: 1 },
    { question: '¿En qué continente se encuentra Australia?', options: ['Asia', 'Oceanía', 'Europa', 'América'], answer: 1 },
    { question: '¿Cuántos días tiene un año bisiesto?', options: ['365', '366', '364', '360'], answer: 1 },
    { question: '¿Cuál de los siguientes elementos suele colocarse en la parte superior del árbol de Navidad y tradicionalmente simboliza la guía y la protección?', options: ['Un juguete', 'Una campana', 'Una vela', 'Una estrella'], answer: 3 },
    { question: '¿Qué país es conocido como "La tierra del sol naciente"?', options: ['Japón', 'China', 'Corea', 'Tailandia'], answer: 0 },

    // Preguntas de Dificultad Media
    { question: '¿Quién fue el primer hombre en pisar la Luna?', options: ['Buzz Aldrin', 'Yuri Gagarin', 'Neil Armstrong', 'Michael Collins'], answer: 2 },
    { question: '¿En qué año se hundió el Titanic?', options: ['1912', '1901', '1920', '1898'], answer: 0 },
    { question: '¿Qué significa "Wi-Fi"?', options: ['Wireless Fidelity', 'Wireless Frequency', 'World Fidelity', 'Wireless Fiber'], answer: 0 },
    { question: '¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?', options: ['1776', '1791', '1800', '1789'], answer: 0 },
    { question: '¿Qué país inventó el origami?', options: ['China', 'Japón', 'Corea', 'India'], answer: 1 },
    { question: '¿De qué color es la capa del Rey Melchor, uno de los Reyes Magos?', options: ['Roja', 'Verde', 'Azul', 'Amarillo'], answer: 1 },
    { question: '¿Qué continente tiene el mayor número de países?', options: ['África', 'Asia', 'América', 'Europa'], answer: 0 },
    { question: '¿Qué es la Navidad para los cristianos?', options: ['El nacimiento de Jesús', 'La crucifixión de Jesús', 'El fin del mundo', 'La resurrección de Jesús'], answer: 0 },
    { question: '¿Qué significa la palabra "Navidad"?', options: ['Nacimiento', 'Fiesta', 'Amor', 'Paz'], answer: 0 },
    { question: '¿Cuál es la fecha exacta de la llegada de los Reyes Magos? ', options: ['6 de enero', '25 de diciembre', '1 de enero', '8 de diciembre'], answer: 0 },

    // Preguntas Difíciles
    { question: '¿En qué ciudad se encuentra la famosa "Sagrada Familia"?', options: ['Madrid', 'Barcelona', 'Sevilla', 'Valencia'], answer: 1 },
    { question: '¿Quién pintó "La última cena"?', options: ['Vincent Van Gogh', 'Pablo Picasso', 'Leonardo da Vinci', 'Miguel Ángel'], answer: 2 },
    { question: '¿En qué país se encuentra la pirámide de Chichen Itzá?', options: ['México', 'Egipto', 'Perú', 'India'], answer: 0 },
    { question: '¿En qué país se originó la tradición de las tarjetas de Navidad?', options: ['Inglaterra', 'Estados Unidos', 'Francia', 'España'], answer: 0 },
    { question: '¿Cuántos huesos tiene el cuerpo humano adulto?', options: ['206', '210', '200', '195'], answer: 0 },
    { question: '¿Qué inventó Nikola Tesla?', options: ['Teléfono', 'Bombilla', 'Corriente alterna', 'Avión'], answer: 2 },
    { question: '¿Quién fue el último faraón de Egipto?', options: ['Cleopatra', 'Nefertiti', 'Tutankamón', 'Ramsés II'], answer: 0 },
    { question: '¿Cuál es el metal más caro del mundo?', options: ['Oro', 'Plata', 'Plutonio', 'Rodio'], answer: 3 },
    { question: '¿Cuál es el idioma más hablado del mundo? ', options: ['Inglés', 'Mandarín', 'Español', 'Francés'], answer: 1 },
    { question: '¿Qué famoso escritor británico escribió "1984" y "Rebelión en la granja"?', options: ['George Orwell', 'J.K. Rowling', 'William Shakespeare', 'Charles Dickens'], answer: 0 },    
];


  // GRUPO 3: Arte, Entretenimiento y Deportes
  private group3: any[] = [
    // Preguntas Fáciles
    { question: '¿Cuál es el continente más pequeño?', options: ['Asia', 'Europa', 'Oceanía', 'Antártida'], answer: 2 },
    { question: '¿Cuál es la capital de Italia?', options: ['Roma', 'Milán', 'Venecia', 'Florencia'], answer: 0 },
    { question: '¿Qué famoso personaje dice "¡Oh, cielos!"?', options: ['Mickey Mouse', 'Donald Duck', 'Goofy', 'Homer Simpson'], answer: 3 },
    { question: '¿Qué día del mes de diciembre se celebra la Nochebuena?', options: ['24 de diciembre', '25 de diciembre', '31 de diciembre', '1 de diciembre'], answer: 0 },
    { question: '¿Quién fue el primer presidente de los Estados Unidos?', options: ['Abraham Lincoln', 'George Washington', 'Thomas Jefferson', 'Franklin D. Roosevelt'], answer: 1 },
    { question: '¿Qué nombre se le da a la víspera de Navidad en inglés?', options: ['Christmas Eve', 'Boxing Day', 'New Year’s Eve', 'Saint Nicholas Day'], answer: 0 },
    { question: '¿En qué país nació el Papa Francisco?', options: ['Argentina', 'Italia', 'España', 'México'], answer: 0 },
    { question: '¿Qué comida típica se come en Estados Unidos durante el Día de Acción de Gracias?', options: ['Pavo', 'Pollo', 'Bistec', 'Pescado'], answer: 0 },
    { question: 'En la serie Merlina (Wednesday) de Netflix, ¿cuál de los siguientes elementos de La Familia Addams es más evidente como referencia en la personalidad de Merlina?', options: ['Su amor por lo macabro y lo siniestro, como su padre Gómez.', 'La actitud fría y distante que recuerda a la matriarca Morticia.', 'La relación cercana y algo excéntrica con su hermano Pugsley.', 'Su capacidad para ver lo positivo en lo oscuro, como el tío Fétido.'], answer: 1 },
    { question: '¿Qué continente tiene más países?', options: ['Asia', 'Europa', 'África', 'América'], answer: 2 },

    // Preguntas de Dificultad Media
    { question: '¿En qué país se encuentra el famoso Monte Fuji?', options: ['Japón', 'China', 'Corea del Sur', 'Nepal'], answer: 0 },
    { question: '¿Quién pintó la famosa obra "La Mona Lisa"?', options: ['Vincent Van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'], answer: 1 },
    { question: '¿Cuál fue el verdadero propósito inicial de la Gran Muralla China, más allá de defenderse de invasiones?', options: ['Controlar la migración, el comercio y cobrar impuestos.', 'Servir como ruta comercial para la Ruta de la Seda.', 'Marcar fronteras políticas internas del imperio.', 'Funcionar como observatorio astronómico.'], answer: 0 },
    { question: '¿En qué país se originó la pizza?', options: ['Italia', 'España', 'Francia', 'México'], answer: 0 },
    { question: '¿Cuál es el océano más pequeño?', options: ['Atlántico', 'Ártico', 'Índico', 'Pacífico'], answer: 1 },
    { question: '¿Qué famosa marca de automóviles tiene un logo con un "caballito"?', options: ['Ferrari', 'Lamborghini', 'Porsche', 'Maserati'], answer: 0 },
    { question: '¿Quién fue el último emperador romano de Occidente?', options: ['Constantino', 'Rómulo Augústulo', 'Juliano', 'Teodosio'], answer: 1 },
    { question: '¿En qué año se lanzó el primer iPhone?', options: ['2005', '2007', '2010', '2003'], answer: 1 },
    { question: '¿Qué día se celebra la fiesta de Halloween?', options: ['31 de octubre', '1 de noviembre', '24 de diciembre', '15 de noviembre'], answer: 0 },
    { question: '¿En qué ciudad nació Jesús según la tradición cristiana?', options: ['Nazaret', 'Jerusalén', 'Belén', 'Capernaum'], answer: 2 },

    // Preguntas Difíciles
    { question: '¿Qué filósofo griego fundó la escuela del Estoicismo?', options: ['Platón', 'Aristóteles', 'Séneca', 'Zenón de Citio'], answer: 3 },
    { question: '¿Cuál de los siguientes filósofos afirmó que el conocimiento verdadero se alcanza mediante la duda metódica?', options: ['Aristóteles', 'René Descartes', 'John Locke', 'Immanuel Kant'], answer: 1 },
    { question: '¿En qué año comenzó la Primera Guerra Mundial?', options: ['1914', '1912', '1920', '1900'], answer: 0 },
    { question: '¿Cómo se llama el metal en cuyo símbolo químico se encuentra el número atómico 79?', options: ['Oro', 'Plata', 'Cobre', 'Plutonio'], answer: 0 },
    { question: '¿En qué país se originó la tradición de los “villancicos”?', options: ['México', 'España', 'Alemania', 'Italia'], answer: 1 },
    { question: '¿Qué físico formuló la teoría de la relatividad?', options: ['Isaac Newton', 'Albert Einstein', 'Nikola Tesla', 'Max Planck'], answer: 1 },
    { question: '¿En qué país se celebró el primer Mundial de Fútbol?', options: ['Brasil', 'Argentina', 'Italia', 'Uruguay'], answer: 3 },
    { question: '¿Qué evento histórico ocurrió el 9 de noviembre de 1989?', options: ['El fin del apartheid', 'La caída del muro de Berlín', 'La independencia de India', 'La llegada del hombre a la luna'], answer: 1 },
    { question: '¿En qué país se desarrolló el primer automóvil con motor de combustión interna?', options: ['Alemania', 'Francia', 'Estados Unidos', 'Italia'], answer: 0 },
    { question: '¿En qué siglo se estableció oficialmente el 25 de diciembre como la fecha para celebrar el nacimiento de Jesús?', options: ['Siglo II', 'Siglo IV', 'Siglo V', 'Siglo VII'], answer: 1 }

    // Preguntas de Navidad
    
    
    
];


  constructor() { }

  getQuestions(groupId: number): Question[] {
    let selectedQuestions: Question[] = [];

    // Selección del grupo
    // Nota: Aquí convertimos a entero por si viene como string del select
    const id = Number(groupId);

    if (id === 1) selectedQuestions = [...this.group1];
    else if (id === 2) selectedQuestions = [...this.group2];
    else if (id === 3) selectedQuestions = [...this.group3];
    else selectedQuestions = [...this.group1]; // Default

    // Mezclamos las preguntas del grupo seleccionado
    return selectedQuestions.sort(() => 0.5 - Math.random());
  }
}
