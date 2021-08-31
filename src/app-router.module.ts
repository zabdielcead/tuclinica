import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CitasComponent } from './app/clinica/pages/citas/citas.component';
import { SomosComponent } from './app/clinica/pages/somos/somos.component';
import { MembresiaComponent } from './app/clinica/pages/membresia/membresia.component';
import { ServiciosComponent } from './app/clinica/pages/servicios/servicios.component';
import { SucursalesComponent } from './app/clinica/pages/sucursales/sucursales.component';



const routes: Routes = [
  {
    path: '',
    component: SomosComponent,
    pathMatch: 'full'
  },
  {
   path:'citas',
   component: CitasComponent 
  },
  {
    path:'membresia',
    component: MembresiaComponent 
   },
   {
    path:'servicios',
    component: ServiciosComponent 
   },
   {
    path:'somos',
    component: SomosComponent 
   },
   {
    path:'sucursales',
    component: SucursalesComponent 
   },
   {
     path: '**',
     redirectTo: ''
   }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
