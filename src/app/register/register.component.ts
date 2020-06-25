import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, MinLengthValidator } from '@angular/forms';
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
  storeImg: string;
  submitted = false;

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
    // console.log(files,'files');
    // console.log(files[0],'files[0]');
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
      this.storeImg = btoa(this.imgURL);
    }
  }

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) { 
    this.createRegForm();
  }

  ngOnInit(): void {
    this.submitted = false;
  }

  createRegForm() {
    this.regForm = this.fb.group({
      image: [''],
      name: ['',  [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      age:['', [Validators.required, Validators.min(18)]],
      dob:['', Validators.required],
      email:['', Validators.email],
      password:['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
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
      marital_status:['', Validators.required],
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
      contact_main:['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
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


  // convenience getter for easy access to form fields
  get f() { return this.regForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.detail = this.regForm.value;
    this.detail['image'] = this.storeImg;

    if (this.regForm.invalid) {
      return;
    }

    this.profileService.signUp(this.detail).subscribe((res) => {
      console.log('registered');
      // console.log(this.detail['image'], 'image');
    });
  }

}
