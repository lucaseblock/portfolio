import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeModule } from './pages/home/home.module';
import { SharedModule } from './shared/shared.module';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
import { ProjectsComponent } from './pages/projects/projects.component';
//import { GALLERY_CONFIG, GalleryConfig } from 'ng-gallery';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    PortfolioModule,
    SharedModule,
  ],
  providers: [
    // {
    //   provide: GALLERY_CONFIG,
    //   useValue: {
    //     autoHeight: true,
    //     imageSize: 'cover',
    //   } as GalleryConfig,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
