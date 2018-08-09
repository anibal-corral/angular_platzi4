import { Component } from '@angular/core';

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
        constructor(){
          //PROPERTY BINDING --> MANEJAR LAS PROPIEDADES DE LOS OBJETOS
          setTimeout(()=> {this.listo=true},3000)
        }
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
      lugares:any=[
        {id:1, plan:"pagado",cercania:1, distancia:1, activo:true, nombre:"Florería la Guarderaía"},
        {id:2, plan:"gratuito", cercania:2, distancia:1.5,activo:false, nombre:"Donas la pasadita"},
        {id:3, plan:"pagado",cercania:3, distancia:2 ,activo:true,nombre:"Veterinaria Huellitas Felices"}
      ];
      lat:number=-33.4397112;
      lng:number=-70.6556858;
    
}
