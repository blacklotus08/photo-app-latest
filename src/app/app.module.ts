import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PhotoComponent } from './photo/photo.component';
import { ApiService } from './api.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, PhotoComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ApiService]
})
export class AppModule { }
