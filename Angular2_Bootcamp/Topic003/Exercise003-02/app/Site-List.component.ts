import { Component, Output, EventEmitter} from '@angular/core';
import { DiveSite } from './dive-site';
import {Router} from '@angular/router';
import { SiteManageService } from './site-manage.service';
@Component({

selector: 'site-list-view',
templateUrl: 'app/site-list.template.html'
})

export class SiteListComponent {

	    sites:DiveSite[];
		@Output() onAdd = new EventEmitter();
		@Output() onEdit= new EventEmitter<number>();


		constructor(private siteService: SiteManageService, private router: Router){

		}
		getAll(){
			this.sites = this.siteService.getAllSites();
		}
		add(){
		this.onAdd.emit(null);
		}

		edit(siteId: number){
		this.router.navigate(['/edit',siteId]);
		}

		delete(site: DiveSite){
			alert("Are You Sure You Want to Delete");
			this.siteService.deleteSite(site);
			this.getAll()
		}
}