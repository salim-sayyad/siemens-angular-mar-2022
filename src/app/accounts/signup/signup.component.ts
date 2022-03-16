import { Component, OnInit } from '@angular/core';
import { LebalComponent } from 'src/app/utility/lebal/lebal.component';
@Component({
  selector: 'signup-component',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userName="";
  password="";
  email="";
  constructor() {
    this.userName="";
    this.password="";
    this.email="";
   }
   signup():void{
    console.log(this.userName);
   }
   clear():void{
    this.userName="";
    this.password="";
    this.email="";
   }

  ngOnInit(): void {
  }

}
