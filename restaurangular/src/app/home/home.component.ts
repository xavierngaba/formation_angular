import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restaurant = 'assets/images/restaurant.jpg';
  barbecue = 'assets/images/barbecue.jpg';
  drinks = 'assets/images/drinks.jpg';

  constructor() { }

  ngOnInit() {
  }

}
