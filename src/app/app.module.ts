import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Components/Header/header.component';
import { ContainerComponent } from './Components/container/container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbdCarouselConfig } from './Components/carousel-config/carousel-config.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Components/footer/footer.component'; //---------  Important

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContainerComponent,
    NgbdCarouselConfig,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,BrowserModule, FormsModule, HttpClientModule, NgbModule, BrowserAnimationsModule, FontAwesomeModule
  ],
  exports: [MenuComponent],
  providers: [],
  bootstrap: [AppComponent,MenuComponent]
})
export class AppModule { }
