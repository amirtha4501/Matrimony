import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  imgUrls = []

  constructor() { }

  ngOnInit(): void {
    this.imgUrls = [
      './assets/images/placeholder.jpg',
      './assets/images/placeholder.jpg',
      './assets/images/placeholder.jpg',
      './assets/images/placeholder.jpg',
      './assets/images/placeholder.jpg',
      './assets/images/placeholder.jpg',
      './assets/images/placeholder.jpg',
      './assets/images/placeholder.jpg',
      './assets/images/placeholder.jpg',
      './assets/images/placeholder.jpg',
      './assets/images/placeholder.jpg',
      './assets/images/placeholder.jpg'
    ]
  }

}
