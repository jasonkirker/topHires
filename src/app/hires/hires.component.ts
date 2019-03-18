import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hires',
  templateUrl: './hires.component.html',
  styleUrls: ['./hires.component.css']
})
export class HiresComponent implements OnInit {
  
  hire = "Michael Bluth";

  constructor() { }

  ngOnInit() {
  }

}
