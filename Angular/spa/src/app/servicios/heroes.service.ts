import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
    private heroes: Heroe[] = [
        {
          nombre: "Aquaman",
          bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
          img: "assets/img/aquaman.png",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "Batman",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/batman.png",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Daredevil",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          img: "assets/img/daredevil.png",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Hulk",
          bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
          img: "assets/img/hulk.png",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Linterna Verde",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          img: "assets/img/linterna-verde.png",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          img: "assets/img/wolverine.png",
          aparicion: "1974-11-01",
          casa: "Marvel"
        },
        {
          nombre: "IronMan",
          bio: "Iron Man (también conocido en español como el Hombre de Hierro) es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje fue co-creado por el escritor y editor Stan Lee, desarrollado por el guionista Larry Lieber y diseñado por los artistas Don Heck y Jack Kirby. Hizo su primera aparición en Tales of Suspense # 39 (marzo de 1963), y recibió su propio título en Iron Man #1 (mayo de 1968).",
          img: "assets/img/ironman.png",
          aparicion: "1960-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Thor",
          bio: "Thor (Thor Odinson) es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. El personaje, que se basa en la deidad nórdica del mismo nombre, es el dios del trueno asgardiano que posee el martillo encantado, Mjolnir, que le otorga la capacidad de volar y manipular el clima entre sus otros atributos sobrehumanos.",
          img: "assets/img/thor.png",
          aparicion: "1960-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Capitan America",
          bio: "Capitán América cuyo nombre real es Steven  Rogers, es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics. Creado por los historietistas Joe Simon y Jack Kirby, el personaje apareció por primera vez en Captain America Comics #1 (marzo de 1941) de Timely Comics, predecesor de Marvel Comics. El Capitán América fue diseñado como un supersoldado patriota que luchaba frecuentemente contra las potencias del Eje en la Segunda Guerra Mundial, y fue el personaje más popular de Timely Comics durante el período de guerra. La popularidad de los superhéroes se desvaneció después de la guerra, y el cómic del Capitán América dejó de editarse en 1950, con un breve resurgimiento en 1953. Desde que Marvel Comics revivió al personaje en 1964, el Capitán América se ha mantenido en publicación.",
          img: "assets/img/capitanamerica.png",
          aparicion: "1960-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Avenger",
          bio: "Los Vengadores (en inglés Avengers; en francés Les Vengeurs ; Invencibles del siglo XX en antiguas traducciones de México realizadas por Editorial La Prensa)1​2​ son un equipo ficticio de superhéroes que aparecen en cómics estadounidenses publicados por Marvel Comics. El equipo hizo su debut en The Avengers # 1 (septiembre de 1963),3​creado por el escritor y editor[cita requerida] Stan Lee y el artista/copiloto Jack Kirby. Los Vengadores es la renovación de Lee y Kirby de un equipo anterior de superhéroes, Escuadrón Todos los Ganadores, que apareció en la serie de cómics publicada por el predecesor de Marvel Comics, Timely Comics.",
          img: "assets/img/avenger.png",
          aparicion: "1960-01-01",
          casa: "Marvel"
        }

      ];

    constructor() {
        console.log('Servicio listo para ussar!!');
    }

    getHeroes(): Heroe [] {
      return this.heroes;
    }

    getHeroe(idx: string) {
      return this.heroes[idx];
    }

    buscarHeroes( termino: string): Heroe[] {
      let heroeArr: Heroe[] = [];
      termino = termino.toLowerCase();

      for(let i = 0; i < this.heroes.length; i++ ) {

        let heroe = this.heroes[i];

        let nombre = heroe.nombre.toLowerCase();

        if (nombre.indexOf( termino) >= 0 ) {
          heroe.idx = i;
          heroeArr.push( heroe );
        }
      }
      return heroeArr;
    }
}

export interface Heroe{
      nombre: string;
      bio: string;
      img: string;
      aparicion: string;
      casa: string;
      idx?: number;
}

