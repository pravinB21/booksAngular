import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { UsersService } from './users.service';
import { DetailsComponent } from './details/details.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DetailsComponent,
    RepoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
