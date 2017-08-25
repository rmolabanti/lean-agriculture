import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PlantDetailComponent } from './plants/plant-detail.component';

import { MapToIterable } from './map-to-iterable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PlantDetailComponent,
    MapToIterable
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
