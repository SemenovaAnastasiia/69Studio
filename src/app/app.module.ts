import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThumbnailSliderComponent } from './thumbnail-slider/thumbnail-slider.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { IntroBlockComponent } from './intro-block/intro-block.component';
import { MainWorkProcessComponent } from './main-work-process/main-work-process.component';
import { IntroTeamComponent } from './intro-team/intro-team.component';
import { CustomersComponent } from './customers/customers.component';
import { FooterComponent } from './footer/footer.component';
import { PreloaderComponent } from './preloader/preloader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThumbnailSliderComponent,
    MainSectionComponent,
    IntroBlockComponent,
    MainWorkProcessComponent,
    IntroTeamComponent,
    CustomersComponent,
    FooterComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
