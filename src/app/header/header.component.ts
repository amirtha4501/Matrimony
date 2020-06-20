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

  constructor(
    private fb: FormBuilder,
    private profileService: ProfileService
  ) { 
    this.createLoginForm();
  }

  ngOnInit(): void {
    
  }
  createLoginForm() {
    this.loginForm = this.fb.group({
      id:[''],
      password:[''],
    });
  }

  onSubmit() {
    this.detail = this.loginForm.value;
    this.profileService.signIn(this.detail).subscribe((res) => {
      console.log(res);
    });
  }

}
