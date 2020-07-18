import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { AboutComponent } from '../about/about.component';
import { ProfilesComponent } from '../profiles/profiles.component';
import { ProfileDetailComponent } from '../profile-detail/profile-detail.component';
import { PaymentsComponent } from '../payments/payments.component';
import { UpdateComponent } from '../update/update.component';

export const allroutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'about', component: AboutComponent},
    { path: 'profiles', component: ProfilesComponent},
    { path: 'profiledetail/:id', component: ProfileDetailComponent},
    { path: 'payments', component: PaymentsComponent},
    { path: 'update/:id', component: UpdateComponent }
  ];
  