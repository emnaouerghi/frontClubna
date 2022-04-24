import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {

  constructor(private router:Router) { }
  displayStyle1 = "none";
  displayStyle2 = "none";
  loginForm: FormGroup = new FormGroup(
    {email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),}
  );
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    'phone': new FormControl(
      null,
      [
        Validators.required,
        Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
      ]),
    birthDate: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  });
  ngOnInit(): void {
  }
  openPopupSignIn() {
    this.displayStyle1 = "block";
  }
  closePopupSignIn(){
    this.displayStyle1 = "none";
  }
  // sign up 

  openPopupSignUp() {
    this.displayStyle2 = "block";
  }
  closePopupSignUp(){
    this.displayStyle2 = "none";
  }
  goto(){
  this.router.navigate(['/dashboard']);
  }
}
