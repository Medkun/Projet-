import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SliderComponent } from './slider/slider.component';
import { CardsComponent } from './cards/cards.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';
import { CubeComponent } from './cube/cube.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SliderComponent,
    CardsComponent,
    FormComponent,
    FooterComponent,
    CubeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
