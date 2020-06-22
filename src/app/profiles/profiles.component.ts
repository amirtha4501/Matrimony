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
    this.imgUrls = [
      'https://fsa.zobj.net/crop.php?r=pluw5Ab02pVkQ8bS6cea85aKRdx7854Kag5ADokvgwFil3jhAjUe6PH4POdNqgU6HKvHgeuBK9B72Tr4szcXzKPR-G3OnIWPrWCcC8J8_yr5VB_bBC3f837ICQhSV6Lg0PzCjISOH69bKwPI',
      'https://tamilcinistars.files.wordpress.com/2019/02/upcoming-teen-sensation-new-actress-ammu-abhirami-hot-sexy-half-saree-stills_raatsasan-movie-teeen-lovely-pictures.jpg?w=454&h=569&crop=1',
      'https://i0.wp.com/imgx.in/wp-content/uploads/2020/01/Actress-Ammu-Abhirami-Images-Asuran-heroine-HD-Photos-Latest-Pictures-photo-shoot-Stills-by-imgx-001.jpg?fit=600%2C800&ssl=1',
      'https://i.pinimg.com/564x/5e/83/3b/5e833bf3338cd6204beb3564a997c41a.jpg',
      'https://images.cinemaexpress.com/uploads/user/imagelibrary/2020/3/10/original/Amritha-Images-1.jpeg',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Kalki_Koechlin_launches_beautifulhomes.jpg/220px-Kalki_Koechlin_launches_beautifulhomes.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxtOabJ0nUnN4iVhm3isg7QDi6EUCEVMYwpTkGReT9PprQpElq&usqp=CAU',
      'https://www.cinemapettai.com/wp-content/uploads/2020/02/amirtha-4.jpg',
      'https://cdn.sharechat.com/amirthaaiyer_1c4887e9_1580923904619_cmprsd_40.jpg'
    ]
    // alert(localStorage.getItem('filters'));
    // console.log(JSON.parse(localStorage.getItem('filters')));
    // if(!localStorage.getItem('filters')) {
      this.getProfiles();
  //   }
  //   else {
  //     this.profileService.getFilteredProfiles(localStorage.getItem('filters')).subscribe((filteredProfiles) => {
  //       console.log(filteredProfiles, 'filtered profiles');
  //       this.filteredProfiles = filteredProfiles;
  //     }); 
  //   }
  }

  getProfiles() {
    this.profileService.getProfiles().subscribe(
      (profiles) => this.profiles = profiles,
      (error) => { 
        if (error.status=='404') { alert('User not found') }      
      }
    );
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
      console.log(filteredProfiles, 'filtered profiles');
      this.filteredProfiles = filteredProfiles;
    });
  }
}
