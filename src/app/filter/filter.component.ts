import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filters = {};
  profiles:any = []

  filterForm = new FormGroup({
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
    private fb: FormBuilder,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void { 
  }

  onSubmit() {
    this.filters = this.filterForm.value;
    this.profileService.getFilteredProfiles(this.filters).subscribe((res) => {
      console.log(res);
      console.log(this.filters);
    });
  }
}
