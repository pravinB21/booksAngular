import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { UsersService } from '../users.service';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  chooseType: boolean | undefined;
  users:any;
  

 

  constructor(private http:HttpClient , private _UsersService:UsersService, private router:Router) { }

  myUrl:String | undefined;


  option:any='user';
  getOption(event:any){
    this.option=event.target.value;
  }
totalLength:number | undefined;
page:number=1
  getInput(val:any){
    this.myUrl=val;
    this._UsersService.setMsg(this.myUrl)
    if(this.option==='user')
    {
      this.chooseType=true;
      this._UsersService.getusers().subscribe((data:any) =>{
        this.totalLength=data.items.length;
        this.users=data.items;
      });
    }else{
      this.chooseType=false;
      this._UsersService.getrepository().subscribe((data:any) =>{
        console.log(data)
        this.totalLength=data.items.length;
        this.users=data.items;

    });
  }
}
myUser:any;
perticular(user1:any){
this.myUser=user1;
this.router.navigate(['/details',user1.login]);
this._UsersService.setMsg2(this.myUser);
console.log("event event")
}

perticular1(user2:any){
  this.myUser=user2;
  this.router.navigate(['/repodetails',user2.owner.login,user2.name]);
  this._UsersService.setMsg2(this.myUser);
  console.log("event event")
  }
 //url:String=
 

  
  ngOnInit(): void {
    
  }

  

}
