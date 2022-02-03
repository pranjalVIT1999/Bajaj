import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { PatientComponent } from './Components/patient/patient.component';
import { PatientListComponent } from './Components/patient/patient-list/patient-list.component';
import { PatientEditComponent } from './Components/patient/patient-edit/patient-edit.component';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AuthGuardService } from './Services/Guard-Services/auth-guard.service';
import { UserLoginService } from './Services/user-login.service';
import { AlertboxComponent } from './Components/alertbox/alertbox.component';
import { CookieService } from 'ngx-cookie-service';
import { AgePipePipe } from './Pipes/age-pipe.pipe';
import { NavComponent } from './nav/nav.component';
import { ProductsComponent } from './Components/features/products/products.component';
import { ServicesComponent } from './Components/features/services/services.component';
import { AboutComponent } from './Components/features/about/about.component';
import { ContactComponent } from './Components/features/contact/contact.component';
import { StockComponent } from './Components/features/stock/stock.component';
import { DoctorComponent } from './Components/features/doctor/doctor.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PatientComponent,
    PatientListComponent,
    PatientEditComponent,
    AlertboxComponent,
    AgePipePipe,
    NavComponent,
    ProductsComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    StockComponent,
    DoctorComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    HttpClientModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [UserLoginService, AuthGuardService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
