import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  profile: any = {}
  // id$: Observable<string>;
  id: string;
  imgCount: number = 0;
  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // this.id$ = this.route.paramMap.pipe(map(paramMap => paramMap.get('id')));
    this.id = this.route.snapshot.paramMap.get('id');
    
    console.log(this.id);
    this.getProfileById(this.id);
  }

  getProfileById(id) {
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

}
