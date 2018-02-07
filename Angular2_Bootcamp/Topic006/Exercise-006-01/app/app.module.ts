import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { LogComponent }  from './dive-log-form.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,LogComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
