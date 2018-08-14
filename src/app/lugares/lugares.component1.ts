import { Component } from '@angular/core';
import { LugaresServicio } from '../services/lugares.services';
import { Http } from '@angular/http';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
})
export class LugaresComponent{
      //STRING INTERPOLATION
      title = 'BCI Square';
      a=3;
      b=5;
      contadorSegundos=0;
      listo=false;
      nombre="";
        /*constructor(){
          //PROPERTY BINDING --> MANEJAR LAS PROPIEDADES DE LOS OBJETOS
          setTimeout(()=> {this.listo=true},3000)
        }
        */
      //EVENT BINDING -> ACCIÓN DEL USUARIO
      hacerAlgo(){
        alert("Haciendo algo");
      }
      //TWO WAY BINDING: ESTO SE HACE DIRECTAMANTE EN EL HTML CON ([])
      //NGFOR
      /*lugares:any=[
        {nombre:"Florería la Guarderaía"},
        {nombre:"Donas la pasadita"},
        {nombre:"Veterinaria Huellitas Felices"}
      ]
      */
      //NGIF
      /*
      lugares:any=[
        {id:1, plan:"pagado",cercania:1, distancia:1, activo:true, nombre:"Florería la Guarderaía"},
        {id:2, plan:"gratuito", cercania:2, distancia:1.5,activo:false, nombre:"Donas la pasadita"},
        {id:3, plan:"pagado",cercania:3, distancia:2 ,activo:true,nombre:"Veterinaria Huellitas Felices"},
        {id:4, plan:"pagado",cercania:3, distancia:1, activo:true, nombre:"Empresa 1"},
        {id:5, plan:"gratuito", cercania:2, distancia:1.5,activo:false, nombre:"Empresa 2"},
        {id:6, plan:"pagado",cercania:3, distancia:2 ,activo:true,nombre:"Empresa 3"},
        {id:7, plan:"pagado",cercania:3, distancia:1, activo:true, nombre:"Empresa 4"},
        {id:8, plan:"gratuito", cercania:2, distancia:1.5,activo:false, nombre:"Empresa 5"},
        {id:9, plan:"pagado",cercania:1, distancia:2 ,activo:true,nombre:"Empresa 6"}
      ];
      */
      lat:number=-33.4397112;
      lng:number=-70.6556858;
      lugares=null;
      constructor(private lugaresServicio:LugaresServicio, private http:Http){
      // esto es "normalmente"    this.lugares=lugaresServicio.getLugares();
      // esto es para suscribirse a un servicio
      lugaresServicio.getLugaresHTTP(http)
        .subscribe((lugares)=>{
          this.lugares=lugares;
        });
      }
    
}
