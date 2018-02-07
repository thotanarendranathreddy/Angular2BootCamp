import {Routes, RouterModule} from '@angular/router';
import {SiteListComponent} from './Site-List.component';
import {EditSiteComponent} from './edit-site.component';
import {AddSiteComponent} from './add-site.component';

const routes: Routes = [
	{path: 'list', component: SiteListComponent},
	{path: 'add', component: AddSiteComponent},
	{path: 'edit/:id', component: EditSiteComponent},
	{path: '', redirectTo: 'list', pathMatch: 'full'}
];
export const routingModule = RouterModule.forRoot(routes);