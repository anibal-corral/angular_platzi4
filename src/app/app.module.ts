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

/*aqui estamos declarando un arreglo que tiene objetos de tipo ruta, 
el path es la sección de la URL que sigue después del dominio
esto quiere decir que para el path se cargará el componente que se indica
*/
const appRoutes: Routes=[
//{path:"",component:AppComponent},
{path:"lugares",component:LugaresComponent},
//{path:"detalle",component:DetalleComponent}//NO RECIBE PARAMETROS
/*PATH: "ruta/:parametro1/:parametro2/:acción/:etc"*/
{path:"detalle/:id",component:DetalleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirectiva,
    ContarClicksDirectiva,
    DetalleComponent,
    LugaresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA8a33R37xpok5MxTztM9aR5RHzSh0jd0Q'
    }),
    RouterModule.forRoot(appRoutes)//con esto agregamos el módulo de router con las rutas declaradas más arriba


  ], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
