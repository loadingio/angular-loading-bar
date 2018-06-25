import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularLoadingBarComponent } from 'angular-loading-bar';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularLoadingBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
