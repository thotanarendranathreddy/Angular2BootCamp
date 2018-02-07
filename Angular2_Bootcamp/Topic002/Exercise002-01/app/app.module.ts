import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { SiteListComponent} from './Site-List.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,SiteListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
