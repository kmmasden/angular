import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent {

  stats = [
    { value: 22, label: 'Users'},
    { value: 9999, label: 'Revenue'},
    { value: 50, label: 'Reviews'}
  ];

  items= [
    {image: '/assets/images/couch.jpeg', title: 'Couch', description: 'Great couch to sit on'},
    {image: '/assets/images/dresser.jpeg', title: 'Dresser', description: 'Great dresser to store your clothes'}

  ]
  constructor() {}

  ngOnInit() {}
}
