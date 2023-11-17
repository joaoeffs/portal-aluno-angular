import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from 'src/app/directives/sidebar/sidebar.component';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    HomeComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
  ]
})
export class HomeModule { }
