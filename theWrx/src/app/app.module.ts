import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAdminComponent } from './components/user-admin/user-admin.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HelpComponent } from './components/help/help.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { DeleteUserComponent } from './components/delete-user/delete-user.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserAdminComponent,
    ContactUsComponent,
    HelpComponent,
    PageNotFoundComponent,
    HomeComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    AddNewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
