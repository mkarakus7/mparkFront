import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { TrainingsComponent } from './subhome/trainings/trainings.component';
import { RaceTeamComponent } from './subhome/race-team/race-team.component';
import { SubHomeContainerComponent } from './subhome/sub-home-container/sub-home-container.component';
import { LeftMenuComponent } from './subHome/left-menu/left-menu.component';
import { OurStuffsComponent } from './subHome/our-stuffs/our-stuffs.component';
import { YoutubeVideo01Component } from './subHome/youtube-video01/youtube-video01.component';
import { NewsFeaturedComponent } from './subHome/news-featured/news-featured.component';
import { CarouselTopComponent } from './subHome/carousel-top/carousel-top.component';
import { SubscribeSiteComponent } from './subhome/subscribe-site/subscribe-site.component';
import { FooterSocialMediaComponent } from './subhome/footer-social-media/footer-social-media.component';
import { FooterMobileAppComponent } from './subhome/footer-mobile-app/footer-mobile-app.component';
import { CenterAllianceComponent } from './subhome/center-alliance/center-alliance.component';
import { CenterBrandsComponent } from './subhome/center-brands/center-brands.component';



@NgModule({
  declarations: [
    HomeComponent,
    TrainingsComponent,
    RaceTeamComponent,
    SubHomeContainerComponent,
    LeftMenuComponent,
    OurStuffsComponent,
    YoutubeVideo01Component,
    NewsFeaturedComponent,
    CarouselTopComponent,
    SubscribeSiteComponent,
    FooterSocialMediaComponent,
    FooterMobileAppComponent,
    CenterAllianceComponent,
    CenterBrandsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
