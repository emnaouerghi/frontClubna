import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Abonnement } from 'src/app/Models/abonnement';
import { AbonnementService } from 'src/app/Services/abonnement.service';
import { ActivityService } from 'src/app/Services/activity.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-list-abonnements',
  templateUrl: './list-abonnements.component.html',
  styleUrls: ['./list-abonnements.component.css']
})
export class ListAbonnementsComponent implements OnInit {
  abonnements:any=[];
  users:any=[];
  activities:any=[];
  displayAdd="none";
  displayEdit="none";
  displayDelete="none";
  index:number=0;
  index2: any;
  currentIndex:any;
  idUser=-1;
  idActivity=-1;
  abon: any;
  constructor(private abonService:AbonnementService,private toastr: ToastrService, private userService: UserService,private activityService:ActivityService) { }

  ngOnInit(): void {
    this.readAbonnements();
    this.readUsers();
    this.readActivities();

    this.abon = {
      dateD: new Date,
      dateF:new Date
      
}
  }
  readAbonnements(){
    this.abonService.getAbonnements().subscribe((data)=>{this.abonnements=data;});
    console.log(this.abonnements);
  }
  readUsers() {
    this.userService.getUsers().subscribe((data) => { this.users = data; });
     console.log(this.users);
  }
  readActivities() {
    this.activityService.getActivities().subscribe((data) => { this.activities = data; });
    // console.log(this.users);
  }

  refresh(){
    this.readAbonnements();
  }
  openAddModal(){
    this.displayAdd="block";


  }
  closeAddModal(){
    this.displayAdd="none";
  }
  add(item:any){
  //  console.log(item);
  //  console.log(item.user);
  //  console.log(item.activity);
    let datedebut=item.dateD;
    let datefin=item.dateF;
    
    this.abon.dateD=datedebut;
    this.abon.dateF=datefin;
     this.idUser=item.user;
     this.idActivity=item.activity;
     this.abonService.CreateAbonnement(this.abon,this.idUser,this.idActivity).subscribe(data=>{console.log(data);});

  }

  openDeleteModal(i:number){
    console.log("test click")
    this.currentIndex=i;
    this.displayDelete="block";
  }
  closeConfirm(){this.displayDelete="none";}
  
  delete(){
    console.log(this.abonnements[this.currentIndex].id);
    this.abonService.deleteAbonnement(this.abonnements[this.currentIndex].id);
     this.closeConfirm();
   //  this.refreshList();
    console.log("delete successufely");
    alert("abonnement deleted successufly !")
    
  }
  // edit modal
  openEditModal(){
  this.displayEdit="block";
  }
  edit(){}
  closeEditModal(){this.displayEdit="none";}

  //send mail
  sendMail(i:number){
    this.index2=i;
  console.log(this.abonnements[this.index2].id);
  this.abonService.sendMail(this.abonnements[this.index2].id);
  alert("mail send successfuly");
  }

  printPDF(i:number){
    this.index=i;
    console.log(this.abonnements[this.index].id);
    this.abonService.printPDF(this.abonnements[this.index].id).subscribe( x=>
      {
        const blob=new Blob([x],{type:'application/pdf'});
      /*  if(window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(blob);
          return;
        }*/
        const data=window.URL.createObjectURL(blob);
        const link=document.createElement('a');
        link.href=data;
        link.download="abonnement.pdf";
        link.dispatchEvent(new MouseEvent('click',{bubbles:true ,cancelable:true,view:window}));

        setTimeout(function(){
          window.URL.revokeObjectURL(data);
          link.remove();
        },100);
      });
    
      this.toastr.success("PDF printed with success !")
  }
 




}
