import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {
    private heroes: Heroe[] = [
        {
          nombre: "IT (ESO) El Payaso",
          bio: "It (titulada: It (Eso) en Hispanoamérica) es una película de 2017 producida por New Line Cinema, KatzSmith Productions, Lin Pictures y Vertigo Entertainment, y distribuida por Warner Bros. Pictures.8​ Es la segunda adaptación de la novela homónima de Stephen King y está destinada a ser la primera entrega de una duología planificada. La novela fue adaptada previamente en una miniserie de 1990.9​ La película cuenta la historia de siete niños en Derry, Maine, que son aterrorizados por un ser epónimo, solo para hacer frente a sus propios demonios personales en el proceso",
          img: "assets/img/itelpayaso.png",
          aparicion: "1988",
          casa:"KING"
        },
        {
          nombre: "Killer Klowns from Outer Space",
          bio: "Killer Klowns from Outer Space es una película de 1988 dirigida por Stephen Chiodo. Fue protagonizada por Grant Cramer, Suzanne Snyder, John Allen Nelson y Royal Dano. La trama gira en torno a un grupo de extraterrestres con apariencia de payasos que llegan al planeta Tierra para capturar y asesinar personas.",
          img: "assets/img/evil-clown.png",
          aparicion: "1988",
          casa:"KILLER"
        },
        {
          nombre: "James McAvoy / Jaeden Lieberher (Bill Denbrough)",
          bio: "El valiente líder del Club de los Perdedores regresa como un novelista muy similar a Stephen King. El actor de Fragmentado tomará la posta de Jaeden Lieberher, quien lo interpretó en la primera entrega.",
          img: "assets/img/JamesMcAvoy.jpg",
          aparicion: "2019",
          casa: "KING"
        },
        {
          nombre: "Jessica Chastain / Sophia Lillis (Beverly Marsh)",
          bio: "La actriz ya había trabajado con el realizador argentino Andy Muschietti en la película Mama. Chastain protagonizó el primer tráiler con el personaje que Sophia Lillis popularizó en la primera parte.",
          img: "assets/img/JessicaChastain.jpg",
          aparicion: "2019",
          casa:"KING"
        },
        {
          nombre: "James Ransone Jack Dylan Grazer / (Eddie Kaspbrak)",
          bio: "Miembro del elenco en 'The Wire', Ransone ya cuenta con experiencia en el género de terror. Jack Dylan Grazer fue el primero en darle vida a Eddie, el hipocondriáco niño del primer capítulo de 'Eso'.",
          img: "assets/img/JamesRansone.jpg",
          aparicion: "2019",
          casa: "KING"
        },
        {
          nombre: "Andy Bean / Wyatt Oleff (Stan Uris)",
          bio: "Uno de los personajes más afectados por el encuentro frente a Pennywise fue Stan Uris. Consumido por sus miedos, Andy Bean interpretará a una versión adulta de Wyatt Oleff dentro del grupo de perdedores.",
          img: "assets/img/AndyBean.png",
          aparicion: "2019",
          casa: "KING"
        },
        {
          nombre: "Bill Hader / Finn Wolfhard (Richie Tozier)",
          bio: "Finn Wolfhard y Bill Harder, ambos populares actores de Hollywood compartirán el rol de Richie Tozier en la segunda parte. El personaje se convierte en un conocido DJ en Beverly Hills luego de derrotar al payaso junto a sus amigos.",
          img: "assets/img/BillHader.jpg",
          aparicion: "2019",
          casa: "KING"
        },
        {
          nombre: "Jay Ryan / Jeremy Ray Taylor (Ben Hanscom)",
          bio: "Un gran cambio. Caracterizado por su voluminosa apariencia, Ben Hanscom será interpretado por el fornido Jay Ryan, quien toma el lugar de Jeremy Ray Taylor en la primera película. Este personaje forma una relación con Beverly luego del primer ataque.",
          img: "assets/img/JayRyan.jpg",
          aparicion: "2019",
          casa: "KING"
        },
        {
          nombre: "Isaiah Mustafa / Mike Hanlon (Mike Hanlon)",
          bio: "Mejor conocido como el ex portavoz de Old Spice, consiguió el papel de la versión adulta de Mike Hanlon. Curiosamente, su personaje es el único miembro del Club de Perdedores que se queda en Derry, el pueblo donde vive Pennywise.",
          img: "assets/img/IsaiahMustafa.png",
          aparicion: "2019",
          casa: "KING"
        },
        {
          nombre: "Teach Grant / Nicholas Hamilton (Henry Bowers)",
          bio: "Teach Grant no es tan conocido en el mundo de Hollywood y ha aparecido en papeles menores durante su carrera, pero tiene buenas habilidades de actuación según la crítica. En la piel del matón Henry Bowers, interpretado en un inicio por Nicholas Hamilton, tendrá como misión acabar con los protagonistas de una vez por todas.",
          img: "assets/img/TeachGrant.png",
          aparicion: "2019",
          casa: "KING"
        },
        {
          nombre: "IT Segunda Parte",
          bio: "La película contará con los actores James McAvoy, Jessica Chastain, Jay Ryan, Bill Hader, Isaiah Mustafa, James Ransone y Andy Bean en las versiones adultas de los protagonistas. Bill Skarsgård repite su papel de Pennywise, el payaso, junto con gran parte del elenco infantil del primer capítulo, incluidos Jaeden Lieberher, Sophia Lillis, Jeremy Ray Taylor, Finn Wolfhard, Chosen Jacobs, Jack Dylan Grazer, Wyatt Oleff y Jackson Robert Scott.",
          img: "assets/img/ITSegundaParte.gif",
          aparicion: "2019",
          casa: "KING"
        },
        {
          nombre: "Joker Cesar Romero",
          bio: "La película contará con los actores James McAvoy, Jessica Chastain, Jay Ryan, Bill Hader, Isaiah Mustafa, James Ransone y Andy Bean en las versiones adultas de los protagonistas. Bill Skarsgård repite su papel de Pennywise, el payaso, junto con gran parte del elenco infantil del primer capítulo, incluidos Jaeden Lieberher, Sophia Lillis, Jeremy Ray Taylor, Finn Wolfhard, Chosen Jacobs, Jack Dylan Grazer, Wyatt Oleff y Jackson Robert Scott.",
          img: "assets/img/cesarromero.jpg",
          aparicion: "1960",
          casa: "JOKER"
        },
        {
          nombre: "Joker Jack Nicholson",
          bio: "En la película de Batman (1989)  Joker fue el alias elegido por el criminal Jack Napier, al cual un accidente provocó que su rostro y su locura fueran alterados al caer en unos productos químicos. Convirtiéndose en el más grande enemigo de Batman, y los dos compartían un pasado que los hizo enemigos desde hace muchísimo tiempo atrás.",
          img: "assets/img/JackNicholson.jpg",
          aparicion: "1988",
          casa: "JOKER"
        },
        {
          nombre: "Joker Heath Ledger",
          bio: "Este Joker como en los comics, no tiene un origen único. A lo largo de la cinta el personaje narra episodios de su vida, pero cada que cuenta una nueva historia se contradice con la anterior, lo que crea una duda en el espectador de que si lo que está diciendo es verdad. Su plan es introducir una anarquía en ciudad Gótica para desestabilizar sus órdenes sociales.",
          img: "assets/img/HeathLedger.jpg",
          aparicion: "2008",
          casa: "JOKER"
        },
        {
          nombre: "Joker Joaquin Phoenix",
          bio: "Uno podría pensar que la vida de un actor está llena de glamour y sólo consiste en aprenderse e interpretar los textos, pero hay papeles que son un verdadero reto, ejemplo de ello es el sacrificio que hizo Joaquin Phoenix para interpretar al Joker. En el trailer más reciente puede verse la caracterización del actor como un comediante fracasado que poco a poco va transformándose en el psicópata criminal conocido como el ‘Joker’.",
          img: "assets/img/juaquinphoenix.gif",
          aparicion: "2019",
          casa: "JOKER"
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

