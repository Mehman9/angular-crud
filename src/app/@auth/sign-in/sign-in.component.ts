import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Auth } from '../auth';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  hide = true;
  formGroup: FormGroup;
  
  

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService:AuthService
 
    ) { }


  ngOnInit(): void {
    this.createForm();
  }



 

  login(){
  this.authService.login(this.formGroup.value);
  }


  createForm() {
    this.formGroup = this.fb.group({
      userEmail: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  getError(el) {
    switch (el) {
      case 'userEmail':
        if (this.formGroup.get('userEmail').hasError('required')) {
          return 'Email is required';
        }
        break;
      case 'password':
        if (this.formGroup.get('password').hasError('required')) {
          return 'Password is required';
        }
        break;
      default:
      return '';
    }


  }

}
