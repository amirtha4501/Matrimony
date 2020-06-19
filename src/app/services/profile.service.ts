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


  signIn() {
    return this.http.get('http://localhost:3000/auth/signin')
  }

  signUp(detail): Observable<Object>  {
    return this.http.post('http://localhost:3000/auth/signup', {
      name: detail.name,
      email: detail.email,
      password: detail.password,
      gender: detail.gender,
      dob: detail.dob,
      birth_time: detail.birth_time,
      birth_place: detail.birth_place,
      religion: detail.religion,
      caste: detail.caste,
      subcaste: detail.subcaste,
      contact_main: detail.contact_main,

    });
  }

  getProfiles() {
    return this.http.get('http://localhost:3000/profiles');
  }

  getProfileById(id: number) {
    return this.http.get('http://localhost:3000/profiles/' + id);
  }
}
