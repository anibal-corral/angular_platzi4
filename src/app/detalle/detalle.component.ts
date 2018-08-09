import { Component } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  
})
export class DetalleComponent{
  //esto es para recibir el parámetro
  constructor(private rout:ActivatedRoute){
    console.log(this.rout.snapshot.params['id']);//esto es una forma de revisar los paraemtros
    console.log(this.rout.snapshot.queryParams['action']);//esta esla forma de pasar paraemteros tipo query
  }
    
}
