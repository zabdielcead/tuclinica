import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SomosComponent } from './pages/somos/somos.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { MembresiaComponent } from './pages/membresia/membresia.component';
import { SucursalesComponent } from './pages/sucursales/sucursales.component';
import { CitasComponent } from './pages/citas/citas.component';



@NgModule({
  declarations: [
    SomosComponent,
    ServiciosComponent,
    MembresiaComponent,
    SucursalesComponent,
    CitasComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports:[
    SomosComponent,
    ServiciosComponent,
    MembresiaComponent,
    SucursalesComponent,
    CitasComponent
  ]
})
export class ClinicaModule { }
