import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  
  imgUrls = []
  profiles:any = [];
  filteredProfiles: any= [];
  isFilter: Boolean = false;
  filters = {};
  filterForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    gender: new FormControl(''),
    caste: new FormControl(''),
    from_age: new FormControl(''),
    to_age: new FormControl(''),
    from_height: new FormControl(''),
    to_height: new FormControl(''),
    from_weight: new FormControl(''),
    to_weight: new FormControl('')
  })


  constructor(
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.trackChanges();
  }

  trackChanges() {
    let data = localStorage.getItem('filters');

    if(JSON.parse(data)) {
      this.isFilter = true;
      this.getFilteredProfiles(data);
    }
    else {
      this.isFilter = false;
      this.getProfiles();
    }
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

  getFilteredProfiles(data) {
    this.filterForm.patchValue(JSON.parse(data));

    this.profileService.getFilteredProfiles(JSON.parse(data)).subscribe((filteredProfiles) => {
      this.filteredProfiles = filteredProfiles;
      
      this.filteredProfiles.forEach(profile => {
        profile['image'] = atob(profile['image']);
      });
    });
  }

  onSubmit() {
    this.filters = this.filterForm.value;

    localStorage.setItem('filters', JSON.stringify(this.filters));
    
    if(this.filters != {}) {
      this.isFilter = true;
    } else {
      this.isFilter = false;
    }
    this.profileService.getFilteredProfiles(this.filters).subscribe((filteredProfiles) => {
      this.filteredProfiles = filteredProfiles;
    });
    this.trackChanges();

  }


}
