import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { ClasesPageRoutingModule } from './clases-routing.module';

import { ClasesPage } from './clases.page';
import { Clases2Component } from 'src/app/components/clases2/clases2.component';
import { HorariosComponent } from 'src/app/components/horarios/horarios.component';
import { AlumnosComponent } from 'src/app/components/alumnos/alumnos.component';
import { DetallesComponent } from 'src/app/components/detalles/detalles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClasesPageRoutingModule,
  ],
  declarations: [ClasesPage, Clases2Component, HorariosComponent, AlumnosComponent, DetallesComponent]
})
export class ClasesPageModule {}
