import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpReqRespExample } from './http.req.res.example';
import { HttpClientModule } from '@angular/common/http';
import { SearchAppComponent, SearchSearvice } from './search.service.example';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  
  declarations: [ AppComponent, HelloComponent ,HttpReqRespExample,SearchAppComponent],
  bootstrap:    [ AppComponent ],
  
  providers: [SearchSearvice]
})
export class AppModule { }
