import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  profiles:any = [];

  constructor(
    private profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.getProfiles();
  }

  getProfiles() {
    this.profileService.getProfiles().subscribe(
      (profiles) => {
        this.profiles = profiles;
        this.profiles.forEach(profile => {
          profile['image'] = atob(profile['image']);
        });    
      },
      (error) => { 
        if (error.status=='404') { alert('User not found') }      
      }
    );
  }
}
