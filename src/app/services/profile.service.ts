import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }


  signIn(detail): Observable<Object> {
    if (detail.id.includes('@')) {
      return this.http.post('http://localhost:3000/auth/signin', {
        email: detail.id,
        password: detail.password
      });
    } else {
      return this.http.post('http://localhost:3000/auth/signin', {
        id: detail.id,
        password: detail.password
      });
    }

  }

  signUp(detail): Observable<Object> {
    return this.http.post('http://localhost:3000/auth/signup', {
      name: detail.name,
      email: detail.email,
      password: detail.password,
      gender: detail.gender,
      age: detail.age,
      dob: detail.dob,
      birth_time: detail.birth_time,
      birth_place: detail.birth_place,
      religion: detail.religion,
      caste: detail.caste,
      subcaste: detail.subcaste,
      gothram: detail.gothram,
      star: detail.star,
      qualification: detail.qualification,
      job: detail.job,
      work_place: detail.work_place,
      income: detail.income,
      height: detail.height,
      weight: detail.weight,
      marital_status: detail.marital_status,
      talents: detail.talents,
      hobbies: detail.hobbies,
      vehicle_driving: detail.vehicle_driving,
      disabilities: detail.disabilities,

      rasibox11: detail.rasibox11,
      rasibox12: detail.rasibox12,
      rasibox13: detail.rasibox13,
      rasibox14: detail.rasibox14,
      rasibox15: detail.rasibox15,
      rasibox16: detail.rasibox16,
      rasibox17: detail.rasibox17,
      rasibox18: detail.rasibox18,
      rasibox19: detail.rasibox19,
      rasibox110: detail.rasibox110,
      rasibox111: detail.rasibox111,
      rasibox112: detail.rasibox112,

      rasibox21: detail.rasibox21,
      rasibox22: detail.rasibox22,
      rasibox23: detail.rasibox23,
      rasibox24: detail.rasibox24,
      rasibox25: detail.rasibox25,
      rasibox26: detail.rasibox26,
      rasibox27: detail.rasibox27,
      rasibox28: detail.rasibox28,
      rasibox29: detail.rasibox29,
      rasibox210: detail.rasibox210,
      rasibox211: detail.rasibox211,
      rasibox212: detail.rasibox212,

      father_name: detail.father_name,
      father_occupation: detail.father_occupation,
      mother_name: detail.mother_name,
      mother_occupation: detail.mother_occupation,
      contact_main: detail.contact_main,
      contact_sup: detail.contact_sup,
      sibiling_count: detail.sibiling_count,
      family_status: detail.family_status,
      properties: detail.properties,
      other_details: detail.other_details,

      expected_qualification: detail.expected_qualification,
      expected_place: detail.expected_place,
      expected_income: detail.expected_income,
      expected_caste: detail.expected_caste,
      expected_subcaste: detail.expected_subcaste,
      expected_marital_status: detail.expected_marital_status,
      age_difference: detail.age_difference,
      expected_height: detail.expected_height,
      expected_weight: detail.expected_weight,
      expectations: detail.expectations,

    });
  }

  getProfiles() {
    return this.http.get('http://localhost:3000/profiles');
  }

  getProfileById(id: number) {
    return this.http.get('http://localhost:3000/profiles/' + id);
  }
}
