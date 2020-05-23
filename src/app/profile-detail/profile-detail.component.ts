import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

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
