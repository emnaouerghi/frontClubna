import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/Services/activity.service';
import { PlanningService } from 'src/app/Services/planning.service';
import { SalleService } from 'src/app/Services/salle.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  sessions:any=[];
  activities:any=[];
  salles:any=[];
  displayDelete="none";
  displayAdd="none";
  displayEdit="none";
  currentIndex=-1;
  session:any;
  idActivity:any;
  idSalle:any;
  constructor(private planningService: PlanningService, private activityService:ActivityService,private salleService:SalleService ) { }

  ngOnInit(): void {
    this.readSessions();
    this.readActivities();
    this.readSalles();
    this.session={
      dateDp:new Date,
      heure:""
    }
  }
 
  readSessions(){
   this.planningService.getSessions().subscribe((data)=>{this.sessions=data;});
  }

  readActivities(){
    this.activityService.getActivities().subscribe((data)=>{this.activities=data;});
  }
  readSalles(){
    this.salleService.getSalles().subscribe((data)=>{this.salles=data;});
  }
  openDeleteModal(i:number){
    this.currentIndex=i;
    this.displayDelete="block";
  }
  delete() {
  // console.log(this.sessions[this.currentIndex].id);
  this.planningService.deleteSession(this.sessions[this.currentIndex].id);
  this.closeConfirm();
  console.log("delete successufely");
  }
  closeConfirm() {
    this.displayDelete = "none";
  }
  openAddModal(){
    this.displayAdd="block";
  }
  add(item:any){
  this.displayAdd="none";
  console.log(item);

  let datedebut=item.dateDp;
  let hour=item.heure;

  this.session.dateDp=datedebut;
  this.session.heure=hour;
  

   this.idActivity=item.activity;
   this.idSalle=item.salle;
   console.log(this.idActivity,this.idSalle);
   this.planningService.CreateSession(this.session,this.idActivity,this.idSalle).subscribe(data=>{console.log(data);});
  this.refresh();
  alert("session added successfuly !! ");

  }
  closeAddModal(){
    this.displayAdd="none";
  }
  refresh()
  {
    this.readSessions();
  }
}
