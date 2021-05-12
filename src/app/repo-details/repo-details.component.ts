import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
  styleUrls: ['./repo-details.component.css']
})
export class RepoDetailsComponent implements OnInit {

  constructor(private http:HttpClient , private _UsersService:UsersService,private route:ActivatedRoute) { }
  totalLength: any;
  page:number=1
  repos:any;
  user1=this._UsersService.getMsg2();
  id=this.user1.id;
  login=this.user1.login;
  avatar_url=this.user1.avatar_url;
  myuser:any;
  repo1:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:any)=>{
      let id=params.get('name');
      let n1=params.get('reponame')
      this.myuser=id;
      this.repo1=n1;
    })

    this.getUser1().subscribe(data =>{
      this.repos=data;
      console.log(this.repos)
     this.totalLength=data.length;

    })
  }

  getUser1():Observable<any>{
    return this.http.get<any>(`https://api.github.com/repos/${this.myuser}/${this.repo1}`);
  }
}
