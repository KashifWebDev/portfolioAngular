import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';


import {CarouselModule} from "ngx-owl-carousel-o";
import {SharedModule} from "../shared/shared.module";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent
  },
];

@NgModule({
  declarations: [
    LandingPageComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePagesModule { }
