import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { RepoDetailsComponent } from './repo-details/repo-details.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',component:UsersComponent},
  {path:'details' ,component:DetailsComponent},
  {path:'details/:name' ,component:DetailsComponent},
  {path:'repodetails' ,component:RepoDetailsComponent},
  {path:'repodetails/:name/:reponame' ,component:RepoDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
