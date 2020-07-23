import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})

export class UpdateComponent implements OnInit {
  
  id: number;
  isUpdate: boolean = true;

  updateForm = this.fb.group({
    name: ['']
  })

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          console.log(this.id);
        }
      );
    this.updateProfile()
  }

  ngOnInit(): void {  
    this.updateProfile();
  }

  updateProfile() {
    this.updateForm.patchValue({
      name: 'Nancy',
    });
  }


}
