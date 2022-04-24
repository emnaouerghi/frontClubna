import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { SalleService } from 'src/app/Services/salle.service';

@Component({
  selector: 'app-list-salles',
  templateUrl: './list-salles.component.html',
  styleUrls: ['./list-salles.component.css']
})
export class ListSallesComponent implements OnInit {
salles:any=[];
displayAdd="none";
displayEdit="none";
displayDelete="none";
currentIndex:any;
  constructor(private salleService :SalleService) { }

  ngOnInit(): void {
    this.readSalles();
  }

  readSalles(){
    this.salleService.getSalles().subscribe((data)=>{this.salles=data;});
   // console.log(this.users);
  }
  openAddModal(){
    this.displayAdd="block";

  }
  add(){
  // service
  }
  closeAddModal(){
  this.displayAdd="none";
  }

  // delete modal
  openDeleteModal(index:number){
  this.displayDelete="block";
  this.currentIndex=index;
  }
  delete(){
    console.log(this.salles[this.currentIndex].id);
    this.salleService.deleteSalle(this.salles[this.currentIndex].id);
     this.closeConfirm();
   //  this.refreshList();
    console.log("delete successufely");

  }
  closeConfirm(){
    this.displayDelete="none";
  }
  // modal edit
  openEditModal(){
  this.displayEdit="block";
  }
  edit(){
    // service
  }
  closeEditModal(){
    this.displayEdit="none";
  }
}
