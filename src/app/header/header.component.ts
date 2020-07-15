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
  error: any;

  isLogged = false;
  id: number;

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) { 
    this.createLoginForm();
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
