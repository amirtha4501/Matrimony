import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  detail = {}
  regForm: FormGroup;
  profiles:any;
  formErrors = {
    'name': ''
  };

  public imagePath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) { 
    this.createRegForm();
  }

  ngOnInit(): void {
  }

  createRegForm() {
    this.regForm = this.fb.group({
      name: ['',  [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      age:[''],
      dob:[''],
      email:[''],
      password:[''],
      gender: ['', Validators.required],
      birth_time:[''],
      birth_place:[''],
      religion:[''],
      caste:[''],
      subcaste:[''],
      gothram:[''],
      star:[''],
      qualification:[''],
      job:[''],
      work_place:[''],
      income:[''],
      height:[''],
      weight:[''],
      mother_tongue:[''],
      known_language:[''],
      nativity:[''],
      marital_status:[''],
      talents:[''],
      hobbies:[''],
      vehicle_driving:[''],
      disabilities:[''],

    // Horoscope
    rasibox11:[''],
    rasibox12:[''],
    rasibox13:[''],
    rasibox14:[''],
    rasibox15:[''],
    rasibox16:[''],
    rasibox17:[''],
    rasibox18:[''],
    rasibox19:[''],
    rasibox110:[''],
    rasibox111:[''],
    rasibox112:[''],

    rasibox21:[''],
    rasibox22:[''],
    rasibox23:[''],
    rasibox24:[''],
    rasibox25:[''],
    rasibox26:[''],
    rasibox27:[''],
    rasibox28:[''],
    rasibox29:[''],
    rasibox210:[''],
    rasibox211:[''],
    rasibox212:[''],
    
    // Family details
    father_name:[''],
    father_occupation:[''],
    mother_name:[''],
    mother_occupation:[''],
    contact_main:[''],
    contact_sup:[''],
    sibiling_count:[''],
    family_status:[''],
    properties:[''],
    other_details:[''],

    // Partner Expectations
    expected_qualification:[''],
    expected_place:[''],
    expected_income:[''],
    expected_caste:[''],
    expected_subcaste:[''],
    expected_marital_status:[''],
    age_difference:[''],
    expected_height:[''],
    expected_weight:[''],
    expectations:['']

    });
  }

  onSubmit() {
    this.detail = this.regForm.value;
    this.profileService.signUp(this.detail).subscribe((res) => {
      console.log(res);
      console.log(this.detail);
    });
  }
}
