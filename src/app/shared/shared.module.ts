import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";
import { IntroduceComponent } from './introduce/introduce.component';
import { RecentWorkComponent } from './recent-work/recent-work.component';
import { ClientSayComponent } from './client-say/client-say.component';
import { ServicesSharedComponent } from './services-shared/services-shared.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import { PageBannerComponent } from './page-banner/page-banner.component';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        IntroduceComponent,
        RecentWorkComponent,
        ClientSayComponent,
        ServicesSharedComponent,
        PageBannerComponent
    ],
  exports: [
    HeaderComponent,
    FooterComponent,
    IntroduceComponent,
    RecentWorkComponent,
    ClientSayComponent,
    ServicesSharedComponent,
    PageBannerComponent
  ],
    imports: [
        CommonModule,
      CarouselModule,
      RouterModule
    ]
})
export class SharedModule { }
