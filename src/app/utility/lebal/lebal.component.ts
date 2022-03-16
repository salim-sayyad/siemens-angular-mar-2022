import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lebal-component',
  templateUrl: './lebal.component.html',
  styleUrls: ['./lebal.component.css']
})
export class LebalComponent implements OnInit {


  @Input()
  message:string;
  constructor() { 
    this.message="Text here ";
  }

  ngOnInit(): void {
  }

}
