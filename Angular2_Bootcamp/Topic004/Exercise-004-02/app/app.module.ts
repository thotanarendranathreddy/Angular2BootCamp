import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {DiveLogComponent} from './dive-log.component';
import {DiveLogEntry} from './dive-log-entry';
import {DiveLogApi} from './dive-log-api.service';

@NgModule({ 
   imports:      [ BrowserModule, HttpModule ], 
   declarations: [ DiveLogComponent,DiveLogEntry ], 
   bootstrap:    [ DiveLogComponent ],
   providers: [DiveLogApi] 
})
export class AppModule {}

