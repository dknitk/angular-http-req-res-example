import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpReqRespExample } from './http.req.res.example';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  
  declarations: [ AppComponent, HelloComponent ,HttpReqRespExample],
  bootstrap:    [ AppComponent ],
  
  providers: []
})
export class AppModule { }
