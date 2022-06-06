import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/Header/header.component';
import { ContainerComponent } from './Components/container/container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbdCarouselConfig } from './Components/carousel-config/carousel-config.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './Components/footer/footer.component'; //---------  Important
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './Components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContainerComponent,
    NgbdCarouselConfig,
    FooterComponent,
    LoginComponent
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
