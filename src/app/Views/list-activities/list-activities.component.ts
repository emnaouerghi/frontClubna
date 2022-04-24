import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/Models/activity';
import { ActivityService } from 'src/app/Services/activity.service';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit {
activities:any=[];
displayAdd="none";
displayEdit="none";
displayDelete="none";
currentIndex:any;
activity:any;
editIndex=-1;
  constructor(private activityService:ActivityService) { }

  ngOnInit(): void { this.readActivities();
    this.activity = {
      nom: "",
      description: "",
      prix: 0.0,
      nbHeure: ""
}
  }
  readActivities(){
    this.activityService.getActivities().subscribe((data)=>{this.activities=data;});
   // console.log(this.users);
  }
  refresh(){
    this.readActivities();
  }
  openAddModal(){
    this.displayAdd="block";


  }
  closeAddModal(){
    this.displayAdd="none";
  }
  add(item:Activity){
    // service
  //  console.log(item);
    this.activityService.CreateActivity(item).subscribe((data)=>{console.log(data);});
    this.displayAdd="none";
    alert("ajout activity !!")
    this.readActivities();
  }
  openDeleteModal(index:number){
this.displayDelete="block";
this.currentIndex=index;
  }
  closeConfirm(){this.displayDelete="none";}
  delete(){
    console.log(this.activities[this.currentIndex].id);
  this.activityService.deleteActivity(this.activities[this.currentIndex].id);
   this.closeConfirm();
 //  this.refreshList();
  console.log("delete successufely");
  this.readActivities();
    
  }
  // edit modal
  openEditModal(id:number){
  this.displayEdit="block";
  this.activity = this.activityService.getActivity(id).subscribe(data=>{ this.activity=data});
  this.editIndex=id;
  }
  edit(item:Activity){
    this.displayEdit="none";
    console.log(item);
    this.activityService.updateActivity(this.editIndex,item).subscribe(data=>{ console.log(data)});
    alert("User updated successfuly !");
    this.readActivities();
  }
  closeEditModal(){this.displayEdit="none";}
}
