import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './start/app.component';

import { NavComponent } from './shared/navbar.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from './shared/app.routing';
import {DawgComponent} from './dawg/dawg.component';
import {AdminModule} from './admin/admin.module';

import {UserService} from './admin/adminShared/user.service';
import {BlogAdminService} from './admin/adminShared/blog-admin.service';

@NgModule({
    imports: [
        BrowserModule,
        AdminModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        ErrorComponent,
        DawgComponent
    ],
    providers: [
        UserService,
        BlogAdminService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
