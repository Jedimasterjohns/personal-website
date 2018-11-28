import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './_components/home/home.component';

import { GlobalServiceManager } from './_services/global-service-manager.service';

import { ScrollToModule } from 'ng2-scroll-to';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    routing
  ],
  providers: [
    GlobalServiceManager
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
