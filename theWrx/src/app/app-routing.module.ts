import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserAdminComponent } from './components/user-admin/user-admin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HelpComponent } from './components/help/help.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';

import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';


const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path: 'user-admin', component:UserAdminComponent,
  children: [
    { path: '', redirectTo: 'add-new-user', pathMatch: 'full' },
    { path: 'add-new-user', component: AddNewUserComponent },
    { path: 'update-user', component: UpdateUserComponent },
    { path: 'delete-user', component: DeleteUserComponent }
  ]
},
  { path: 'contact-us', component:ContactUsComponent},
  { path: 'help', component:HelpComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
