import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  profile: any = {}
  profileId: string;
  imgCount: number = 0;
  logId: number;
  isLogged: boolean = false;
  clicked: boolean = false;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.clicked = true;
    this.profileId = this.route.snapshot.paramMap.get('id');
    console.log(this.profileId);
    this.getProfileById(this.profileId);    
  }

  getProfileById(id) {
    const tok = localStorage.getItem('token');
    if (tok) {
      const token = atob(tok.split('.')[1])
      this.logId = JSON.parse(token).id;
    }

    if (this.logId) {
      this.isLogged = true;
    }


    this.profileService.getProfileById(id).subscribe(
      (profile) => {
        this.profile = profile;
        if (profile['image']) {
          profile['image'] = atob(profile['image']);
          this.imgCount += 1;
        }
        if (profile['image1']) {
          profile['image1'] = atob(profile['image1']);
          this.imgCount += 1;
        }
        if (profile['image2']) {
          profile['image2'] = atob(profile['image2']);
          this.imgCount += 1;
        }
      },
      (error) => { 
        if (error.status=='404') { alert('User not found') }      
      }
    )
  }

  viewContact() {
    this.clicked = true; 
    console.log('Store profile id', this.profileId);
  }

}
