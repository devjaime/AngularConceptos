## Conceptos generales de Angular para repasar

#### Instalaciones necesarias
- node v10 LTS en adelante https://nodejs.org/es/.
- revisar versión de node y npm en caso de ya tener instalado node, npm -v y node -v.
- instalar Typescript  (npm install -g typescript)  (-g como administador).
- Revisar versiones anteriores instaladas de typescript (tsc -version) la version debe ser sobre las 2.8.3 si es la versión 1.0.0 se debe desintalar he instalar versiones superiores.
- Instalación de Angular CLI (npm install -g @angular/cli) (siempre en ventana como administrador).
- Solucion de errores en Mac (sudo npm install --unsafe -perm -g @angular/cli).
- para confirmar instalación angular CLI comando (ng -v) versión sobre la 6.0. 
- para instalar ionic (npm install -g ionic)

#### Instalaciones de visual studio code snipper
- link de descarga https://code.visualstudio.com/

* Snipper
* Angular 2 TypeScript Emmet VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=jakethashi.vscode-angular2-emmet
* Angular 8 Snippets VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=Mikael.Angular-BeastCode
* Angular Language Service VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=Angular.ng-template
* Angular v5 Snippets VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=pavellev.Angular2
* angular2-inline VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=natewallace.angular2-inline
* Auto Close Tag VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag
* Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=thekalinga.bootstrap4-vscode
* Bracket Pair Colorizer 2 VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2
* Debugger for Chrome VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome  
* ESLint VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
* HTML CSS Support VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css
* JavaScript (ES6) code snippets VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippets
* JS-CSS-HTML Formatter VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=lonefy.vscode-JS-CSS-HTML-formatter
* jshint VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=dbaeumer.jshint
* Material Icon Theme VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme
* Monokai Night Theme VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-monokai-night
* npm VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script
* npm Intellisense VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense
* Paste JSON as Code VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype
* Path Intellisense VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense
* Prettier - Code formatter VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
* Search node_modules VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=jasonnutter.search-node-modules
* Terminal VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=formulahendry.terminal
* TSLint VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin
* TypeScript Hero VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=rbbit.typescript-hero
* TypeScript Importer VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter

#### TypeScript ES6
* variable let y const.
* tipos de datos en Typescript.
* Template litares en ES6.
* Funciones: Parametros opcionales, obligatorios y por defecto.
* Funciones de flecha.
* Destructuración de arreglos y objetos.
* Promesas en ES6.
* Interfaces en Typescript.
* Clases POO.
* Definición de una clase base en Typescript.
* Constructores de una clase en TypeScript.
* Módulos en Typescript.
* Decoradores en TypeScript.

#### Angular
- Creación de nuevos proyectos ng new {nombre proyecto}
- Ejecutar aplicación Angular ng serve -o --port 4444 {o es de open para abrir el browser y port en caso que el puerto este ocupado}
- Interpolacion de variables {{}}
#### carpetas de angular
- e2e carpeta para pruebas End To End pruebas de extremo a extremo.
- node_modules - paquetes npm que se instalan en forma automática con el fin de desarrollo. 
- src - es donde se almacenan los archivos para crear nuestra aplicación en Angular.
- .editorconfig - son configuraciones del editor (vs code).
- .gitignore - ignora las carpetas que no se deben versionar.
- package-lock.json es un historial de como se crea el package.json
- package.json es un archivo que registra las dependencias npm
- README.md: es para documentar la aplicación.
- tsconfig.json configuración de typescript
- tslink.json reglas para tslink
- index.html es una pagina web común, renderiza el <app-root>
- componente app.component.html codigo html
- componente app.component.spect pruebas automaticas
- componente app.component.ts archivo typescript
- componente app-modules.ts
- Carpeta assets donde se almacenan los recursos
- carpeta environment archivos de desarrollo y producción
- browserlist para compatibilidad de css
- karma archivo de configuracion de pruebas de cargas
- main.ts es la primera pagina que carga Angular 
- polyfills.ts ayuda con la compatibilidad con navegadores antiguos
- styples.css archivos de css globales
## Agregando estilos
Bootsrapp https://getbootstrap.com/docs/4.3/getting-started/download/

## Tips
 apostrofes template literales [``]

 ## Generacion automática de componentes
 ng g c components/footer (carpeta/componente)

 ## directivas estructurales
 - *ngIf  puede contener una condición para mostrar o no mostrar un elemento, el elemento desaparece completamente del dom ejemplo= <div *ngIf="mostrar" class="card text-white bg-primary mb-3" style="width: 100%;">
 - *ngFor se ocupa para recorrer una lista puede ejemplo= <li *ngFor="let personaje of personajes; let i = index" class="list-group-item">{{i + 1}} - {{personaje}}</li>

 ## Aplicación de una sola pagina SLA
1-Crearemos una aplicación de una sola página (Single Page Application)
2- Creación de proyectos de Angular usando el CLI (Command Line Interface)
3- Instalando bootstrap o librerías de terceros usando el Angular-CLI
4- Creación de rutas de nuestra aplicación
5- Uso de RouterLink y RouterLinkActive para movernos de página y colocar clases a los elementos activos.
6- Uso del modulo Router, que nos permite movernos de página mediante código.
7- Obtención de parámetros vía URL.
8- Configuración de nuestro primer servicio en Angular para el manejo de la data.
8- Breve introducción a los Pipes 
9- Uso del buscador del navbar para realizar una consulta a nuestro arreglo de héroes.
instalación de bootstrap
- npm install bootstrap --save
- npm install jquery --save 
- npm install popper.js --save

se configura archivo angular.json Style y Script

## configurando el navbar y otros componentes
- ng g c components/[component] -is  "is" no genera el archivo de estilos


## router link y router link active
- snipper para crear rutas ng-routes -> genera rutas
- snipper para import ng-import -> genera importación 
- {useHash: true} en router para generar ruta de forma antigua funciona con paso de parametros http://localhost:4200/#/home

## introducción a los servicios
- Brindar información a quien lo necesite
- Realizar peticiones CRUD (create, read, update, delete).
- Mantener la data de forma persistente.
- Servir como recurso re-utlizable para nuestra aplicación.

- snipper ng-service -> genera el esqueleto del servicios

## Pipe transformación visual de data
