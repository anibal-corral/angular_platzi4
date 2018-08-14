import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ResaltarDirectiva } from './directiva/resaltar.directiva';
import { ContarClicksDirectiva } from './directiva/contarclicks.directiva';
import {Routes, RouterModule} from "@angular/router";
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresServicio } from './services/lugares.services';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CrearNegocioComponent } from './crear_negocio/crearnegocio.component';
import { HttpModule } from '@angular/http';




/*aqui estamos declarando un arreglo que tiene objetos de tipo ruta, 
el path es la sección de la URL que sigue después del dominio
esto quiere decir que para el path se cargará el componente que se indica
*/
const appRoutes: Routes=[
//{path:"",component:AppComponent},
{path:"lugares",component:LugaresComponent},
{path:"contacto",component:ContactoComponent},
{path:"crearnegocio/:id",component:CrearNegocioComponent},
//{path:"detalle",component:DetalleComponent}//NO RECIBE PARAMETROS
/*PATH: "ruta/:parametro1/:parametro2/:acción/:etc" SI RECIBE PARAMETROS*/
{path:"detalle/:id",component:DetalleComponent}
];

export const firebaseConfig = {
    apiKey: "AIzaSyC-uhQI3u3plNezpF1rQ9IpGAytcTPKlpA",
    authDomain: "fir-bcisquare.firebaseapp.com",
    databaseURL: "https://fir-bcisquare.firebaseio.com",
    //projectId: "fir-bcisquare",
    storageBucket: "fir-bcisquare.appspot.com",
    messagingSenderId: "610701448868"
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirectiva,
    ContarClicksDirectiva,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearNegocioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
     AgmCoreModule.forRoot({
      apiKey: ''
    }),
    RouterModule.forRoot(appRoutes),//con esto agregamos el módulo de router con las rutas declaradas más arriba
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
 
  ], 
  providers: [
    LugaresServicio
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
