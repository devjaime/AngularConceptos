import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PayasosComponent } from './components/payasos/payasos.component';
import { PayasoComponent } from './components/payaso/payaso.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'payasos', component: PayasosComponent },
    { path: 'payaso/:id', component: PayasoComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'},
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


