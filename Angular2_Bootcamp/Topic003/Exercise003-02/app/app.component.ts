import { Component } from '@angular/core';
import {SiteListComponent} from './Site-List.component';
import { SiteManageService } from './site-manage.service';
@Component({
  selector: 'my-app',
  template : `
  <div class="jumbotron">
  <div class="container">
  <div class="container-fluid">
  <h1> Dive Site Maintainance </h1>
  <router-outlet></router-outlet>
  </div></div></div>
  `,
	providers : [SiteManageService]
})
export class AppComponent {


					
 }
