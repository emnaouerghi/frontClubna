import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-list-coachs',
  templateUrl: './list-coachs.component.html',
  styleUrls: ['./list-coachs.component.css']
})
export class ListCoachsComponent implements OnInit {
  users:any=[];
  displayDelete="none";
  currentIndex=-1;
    constructor(private userService : UserService) { }
  
    ngOnInit(): void {
      this.readUsers();
    }
    readUsers(){
      this.userService.getUsers().subscribe((data)=>{this.users=data;});
     // console.log(this.users);
    }
  
    // add modal
    openAddModal(){
  
    }
  
    // edit modal 
    openEditModal(){
  
    }
  // modal confirm delete
  openDeleteModal(index: number) {
    this.displayDelete = "block";
   //this.currentIndex=index;
   //console.log(index);
   //console.log(this.users[this.currentIndex]._id);
  }
  closeConfirm() {
    this.displayDelete = "none";
  
  }

}
