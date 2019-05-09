import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PhotoComponent } from './photo/photo.component';
import { ApiService } from './api.service';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

import { AppRoutingModule }  from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule,AppRoutingModule],
  declarations: [ AppComponent, HelloComponent, PhotoComponent, PhotoDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ApiService]
})
export class AppModule { }
