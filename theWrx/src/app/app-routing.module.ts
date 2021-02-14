import { UserAdministrationComponent } from './user-administration/user-administration.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HelpComponent } from './help/help.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserAddNewComponent } from './user-add-new/user-add-new.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserUpdateComponent } from './user-update/user-update.component';

const routes: Routes = [
  { path: 'user-administration', component: UserAdministrationComponent, children: [
    { path: 'add', component: UserAddNewComponent },
    { path: 'delete', component: UserDeleteComponent },
    { path: 'update', component: UserUpdateComponent },
  ]},
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'help', component: HelpComponent },
  { path: '', component: AppComponent },
  { path: '**', component: PageNotFoundComponent }, // to handle unrecognized paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
