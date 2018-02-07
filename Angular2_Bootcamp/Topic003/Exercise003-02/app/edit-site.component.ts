import { Component,Input, Output, EventEmitter } from '@angular/core';
import { SiteManageService } from './site-manage.service';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
    selector:'edit-site',
    templateUrl:'app/edit-site.template.html'
})

export class EditSiteComponent{
	siteId: number;
	siteName: string;
	private parSub: any;
	constructor(
		private siteService: SiteManageService,
		private route:ActivatedRoute,
		private router:Router
	)
	{
		this.siteId = this.route.snapshot.params['id'];
		let site = this.siteService.getSiteById(this.siteId);
		this.siteName=site.name;
	}

	save(){
	this.siteService.saveSite({id: this.siteId, name: this.siteName});
	this.router.navigate(['/list'])
	}

}