import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { ListAbonnementsComponent } from './Views/list-abonnements/list-abonnements.component';
import { ListAbonnesComponent } from './Views/list-abonnes/list-abonnes.component';
import { ListActivitiesComponent } from './Views/list-activities/list-activities.component';
import { ListCoachsComponent } from './Views/list-coachs/list-coachs.component';
import { ListSallesComponent } from './Views/list-salles/list-salles.component';
import { ListUsersComponent } from './Views/list-users/list-users.component';
import { PlanningComponent } from './Views/planning/planning.component';

const routes: Routes = [
  {path:"",component:AcceuilComponent},
  {
    path: 'dashboard', component: DashbordComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path:"Users",
        component:ListUsersComponent
      },
      {
        path:"Abonnes",
        component:ListAbonnesComponent
      },
      {
        path:"Activities",
        component:ListActivitiesComponent
      },
      {
        path:"Salles",
        component:ListSallesComponent
      },
      {
        path:"Abonnements",
        component:ListAbonnementsComponent
      },
      {
        path:"Planning",
        component:PlanningComponent
      },
      {
        path:"Coachs",
        component:ListCoachsComponent
      }
    ]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
