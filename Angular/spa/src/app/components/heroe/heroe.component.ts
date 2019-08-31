import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any ={};

  constructor( private activateroute: ActivatedRoute,
               private _hereoService: HeroesService) { 
    this.activateroute.params.subscribe(params =>{
      this.heroe = this._hereoService.getHeroe( params ['id']);

    })
  }

}
