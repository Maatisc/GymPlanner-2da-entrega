import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClasesPage } from './clases.page';
import { Clases2Component } from 'src/app/components/clases2/clases2.component';
import { HorariosComponent } from 'src/app/components/horarios/horarios.component';
import { AlumnosComponent } from 'src/app/components/alumnos/alumnos.component';
import { DetallesComponent } from 'src/app/components/detalles/detalles.component';

const routes: Routes = [
  {
    path: '',
    component: ClasesPage,
    children: [
      {
        path: 'clases2',
        component: Clases2Component
      },
      {
        path: 'horarios',
        component: HorariosComponent
      },
      {
        path: 'alumnos',
        component: AlumnosComponent
      },
      {
        path: 'detalles',
        component: DetallesComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClasesPageRoutingModule {}
