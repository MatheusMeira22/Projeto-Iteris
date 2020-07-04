import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgUrl = "https://vidasimples.co/wp-content/uploads/2019/03/jenn-evelyn-ann-112980-unsplash-1160x523.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
