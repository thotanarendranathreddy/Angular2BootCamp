import { Component,Input, Output, EventEmitter } from '@angular/core';
import { SiteManageService } from './site-manage.service';
@Component({
    selector:'edit-site',
    templateUrl:'app/edit-site.template.html'
})

export class EditSiteComponent{
	private _siteId: number;
	siteName: string;
	@Input() set siteId(id: number){
		this._siteId = id;
		let site = this.siteService.getSiteById(this.siteId);
		this.siteName=site.name;
	}
    @Output() onClosed= new EventEmitter();
	constructor(private siteService: SiteManageService){

	}

	save(){
	this.siteService.saveSite({id: this._siteId, name: this.siteName});
	this.onClosed.emit(null);
	}
	cancel(){
	this.onClosed.emit(null);
	}
}