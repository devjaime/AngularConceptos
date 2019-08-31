import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = []
  termino: string;
  constructor(private activatedroute: ActivatedRoute,
              private _heroesService: HeroesService,
              private router: Router) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log(this.heroes);
    });
  }
  
  verHeroe(idx: number) {
    this.router.navigate( ['/heroe', idx]);
  }
}
