import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})

export class UpdateComponent implements OnInit {
  
  id: number;
  isUpdate: boolean = true;

  detail = {};
  regForm: FormGroup;
  profiles:any;
  storeImg: string;
  storeImg1: string;
  storeImg2: string;
  submitted = false;
  registered = false;

  public imagePath;
  imgURL: any;
  imgURL1: any;
  imgURL2: any;
  public message: string;
  selectedItems: any = null;
  logId: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private profileService: ProfileService
  ) {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log(this.id);
        }
      );
  }

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

  preview1(files) {
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
      this.imgURL1 = reader.result; 
      this.storeImg1 = btoa(this.imgURL1);
    }
  }

  preview2(files) {
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
      this.imgURL2 = reader.result; 
      this.storeImg2 = btoa(this.imgURL2);
    }
  }

  resetFileUploader() { 
    this.imgURL = null;
    this.imgURL1 = null;
    this.imgURL2 = null;  

    // this.base64Img1 = null;
    // this.base64Img2 = null;
    // this.base64Img3 = null;
  }

  resetFileUploader1() { 
    this.imgURL1 = null;
    this.imgURL2 = null;

    // this.base64Img2 = null;
    // this.base64Img3 = null;
  }

  resetFileUploader2() { 
    this.imgURL2 = null;
    // this.base64Img3 = null;
  }


  ngOnInit(): void { 
    const tok = localStorage.getItem('token');
    if (tok) {
      console.log('kjhgfds', tok)
      this.updateProfile(tok);
    } 
  }

  updateProfile(tok) {
    const token = atob(tok.split('.')[1])
    this.logId = JSON.parse(token).id;
    console.log(this.logId, 'parse');

    if (this.id == this.logId && this.isUpdate) {
      this.profileService.getProfileById(this.id).subscribe((res) => {
        console.log(res['name']);

        this.imgURL = atob(res['image']);
        this.imgURL1 = atob(res['image1']);
        this.imgURL2 = atob(res['image2']);

      });
    }
  }

  onSubmit() {
    this.submitted = true;

    this.detail = this.regForm.value;
    console.log(this.detail);
    this.detail['image'] = this.storeImg;
    this.detail['image1'] = this.storeImg1;
    this.detail['image2'] = this.storeImg2;
    if (this.regForm.invalid) { return; }
    if (this.id != this.logId && !this.isUpdate) {
      this.profileService.signUp(this.detail).subscribe((res) => {
        console.log('registered');
        this.registered = true;
        alert('REGISTRATION SUCCESSFULLY COMPLETED!');
        this.router.navigate(['/profiles'])
        this.regForm.reset();
      });
    }
    else {
      this.detail['image'] = this.storeImg;
      this.detail['image1'] = this.storeImg1;
      this.detail['image2'] = this.storeImg2;
      this.profileService.updateAccount(this.id, this.detail).subscribe((res) => {
        alert('PROFILE UPDATED SUCCESSFULLY!');
      });
    }
  }
}
