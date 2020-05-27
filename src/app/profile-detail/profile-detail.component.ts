import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  detail = {
    imageUrls:[
      './assets/images/placeholder.jpg'
    ],
    "name":"kalki",
    "dob":"31-03-1995",
    "birthtime":"03:26",
    "birthplace":"kangeyam",
    "religion":"hindu",
    "caste":"brahmin",
    "subcaste":"brahacharanam",
    "gothram":"srivathsa",
    "star":"revathi",
    "qualification":"M.tech",
    "job":"Software Engineer",
    "workplace":"bangalore",
    "income":"100000",
    "height":"5.8",
    "weight":"72",
    "mothertongue":"tamil",
    "knownlanguage":"tamil, english",
    "nativity":"indian",
    "maritalstatus":"not married",
    "talents":"arivali",
    "hobbies":"reading, surfing",
    "vehicledriving":"two wheeler, four wheeler",
    "disabilities":"normal"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
