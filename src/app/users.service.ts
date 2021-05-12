import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  myUrl:any="";

  constructor(private http:HttpClient) { }

  setMsg(data:any){
    this.myUrl=data;
  }

  getMsg(){
    return this.myUrl;
  }

  user1:any;
  setMsg2(data1:any){
    this.user1=data1;
  }

  getMsg2(){
    return this.user1;
  }
user2:any;
  setMsg3(data2:any){
    this.user2=data2;
  }

  getMsg3(){
    return this.user2;
  }

  getusers():Observable<any>{
    return this.http.get<any>(`http://api.github.com/search/users?q=${this.myUrl}`)
  }
  getrepository():Observable<any>{
    return this.http.get<any>(`http://api.github.com/search/repositories?q=${this.myUrl}`)
  }}
