import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-cv';
  name: string= "Hung Dinh";
  address: string = "11324 Melissa Court";
  cityStZip: string ="Cincinnati, OH 45251";
  phone: string = "859-391-8807";
  email: string ="dinhh23@gmail.com";
  displayEducation: boolean = true;
  

}

