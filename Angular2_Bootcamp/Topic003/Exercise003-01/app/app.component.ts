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
  <site-list-view *ngIf="currentView=='list'"
				  (onAdd)="navigateTo('add')"
				  (onEdit)="siteId=$event; navigateTo('edit')"
				  >
  </site-list-view>
  <add-site *ngIf="currentView=='add'"
  				   (onClosed)="navigateTo('list')">
                   <!--[siteId]="newSiteId"-->
				   <!--(onAdded)="siteAdded($event)"-->
				   <!--(onCancel)="navigateTo('list')">-->
  </add-site>
  <edit-site *ngIf="currentView=='edit'"
  					[siteId]="siteId"
  					(onClosed)="navigateTo('list')">
                   <!--[site]="currentSite"-->
				   <!--(onSaved)="siteSaved($event)"-->
				   <!--(onCancel)="navigateTo('list')">-->
  </edit-site>
  </div></div></div>
  `,
	providers : [SiteManageService]
})
export class AppComponent {

                 currentView = 'list';
				 siteId: number;
				navigateTo(view: string){
					this.currentView=view;
						}
			//		startAdd(){
			//		this.newSiteId = this.sites.map(s => s.id)
			//		.reduce((p,c) => p <c ? c : p) +1;
			//		this.navigateTo('add');
			//		}
			//
			//		siteAdded(newSiteName: string){
			//		this.sites.push({id: this.newSiteId, name: newSiteName});
			//		this.navigateTo('list');
			//
			//		}
			//		startEdit(site: DiveSite){
			//		this.currentSite={id: site.id, name: site.name}
			//		this.navigateTo('edit');
			//		}
			//		siteSaved(site: DiveSite){
			//		let oldSite = this.sites.filter(s=> s.id == site.id)[0];
			//		if(oldSite){
			//		oldSite.name=site.name;
			//		         }
			//		this.navigateTo('list');
			//		}
			//		startDelete(site: DiveSite){
          //let index=this.sites.indexOf(site);
			//		this.sites.splice(index,1);
          //
			//		}
					
					
 }
