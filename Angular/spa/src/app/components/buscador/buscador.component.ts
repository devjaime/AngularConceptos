import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PayasosService } from '../../servicios/payasos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  payasos: any[] = []
  termino: string;
  constructor(private activatedroute: ActivatedRoute,
              private _payasosService: PayasosService,
              private router: Router) { }

  ngOnInit() {
    this.activatedroute.params.subscribe(params => {
      this.termino = params['termino'];
      this.payasos = this._payasosService.buscarPayasos( params['termino'] );
      console.log(this.payasos);
    });
  }
  
  verPayaso(idx: number) {
    this.router.navigate( ['/payaso', idx]);
  }
}
