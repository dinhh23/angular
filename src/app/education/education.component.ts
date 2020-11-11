import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: string[] = [
    "MAX Technial Training",
    "Northern Kentucky University",
    "Dixie Heights High School"
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
