import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import {Http, Headers} from "@angular/http";

//Injectable se debe declarar para que pueda ser utilizado por otro
@Injectable()
export class LugaresServicio{
  //esto es para USARLO A TRAVÉS DE HTTP Y NO DE SOCKETS
  API_ENDPOINT="https://fir-bcisquare.firebaseio.com";
  //---------------
          //Esto es para obtener los lugares
          constructor(private afb:AngularFireDatabase, private http:Http){
        }
    lugares:any=[];
      public getLugaresHTTP(http){
          //debugger;
          return this.http.get(this.API_ENDPOINT+"/lugares.json");
      }
      public getLugares(){
        //debugger;
        return this.afb.list("lugares/");
    }
      buscarLugar(id){
         return this.lugares.filter((lugar)=>{return lugar.id==id})[0] || null;
      }
      //esto es para que vaya a guardar a Firebase por sockets
      public guardarLugar(lugar){
        this.afb.database.ref('lugares/'+lugar.id).set(lugar);
      }
      public guardarLugarHttp(lugar){
       const headers = new Headers({"Content-Type":"application/json"});
       return this.http.post(this.API_ENDPOINT+"/lugares.json",lugar,{headers});
      }
        public obtenerGeoData(direccion){
        //http://maps.google.com/maps/api/geocode/json?address=78-43+diagonal+70f,+Bogota,Colombia
        //lo que hago es llamar a esta url en http
        return this.http.get("http://maps.google.com/maps/api/geocode/json?address="+direccion);
        }
        public getLugar(id){
          return this.afb.object('lugares/'+id);
        }

        public actualizarLugar(lugar){
          this.afb.database.ref('lugares/'+lugar.id).set(lugar);
        }
}
