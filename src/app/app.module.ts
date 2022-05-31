import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Dashboard/menu/menu.component';
import { ContainerComponent } from './Dashboard/container/container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdCarouselConfig } from './Dashboard/carousel-config/carousel-config.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; //---------  Important

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ContainerComponent,
    NgbdCarouselConfig
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,BrowserModule, FormsModule, HttpClientModule, NgbModule
  ],
  exports: [MenuComponent],
  providers: [],
  bootstrap: [AppComponent,MenuComponent]
})
export class AppModule { }
