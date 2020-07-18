import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  

  updateForm = this.fb.group({
    name: ['']
  })

  constructor(private fb: FormBuilder) {
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
