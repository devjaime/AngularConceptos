import { Component, OnInit } from '@angular/core';
import { PayasosService, Payaso } from '../../servicios/payasos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-payasos',
  templateUrl: './payasos.component.html'
})
export class PayasosComponent implements OnInit {

  payasos: Payaso[] = [];
  constructor( private _payasosService: PayasosService,
               private router: Router) { }

  ngOnInit() {
    this.payasos = this._payasosService.getPayasos();
    // console.log(this.payasos);

  }

  verPayaso(idx: number) {
    this.router.navigate( ['/payaso', idx]);
  }

}
