import { Component } from '@angular/core';
import { DiveSite } from './dive-site';
@Component({
  selector: 'my-app',
  template : `
  <div class="jumbotron">
  <div class="container">
  <div class="container-fluid">
  <h1> Dive Site Maintainance </h1>
  <site-list-view *ngIf="currentView=='list'" 
				  [sites]="sites" 
				  (onAdd)="startAdd()"
				  (onEdit)="startEdit($event)"
				  (onDelete)="startDelete($event)">
  </site-list-view>
  <add-site *ngIf="currentView=='add'"
                   [siteId]="newSiteId"
				   (onAdded)="siteAdded($event)"
				   (onCancel)="navigateTo('list')">
  </add-site>
  <edit-site *ngIf="currentView=='edit'"
                   [site]="currentSite"
				   (onSaved)="siteSaved($event)"
				   (onCancel)="navigateTo('list')">
  </edit-site>
  </div></div></div>
  `
})
export class AppComponent {
  sites = DiveSite.FavoriteSites.slice(0);
                 currentView = 'list';
				 currentSite: DiveSite;
				 newSiteId: number;
			navigateTo(view: string){
			this.currentView=view;
					}
					startAdd(){
					this.newSiteId = this.sites.map(s => s.id)
					.reduce((p,c) => p <c ? c : p) +1;
					this.navigateTo('add');
					}
					
					siteAdded(newSiteName: string){
					this.sites.push({id: this.newSiteId, name: newSiteName});
					this.navigateTo('list');
					
					}
					startEdit(site: DiveSite){
					this.currentSite={id: site.id, name: site.name}
					this.navigateTo('edit');
					}
					siteSaved(site: DiveSite){
					let oldSite = this.sites.filter(s=> s.id == site.id)[0];
					if(oldSite){
					oldSite.name=site.name;
					         }
					this.navigateTo('list');
					}
					startDelete(site: DiveSite){
          let index=this.sites.indexOf(site);
					this.sites.splice(index,1);	
                 				
					}
					
					
 }
