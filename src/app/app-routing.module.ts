import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { PatientListComponent } from './Components/patient/patient-list/patient-list.component';
import { PatientComponent } from './Components/patient/patient.component';
import { AuthGuardService } from './Services/Guard-Services/auth-guard.service';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './Components/features/products/products.component';
import { ServicesComponent } from './Components/features/services/services.component';
import { AboutComponent } from './Components/features/about/about.component';
import { ContactComponent } from './Components/features/contact/contact.component';
import { StockComponent } from './Components/features/stock/stock.component';
import { DoctorComponent } from './Components/features/doctor/doctor.component';
const routes: Routes = [
  {
    path:'',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path :'nav',
    component: NavComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'home',
    component: HomeComponent,
    canActivate: [AuthGuardService]
  },
  {
    path:'products',
    component: ProductsComponent ,
    canActivate: [AuthGuardService]
  },
  {
    path:'services',
    component: ServicesComponent ,
    canActivate: [AuthGuardService]
  },
  {
    path:'about',
    component: AboutComponent ,
    canActivate: [AuthGuardService]
  },
  {
    path:'contact',
    component: ContactComponent ,
    canActivate: [AuthGuardService]
  },
  {
    path:'stock',
    component: StockComponent ,
    canActivate: [AuthGuardService]

  },
  {
    path:'doctor',
    component: DoctorComponent ,
    canActivate: [AuthGuardService]

  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
