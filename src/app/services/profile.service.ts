import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }


  signIn(detail): Observable<Object> {
    if (detail.id.includes('@')) {
      return this.http.post(`${environment.api}/auth/signin`, {
        email: detail.id,
        password: detail.password
      });
    } else {
      return this.http.post(`${environment.api}/auth/signin`, {
        id: detail.id,
        password: detail.password
      });
    }

  }

  signUp(detail): Observable<Object> {
    
    if (detail.vehicle_driving) {
      detail.vehicle_driving = detail.vehicle_driving.toString();
    }
    if (detail.expected_marital_status) {
      detail.expected_marital_status = detail.expected_marital_status.toString();
    }
    if (detail.age_difference) {
      detail.age_difference = detail.age_difference.toString();
    }

    return this.http.post(`${environment.api}/auth/signup`, {
      image: detail.image,
      image1: detail.image1,
      image2: detail.image2,
      name: detail.name.toLowerCase() || detail.name,
      email: detail.email,
      password: detail.password,
      gender: detail.gender.toLowerCase() || detail.gender,
      age: detail.age,
      dob: detail.dob,
      birth_time: detail.birth_time,
      birth_place: detail.birth_place.toLowerCase() || detail.birth_place,
      religion: detail.religion.toLowerCase() || detail.religion,
      division: detail.division.toLowerCase() || detail.division,
      caste: detail.caste.toLowerCase() || detail.caste,
      subcaste: detail.subcaste.toLowerCase() || detail.subcaste,
      gothram: detail.gothram.toLowerCase() || detail.gothram,
      star: detail.star.toLowerCase() || detail.star,
      rasi: detail.rasi.toLowerCase() || detail.rasi,
      qualification: detail.qualification.toLowerCase() || detail.qualification,
      job: detail.job.toLowerCase() || detail.job,
      workplace: detail.workplace.toLowerCase() || detail.workplace,
      income: detail.income,
      height: detail.height,
      weight: detail.weight,
      mother_tongue: detail.mother_tongue.toLowerCase() || detail.mother_tongue,
      known_language: detail.known_language.toLowerCase() || detail.known_language,
      marital_status: detail.marital_status.toLowerCase() || detail.marital_status,
      talents: detail.talents.toLowerCase() || detail.talents,
      hobbies: detail.hobbies.toLowerCase() || detail.hobbies,
      vehicle_driving: detail.vehicle_driving,
      disabilities: detail.disabilities.toLowerCase() || detail.disabilities,

      rasibox11: detail.rasibox11.toLowerCase() || detail.rasibox11,
      rasibox12: detail.rasibox12.toLowerCase() || detail.rasibox12,
      rasibox13: detail.rasibox13.toLowerCase() || detail.rasibox13,
      rasibox14: detail.rasibox14.toLowerCase() || detail.rasibox14,
      rasibox15: detail.rasibox15.toLowerCase() || detail.rasibox15,
      rasibox16: detail.rasibox16.toLowerCase() || detail.rasibox16,
      rasibox17: detail.rasibox17.toLowerCase() || detail.rasibox17,
      rasibox18: detail.rasibox18.toLowerCase() || detail.rasibox18,
      rasibox19: detail.rasibox19.toLowerCase() || detail.rasibox19,
      rasibox110: detail.rasibox110.toLowerCase() || detail.rasibox110,
      rasibox111: detail.rasibox111.toLowerCase() || detail.rasibox111,
      rasibox112: detail.rasibox112.toLowerCase() || detail.rasibox112,

      rasibox21: detail.rasibox21.toLowerCase() || detail.rasibox21,
      rasibox22: detail.rasibox22.toLowerCase() || detail.rasibox22,
      rasibox23: detail.rasibox23.toLowerCase() || detail.rasibox23,
      rasibox24: detail.rasibox24.toLowerCase() || detail.rasibox24,
      rasibox25: detail.rasibox25.toLowerCase() || detail.rasibox25,
      rasibox26: detail.rasibox26.toLowerCase() || detail.rasibox26,
      rasibox27: detail.rasibox27.toLowerCase() || detail.rasibox27,
      rasibox28: detail.rasibox28.toLowerCase() || detail.rasibox28,
      rasibox29: detail.rasibox29.toLowerCase() || detail.rasibox29,
      rasibox210: detail.rasibox210.toLowerCase() || detail.rasibox210,
      rasibox211: detail.rasibox211.toLowerCase() || detail.rasibox211,
      rasibox212: detail.rasibox212.toLowerCase() || detail.rasibox212,

      father_name: detail.father_name.toLowerCase() || detail.father_name,
      father_occupation: detail.father_occupation.toLowerCase() || detail.father_occupation,
      mother_name: detail.mother_name.toLowerCase() || detail.mother_name,
      mother_occupation: detail.mother_occupation.toLowerCase() || detail.mother_occupation,
      contact_main: detail.contact_main,
      contact_sup: detail.contact_sup,
      sibiling_count: detail.sibiling_count,
      family_status: detail.family_status.toLowerCase() || detail.family_status,
      properties: detail.properties.toLowerCase() || detail.properties,
      other_details: detail.other_details.toLowerCase() || detail.other_details,

      expected_qualification: detail.expected_qualification.toLowerCase() || detail.expected_qualification,
      expected_place: detail.expected_place.toLowerCase() || detail.expected_place,
      expected_income: detail.expected_income,
      expected_caste: detail.expected_caste.toLowerCase() || detail.expected_caste,
      expected_subcaste: detail.expected_subcaste.toLowerCase() || detail.expected_subcaste,
      expected_marital_status: detail.expected_marital_status,
      age_difference: detail.age_difference,
      expected_height: detail.expected_height,
      expected_weight: detail.expected_weight,
      expectations: detail.expectations.toLowerCase() || detail.expectations,

    });
  }

  getProfiles() {
    return this.http.get(`${environment.api}/profiles`);
  }

  getFilteredProfiles(filters) {
    
    let params = new HttpParams();

    if(filters.id) {
      params=params.append('id', filters.id);
    } 

    if(filters.name) {
      params=params.append('name', filters.name.toLowerCase() || filters.name);
    } 

    if(filters.gender) {
      params=params.append('gender', filters.gender.toLowerCase() || filters.gender);
    } 
    if(filters.caste) {
      params=params.append('caste', filters.caste.toLowerCase() || filters.caste);
    }
    if(filters.from_age) {
      params=params.append('from_age', filters.from_age);
    }
    if(filters.to_age) {
      params=params.append('to_age', filters.to_age);
    }
    if(filters.from_height) {
      params=params.append('from_height', filters.from_height);
    }
    if(filters.to_height) {
      params=params.append('to_height', filters.to_height);
    }
    if(filters.from_weight) {
      params=params.append('from_weight', filters.from_weight);
    }
    if(filters.to_weight) {
      params=params.append('to_weight', filters.to_weight);
    }

    let url = `${environment.api}/profiles?` + params;
    console.log(url);
    return this.http.get(url);
  }

  getProfileById(id: number) {
    return this.http.get(`${environment.api}/profiles/` + id);
  }

  updateAccount(id: number, detail) {
    if (detail.vehicle_driving) {
      detail.vehicle_driving = detail.vehicle_driving.toString();
    }
    if (detail.expected_marital_status) {
      detail.expected_marital_status = detail.expected_marital_status.toString();
    }
    if (detail.age_difference) {
      detail.age_difference = detail.age_difference.toString();
    }
    return this.http.patch(`${environment.api}/profiles/` + id, {
        image: detail.image,
        image1: detail.image1,
        image2: detail.image2,
        name: detail.name.toLowerCase() || detail.name,
        email: detail.email,
        password: detail.password,
        gender: detail.gender.toLowerCase() || detail.gender,
        age: detail.age,
        dob: detail.dob,
        birth_time: detail.birth_time,
        birth_place: detail.birth_place.toLowerCase() || detail.birth_place,
        religion: detail.religion.toLowerCase() || detail.religion,
        division: detail.division.toLowerCase() || detail.division,
        caste: detail.caste.toLowerCase() || detail.caste,
        subcaste: detail.subcaste.toLowerCase() || detail.subcaste,
        gothram: detail.gothram.toLowerCase() || detail.gothram,
        star: detail.star.toLowerCase() || detail.star,
        rasi: detail.rasi.toLowerCase() || detail.rasi,
        qualification: detail.qualification.toLowerCase() || detail.qualification,
        job: detail.job.toLowerCase() || detail.job,
        workplace: detail.workplace.toLowerCase() || detail.workplace,
        income: detail.income,
        height: detail.height,
        weight: detail.weight,
        mother_tongue: detail.mother_tongue.toLowerCase() || detail.mother_tongue,
        known_language: detail.known_language.toLowerCase() || detail.known_language,
        marital_status: detail.marital_status.toLowerCase() || detail.marital_status,
        talents: detail.talents.toLowerCase() || detail.talents,
        hobbies: detail.hobbies.toLowerCase() || detail.hobbies,
        vehicle_driving: detail.vehicle_driving,
        disabilities: detail.disabilities.toLowerCase() || detail.disabilities,
  
        rasibox11: detail.rasibox11.toLowerCase() || detail.rasibox11,
        rasibox12: detail.rasibox12.toLowerCase() || detail.rasibox12,
        rasibox13: detail.rasibox13.toLowerCase() || detail.rasibox13,
        rasibox14: detail.rasibox14.toLowerCase() || detail.rasibox14,
        rasibox15: detail.rasibox15.toLowerCase() || detail.rasibox15,
        rasibox16: detail.rasibox16.toLowerCase() || detail.rasibox16,
        rasibox17: detail.rasibox17.toLowerCase() || detail.rasibox17,
        rasibox18: detail.rasibox18.toLowerCase() || detail.rasibox18,
        rasibox19: detail.rasibox19.toLowerCase() || detail.rasibox19,
        rasibox110: detail.rasibox110.toLowerCase() || detail.rasibox110,
        rasibox111: detail.rasibox111.toLowerCase() || detail.rasibox111,
        rasibox112: detail.rasibox112.toLowerCase() || detail.rasibox112,
  
        rasibox21: detail.rasibox21.toLowerCase() || detail.rasibox21,
        rasibox22: detail.rasibox22.toLowerCase() || detail.rasibox22,
        rasibox23: detail.rasibox23.toLowerCase() || detail.rasibox23,
        rasibox24: detail.rasibox24.toLowerCase() || detail.rasibox24,
        rasibox25: detail.rasibox25.toLowerCase() || detail.rasibox25,
        rasibox26: detail.rasibox26.toLowerCase() || detail.rasibox26,
        rasibox27: detail.rasibox27.toLowerCase() || detail.rasibox27,
        rasibox28: detail.rasibox28.toLowerCase() || detail.rasibox28,
        rasibox29: detail.rasibox29.toLowerCase() || detail.rasibox29,
        rasibox210: detail.rasibox210.toLowerCase() || detail.rasibox210,
        rasibox211: detail.rasibox211.toLowerCase() || detail.rasibox211,
        rasibox212: detail.rasibox212.toLowerCase() || detail.rasibox212,
  
        father_name: detail.father_name.toLowerCase() || detail.father_name,
        father_occupation: detail.father_occupation.toLowerCase() || detail.father_occupation,
        mother_name: detail.mother_name.toLowerCase() || detail.mother_name,
        mother_occupation: detail.mother_occupation.toLowerCase() || detail.mother_occupation,
        contact_main: detail.contact_main,
        contact_sup: detail.contact_sup,
        sibiling_count: detail.sibiling_count,
        family_status: detail.family_status.toLowerCase() || detail.family_status,
        properties: detail.properties.toLowerCase() || detail.properties,
        other_details: detail.other_details.toLowerCase() || detail.other_details,
  
        expected_qualification: detail.expected_qualification.toLowerCase() || detail.expected_qualification,
        expected_place: detail.expected_place.toLowerCase() || detail.expected_place,
        expected_income: detail.expected_income,
        expected_caste: detail.expected_caste.toLowerCase() || detail.expected_caste,
        expected_subcaste: detail.expected_subcaste.toLowerCase() || detail.expected_subcaste,
        expected_marital_status: detail.expected_marital_status,
        age_difference: detail.age_difference,
        expected_height: detail.expected_height,
        expected_weight: detail.expected_weight,
        expectations: detail.expectations.toLowerCase() || detail.expectations,
    });
  }

  deleteAccount(id: number) {
    console.log(`${environment.api}/profiles/` + id);
    return this.http.delete(`${environment.api}/profiles/` + id);
  }
}
