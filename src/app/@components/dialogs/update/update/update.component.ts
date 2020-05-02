import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/@core/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from 'src/app/@core/services/users.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  @Output() submitted = new EventEmitter<User>();

  formGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService: UsersService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.formGroup = this.fb.group({
      id: [Date.now()],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required]],

    });
  }



  getError(el) {
    switch (el) {
      case 'email':
        if (this.formGroup.get('email').hasError('required')) {
          return 'Email is required';
        }
        break;
      case 'first_name':
        if (this.formGroup.get('first_name').hasError('required')) {
          return 'First Name is required';
        }
        break;
      case 'last_name':
        if (this.formGroup.get('last_name').hasError('required')) {
          return 'Last Name is required';
        }
        break;
      case 'country':
        if (this.formGroup.get('country').hasError('required')) {
          return 'Country is required';
        }
        break;
      default:
        return '';
    }


  }

  userUpdate() {
    if (this.formGroup.valid) {
      this.userService.updateUser(this.formGroup.value)
        .subscribe(data => {
          this.submitted.emit(data);
        })
    }

  }
}



