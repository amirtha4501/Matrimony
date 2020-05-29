import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  detail = {

    // Personal details
    imageUrls:[
      'https://static.toiimg.com/photo/64001403.cms'
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
    "disabilities":"normal",

    // Horoscope
    "rasibox":"suk",
    
    // Family details
    "father_name":"Easwaran",
    "father_occupation":"Retired",
    "mother_name":"Neelavathy",
    "mother_occupation":"Business",
    "family_contact":"9944468585",
    "sibiling_count":"1",
    "family_status":"rich",
    "property":"10 Flat in Bangalore",
    "anydetails":"",

    // Partner Expectations
    "expected_qualification":"nil",
    "expected_place":"nil",
    "expected_income":"nil",
    "expected_caste":"brahmin",
    "expected_subcaste":"any",
    "age_difference":"5",
    "expected_height":"5-6",
    "expected_weight":"60",
    "expectations":"Pure vegetarian"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
