import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, MinLengthValidator } from '@angular/forms';
import { ProfileService } from '../services/profile.service';

declare var $: any;
var known_language_style = {
  "background-color": "#ddd",
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  detail = {};
  regForm: FormGroup;
  profiles:any;
  storeImg: string;
  submitted = false;
  // val = [];
  public imagePath;
  imgURL: any;
  public message: string;
 
  stars = [
    "Ashwini - 1",
    "Ashwini - 2",
    "Ashwini - 3",
    "Ashwini - 4",
    "Barani - 1",
    "Barani - 2",
    "Barani - 3",
    "Barani - 4",
    "Karthigai - 1",
    "Karthigai - 2",
    "Karthigai - 3",
    "Karthigai - 4",
    "Rohini - 1",
    "Rohini - 2",
    "Rohini - 3",
    "Rohini - 4",
    "Mirugasiridam - 1",
    "Mirugasiridam - 2",
    "Mirugasiridam - 3",
    "Mirugasiridam - 4",
    "Thiruvathirai - 1",
    "Thiruvathirai - 2",
    "Thiruvathirai - 3",
    "Thiruvathirai - 4",
    "Punarposam - 1",
    "Punarposam - 2",
    "Punarposam - 3",
    "Punarposam - 4",
    "Posam - 1",
    "Posam - 2",
    "Posam - 3",
    "Posam - 4",
    "Ailyam - 1",
    "Ailyam - 2",
    "Ailyam - 3",
    "Ailyam - 4",
    "Magam - 1",
    "Magam - 2",
    "Magam - 3",
    "Magam - 4",
    "Puram - 1",
    "Puram - 2",
    "Puram - 3",
    "Puram - 4",
    "Uthiram - 1",
    "Uthiram - 2",
    "Uthiram - 3",
    "Uthiram - 4",
    "Hastham - 1",
    "Hastham - 2",
    "Hastham - 3",
    "Hastham - 4",
    "Chithirai - 1",
    "Chithirai - 2",
    "Chithirai - 3",
    "Chithirai - 4",
    "Suvathi - 1",
    "Suvathi - 2",
    "Suvathi - 3",
    "Suvathi - 4",
    "Visagam - 1",
    "Visagam - 2",
    "Visagam - 3",
    "Visagam - 4",
    "Anusam - 1",
    "Anusam - 2",
    "Anusam - 3",
    "Anusam - 4",
    "Kettai - 1",
    "Kettai - 2",
    "Kettai - 3",
    "Kettai - 4",
    "Mulam - 1",
    "Mulam - 2",
    "Mulam - 3",
    "Mulam - 4",
    "Puradam - 1",
    "Puradam - 2",
    "Puradam - 3",
    "Puradam - 4",
    "Uthiradam - 1",
    "Uthiradam - 2",
    "Uthiradam - 3",
    "Uthiradam - 4",
    "Thiruvonam - 1",
    "Thiruvonam - 2",
    "Thiruvonam - 3",
    "Thiruvonam - 4",
    "Avitam - 1",
    "Avitam - 2",
    "Avitam - 3",
    "Avitam - 4",
    "Sathayam - 1",
    "Sathayam - 2",
    "Sathayam - 3",
    "Sathayam - 4",
    "Puratathi - 1",
    "Puratathi - 2",
    "Puratathi - 3",
    "Puratathi - 4",
    "Uthiratathi - 1",
    "Uthiratathi - 2",
    "Uthiratathi - 3",
    "Uthiratathi - 4",
    "Revathi - 1",
    "Revathi - 2",
    "Revathi - 3",
    "Revathi - 4"
  ]
  castes = [
    "Brahmin",
    "Chettiyar",
    "Desikar",
    "Devar/thevar",
    "Dhanak",
    "Gandla",
    "Ganiga",
    "Gramani",
    "Gounder",
    "Isai vellalar",
    "Julaha",
    "Kanakkan padanna",
    "Kandara",
    "Karukathar",
    "Khatik",
    "Kerala mudali",
    "Kasukara",
    "Karunneegar",
    "Mannan/velan/vannan",
    "Maruthuvar",
    "Meenavar",
    "Meghwal",
    "Mudaliyar",
    "Muthuraja",
    "Nadar",
    "Naicker",
    "Naidu",
    "Pannan",
    "Parkavakulam/udayar",
    "Poundra",
    "Pattusali",
    "Parvatha rajakulam",
    "Paswan/dusadh",
    "Pillai",
    "Pulaya/cheruman",
    "Reddy",
    "Rohit/ chamar",
    "Sc",
    "St",
    "Saliyar",
    "Samagar",
    "Sambava",
    "Satnami",
    "Senguntha mudaliyar",
    "Sonakar",
    "Senai thalaivar",
    "Telgupatti",
    "Thandan",
    "Vadambar",
    "Veera saivam",
    "Vanniakula kshatriyar/padaiyachi",
    "Valluvan",
    "Vaduvan",
    "Vellalar",
    "Vishwakarma",
    "Yadavar",
    "Yadava naidu",
    "Vokkaliga",
    "Vellan chettiar",
  ]

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
      this.storeImg = btoa(this.imgURL);
    }
  }

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) { this.createRegForm(); }

  ngOnInit(): void { 
    this.submitted = false;

    // // Type 1
    // $('select[multiple]').multiselect();
    // this.val = $('#known_language').multiselect({
    // columns: 1,
    // placeholder: 'Select Languages',
    // search: true
    // });

    // // Type 2
    // this.val = $('#known_language').multiselect().val(); 

    // Type 3
    // $('#known_language').change(function() {
    //   this.known_language = $(this).val();  
    // )}
  }
  
  createRegForm() {
    this.regForm = this.fb.group({
      image: [''],
      name: ['',  [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      age:['', [Validators.required, Validators.min(18), Validators.max(50)]],
      dob:['', [Validators.required]],
      email:['', [Validators.email]],
      password:['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      gender: ['', Validators.required],
      birth_time:[''],
      birth_place:[''],
      religion:['', [Validators.required]],
      caste:[''],
      subcaste:[''],
      gothram:[''],
      star:[''],
      qualification:[''],
      job:[''],
      workplace:[''],
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

  // knownLanguage() {
  //   $('select[multiple]').multiselect();
  //   this.val = $('#known_language').multiselect({
  //   columns: 1,
  //   placeholder: 'Select Languages',
  //   search: true
  //   });
    // $('button.multiselect.dropdown-toggle.btn.btn-default > span.multiselect-selected-text').css({ color : 'gray' });
    // $('button.multiselect.dropdown-toggle.btn.btn-default').css(known_language_style);
  // }

  onSubmit() {
    this.submitted = true;

    this.detail = this.regForm.value;
    console.log(this.detail);
    this.detail['image'] = this.storeImg;
    if (this.regForm.invalid) { return; }
    this.profileService.signUp(this.detail).subscribe((res) => {
      console.log('registered');
    });
  }

}
