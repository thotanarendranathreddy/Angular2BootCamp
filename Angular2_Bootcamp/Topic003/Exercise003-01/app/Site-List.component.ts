import { Component, Output, EventEmitter} from '@angular/core';
import { DiveSite } from './dive-site';
import { SiteManageService } from './site-manage.service';
@Component({

selector: 'site-list-view',
templateUrl: 'app/site-list.template.html'
})

export class SiteListComponent {

	    sites:DiveSite[];
		@Output() onAdd = new EventEmitter();
		@Output() onEdit= new EventEmitter<number>();


		constructor(private siteService: SiteManageService){
			this.sites = siteService.getAllSites();
		}
		add(){
		this.onAdd.emit(null);
		}

		edit(siteId: number){
		this.onEdit.emit(siteId);
		}

		delete(siteId: number){
			this.siteService.deleteSite(siteId);
		}
}