import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';
import { ConfirmPasswordValidator } from 'src/app/ConfirmedValidator';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: any = [];
  displayDelete = "none";
  displayAdd = "none";
  displayEdit = "none";
  currentIndex = -1;
  user: any;
  editIndex = -1;
  form: FormGroup;
  constructor(private userService: UserService,private fb: FormBuilder) {
    this.form = fb.group({
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { 
      validator: ConfirmPasswordValidator('password', 'confirmPassword')
    })
   }

  ngOnInit(): void {
    this.readUsers();
    this.user = {
      nom: "",
      prenom: "",
      adresse: "",
      email: "",
      dateInscri: "",
      role: ""
}
  }
  readUsers() {
    this.userService.getUsers().subscribe((data) => { this.users = data; });
    // console.log(this.users);
  }
  refresh() {
    this.readUsers();
  }

  // add modal
  openAddModal() {
    this.displayAdd = "block";

  }
  add(item: User) {

    this.userService.CreateUser(item).subscribe((data) => { console.log(data); });
    alert("ajout user !!")
    this.displayAdd = "none";
    this.readUsers();
  }
  closeAddModal() {
    this.displayAdd = "none";
  }

  // edit modal 
  openEditModal(i: number) {
    console.log(i);
    this.user = this.userService.getUser(i).subscribe(data=>{ this.user=data});
    this.displayEdit = "block";
    this.editIndex=i;
  }
  closeEditModal() {
    this.displayEdit = "none";
  }
  edit(item: User) {
    this.displayEdit="none";
    console.log(item);
    this.userService.updateUser(this.editIndex,item).subscribe(data=>{ console.log(data)});
    alert("User updated successfuly !");
    this.readUsers();
  }
  // modal confirm delete
  openDeleteModal(index: number) {
    this.displayDelete = "block";
    this.currentIndex = index;
    console.log(index);
    console.log(this.users[this.currentIndex].id);
  }
  closeConfirm() {
    this.displayDelete = "none";
  }
  delete() {
    this.userService.deleteUser(this.users[this.currentIndex].id);
    this.closeConfirm();
    console.log("delete successufely");
    alert("User deleted successfuly !");
    this.readUsers();

  }
  get f (){
    return this.form.controls;
  }
}


