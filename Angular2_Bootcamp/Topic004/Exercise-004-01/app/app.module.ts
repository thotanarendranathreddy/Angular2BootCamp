import {NgModule} from '@angular/core';
import {DiveLogComponent} from './dive-log.component';
import {BrowserModule} from '@angular/platform-browser';
import {DiveLogEntry} from './dive-log-entry';
import {DiveLogApi} from './dive-log-api.service';

@NgModule({ 
   imports:      [ BrowserModule ], 
   declarations: [ DiveLogComponent,DiveLogEntry ], 
   bootstrap:    [ DiveLogComponent ],
   providers: [DiveLogApi] 
})
export class AppModule {}

