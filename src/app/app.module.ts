import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // NgModel lives here 

import { AppComponent } from './app.component';
import { HiresComponent } from './hires/hires.component';

@NgModule({
  declarations: [
    AppComponent,
    HiresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
