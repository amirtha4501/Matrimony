import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  detail = {}
  loginForm: FormGroup;
  deleteForm: FormGroup;
  submitted = false;
  error: any;

  isLogged = false;
  id: number;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) { 
    this.createLoginForm();
    this.createDeletionForm();
  }

  ngOnInit(): void {
    this.checkUser();
  }

  checkUser() {
    let id = localStorage.getItem('id');
    this.id = JSON.parse(id);
    let data = localStorage.getItem('token');
    if(JSON.parse(data)) {
      this.isLogged = true;
    }
    else {
      this.isLogged = false;
    }
  }

  createLoginForm() {
    this.loginForm = this.fb.group({
      id:[''],
      password:[''],
    });
  }
  createDeletionForm() {
    this.deleteForm = this.fb.group({
      password: ['', [Validators.required]]
    })
  }

  viewMyProfile() {
    this.profileService.getProfileById(this.id).subscribe((res) => {
      console.log(res, 'res');
    });
  }

  onLogout() {
    localStorage.removeItem('token');
    this.ngOnInit();
    alert('Logged out!')
    console.log('Logged out');
  }

  get f() { return this.deleteForm.controls; }

  onDelete() {
    this.submitted = true;
    const delValue = this.deleteForm.value;
    console.log(delValue);
    const delId = JSON.parse(localStorage.getItem('id'))
    console.log(delId);
    this.profileService.getProfileById(delId).subscribe(
      res => {
        this.deleteForm.reset();
        if(res['password'] === delValue['password']) { 
          this.profileService.deleteAccount(delId).subscribe(res => { console.log(res, 'res del'); });
          localStorage.removeItem('token');
          localStorage.removeItem('id');
          this.ngOnInit();
          alert("Profile deleted!"); 
        }
        else { if(delValue['password'] !== '') { alert("Deletion rejected"); } }
      },
      err => { alert("Deletion rejected with " + err.status + "error"); }
    );
    
  }

  onSubmit() {
    this.detail = this.loginForm.value;
    this.id = this.detail['id'];
    console.log(this.detail['id'], 'login id');
    this.profileService.signIn(this.detail).subscribe(
      res => {
        console.log(res);
        this.isLogged = true;
        localStorage.setItem('id', JSON.stringify(this.id));
        localStorage.setItem('token', JSON.stringify(res));
        this.loginForm.reset();
      },
      err => {
        if (err.status == 401) {
          this.error = 'Unauthorized error occured. Member id or password is incorrect!';
          alert(this.error);
          this.loginForm.reset();
        }
        else {
          this.error = 'Something went wrong, please try again with valid Member Id!';
          alert(this.error);
          this.loginForm.reset();
        }
      }
    );
  }

}
