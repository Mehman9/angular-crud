import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


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
    private router: Router
 
    ) { }


  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  getError(el) {
    switch (el) {
      case 'email':
        if (this.formGroup.get('email').hasError('required')) {
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

  login(){
    this.router.navigate(['/dashboard'])
  }

}
