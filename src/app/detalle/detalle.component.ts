import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresServicio } from '../services/lugares.services';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  
})
export class DetalleComponent{
  /* 
  lugares:any=[
    {id:1, plan:"pagado",cercania:1, distancia:1, activo:true, nombre:"Florería la Guarderaía", descripcion:"mas adelante habrá más información"},
    {id:2, plan:"gratuito", cercania:2, distancia:1.5,activo:false, nombre:"Donas la pasadita",descripcion:"mas adelante habrá más información"},
    {id:3, plan:"pagado",cercania:3, distancia:2 ,activo:true,nombre:"Veterinaria Huellitas Felices",descripcion:"mas adelante habrá más información"},
    {id:4, plan:"pagado",cercania:3, distancia:1, activo:true, nombre:"Empresa 1",descripcion:"mas adelante habrá más información"},
    {id:5, plan:"gratuito", cercania:2, distancia:1.5,activo:false, nombre:"Empresa 2",descripcion:"mas adelante habrá más información"},
    {id:6, plan:"pagado",cercania:3, distancia:2 ,activo:true,nombre:"Empresa 3",descripcion:"mas adelante habrá más información"},
    {id:7, plan:"pagado",cercania:3, distancia:1, activo:true, nombre:"Empresa 4",descripcion:"mas adelante habrá más información"},
    {id:8, plan:"gratuito", cercania:2, distancia:1.5,activo:false, nombre:"Empresa 5",descripcion:"mas adelante habrá más información"},
    {id:9, plan:"pagado",cercania:1, distancia:2 ,activo:true,nombre:"Empresa 6",descripcion:"mas adelante habrá más información"}
  ];
  */
 
id=null;
lugar:any={};
  //esto es para recibir el parámetro
  constructor(private rout:ActivatedRoute, private lugaresService:LugaresServicio){
    console.log(this.rout.snapshot.params['id']);//esto es una forma de revisar los paraemtros
    console.log(this.rout.snapshot.queryParams['action']);//esta esla forma de pasar paraemteros tipo query
    this.id=this.rout.snapshot.params['id'];
    this.lugar=this.lugaresService.buscarLugar(this.id);
    
  }

  //Crear función para buscar el lugar basado en el ID recibido
  /*
  buscarLugar(){
    console.log("funcion lugar");
    return this.lugares.filter((lugar)=>{return lugar.id==this.id})[0] || null;
  }
  */
    
}
