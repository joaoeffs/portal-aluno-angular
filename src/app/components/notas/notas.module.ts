import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotasRoutingModule } from './notas-routing.module';
import { NotasComponent } from './notas/notas.component';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SideBarModule } from 'src/app/directives/sidebar/sidebar.module';
import { NotasListComponent } from './notas-list/notas-list.component';


@NgModule({
  declarations: [
    NotasComponent,
    NotasListComponent
  ],
  imports: [
    CommonModule,
    NotasRoutingModule,
    SideBarModule,
    MatProgressSpinnerModule
  ]
})
export class NotasModule { }
