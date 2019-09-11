import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TwowayComponent } from './twoway/twoway.component';

import { FormsModule } from "@angular/forms";
import { NgforComponent } from './ngfor/ngfor.component';

import {ServiceIntroService} from "./service-intro.service"
import {FirstServiceService} from "./first-service.service"

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TwowayComponent,
    NgforComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ServiceIntroService, FirstServiceService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
