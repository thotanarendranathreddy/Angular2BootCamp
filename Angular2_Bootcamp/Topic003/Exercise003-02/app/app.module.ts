import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { SiteListComponent} from './Site-List.component';
import {AddSiteComponent} from './add-site.component';
import {EditSiteComponent} from './edit-site.component';
import { routingModule }   from './app.routes';
@NgModule({
  imports:      [ BrowserModule, routingModule ],
  declarations: [ AppComponent,SiteListComponent,AddSiteComponent,EditSiteComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
