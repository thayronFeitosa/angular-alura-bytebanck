import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NovaTrasnferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    NovaTrasnferenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
