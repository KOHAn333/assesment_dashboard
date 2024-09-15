import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cJson:any={
    "All":"",
    "PEO1": "Employeability",
    "PEO2": "Entrepreneur",
    "PEO3": "Research & Development",
    "PEO4": "Contributor to business world",
    "PEO5": "Contribution to society"
  }
  keys: any; 

  constructor() { } 

  ngOnInit(): void {
    console.log("chsibbbb",this.cJson);
    this.keys=Object.keys(this.cJson);
    console.log("Formated Keys",this.keys);
  }

}
