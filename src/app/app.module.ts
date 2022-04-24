import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListAbonnesComponent } from './Views/list-abonnes/list-abonnes.component';
import { ListActivitiesComponent } from './Views/list-activities/list-activities.component';
import { PlanningComponent } from './Views/planning/planning.component';
import { ListAbonnementsComponent } from './Views/list-abonnements/list-abonnements.component';
import { ListSallesComponent } from './Views/list-salles/list-salles.component';
import { ListCoachsComponent } from './Views/list-coachs/list-coachs.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListUsersComponent } from './Views/list-users/list-users.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    DashbordComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    ListAbonnesComponent,
    ListActivitiesComponent,
    PlanningComponent,
    ListAbonnementsComponent,
    ListSallesComponent,
    ListCoachsComponent,
    AcceuilComponent,
    ListUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
     HttpClientModule,
   	BrowserAnimationsModule,
  	ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
