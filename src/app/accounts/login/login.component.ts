import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName="";
  password="";
  constructor() {
    this.userName ;
    this.password;
   }
  login():void{
    console.log(this.userName , this.password);
    
  }
  onUserNameEdit(value:string){
    this.userName=value;
  }
  onPasswordEdit(value:string){
    this.password=value;
  }
  clear():void{
    this.userName="";
    this.password="";
  }

  ngOnInit(): void {
  }

}
