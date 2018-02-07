import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MousePadComponent }  from './mousepad.component';
import { LogBoardComponent }  from './log-board.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,MousePadComponent,LogBoardComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
