import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  totalLength: any;
  page:number=1

  constructor(private http:HttpClient , private _UsersService:UsersService,private route:ActivatedRoute) { }

  repos:any;
  user1=this._UsersService.getMsg2();
  id=this.user1.id;
  login=this.user1.login;
  avatar_url=this.user1.avatar_url;
  myuser:any;
  ngOnInit(): void {

    this.route.paramMap.subscribe((params:any)=>{
      let id=params.get('name');
      this.myuser=id;
    })

    this.getUser1().subscribe(data =>{
      this.repos=data;
      this.totalLength=data.length;

    })
  }

  getUser1():Observable<any>{
    return this.http.get<any>(`https://api.github.com/users/${this.myuser}/repos`);
  }

}
