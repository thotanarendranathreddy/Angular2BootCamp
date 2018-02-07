import { Component,Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { SiteManageService } from './site-manage.service';
@Component({
    selector:'add-site',
    templateUrl:'app/add-site.template.html'
})

export class AddSiteComponent{

 @Output() onClosed= new EventEmitter();
 siteName: string;
	constructor(private siteService: SiteManageService,private router: Router){
	}
	add(){
	this.siteService.addSite({id:0, name: this.siteName});
		this.router.navigate(['/list']);
	              }

}