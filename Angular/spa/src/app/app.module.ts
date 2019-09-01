import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { PayasosService } from './servicios/payasos.service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PayasosComponent } from './components/payasos/payasos.component';
import { PayasoComponent } from './components/payaso/payaso.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PayasoTarjetaComponent } from './components/payaso-tarjeta/payaso-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PayasosComponent,
    PayasoComponent,
    BuscadorComponent,
    PayasoTarjetaComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    PayasosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
