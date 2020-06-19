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
      (profile) => this.profile = profile,
      (error) => { 
        if (error.status=='404') { alert('User not found') }      
      }
    )
  }

}
