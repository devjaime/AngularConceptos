import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PayasosService } from '../../servicios/payasos.service';

@Component({
  selector: 'app-payaso',
  templateUrl: './payaso.component.html'
})
export class PayasoComponent {

  payaso: any ={};

  constructor( private activateroute: ActivatedRoute,
               private _payasoService: PayasosService) { 
    this.activateroute.params.subscribe(params =>{
      this.payaso = this._payasoService.getPayaso( params ['id']);

    })
  }

}
