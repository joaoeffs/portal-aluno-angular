import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { SideBarModule } from 'src/app/directives/sidebar/sidebar.module';

import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    SideBarModule
  ]
})
export class HomeModule { }
