import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payaso-tarjeta',
  templateUrl: './payaso-tarjeta.component.html',
  styleUrls: ['./payaso-tarjeta.component.css']
})
export class PayasoTarjetaComponent implements OnInit {

  @Input() payaso: any = {};
  @Input() index: number;

  @Output() payasoSeleccionado: EventEmitter<number>;

  constructor(private router:Router) {
    this.payasoSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }
  verPayaso() {
    console.log(this.index);
    this.router.navigate(['/payaso', this.index]);
    //this.payasoSeleccionado.emit(this.index);
  }
}
