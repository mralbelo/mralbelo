import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class contactmeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formatsDateTest: string[] = [
    'yyyy',
  ];
  
  dateNow : Date = new Date();

}
