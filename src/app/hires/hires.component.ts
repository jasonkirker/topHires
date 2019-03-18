import { Component, OnInit } from '@angular/core';
import { Hire } from '../hire';

@Component({
  selector: 'app-hires',
  templateUrl: './hires.component.html',
  styleUrls: ['./hires.component.css']
})
export class HiresComponent implements OnInit {
  
  hire: Hire = {
    id: 1,
    name: "Michael Bluth",
  };
    

  constructor() { }

  ngOnInit() {
  }

}
