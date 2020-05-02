import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/@core/services/users.service';
import { User } from 'src/app/@core/models/user';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/@components/dialogs/add/dialog.component';
import { UpdateComponent } from '../dialogs/update/update/update.component';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  columns = ["First Name", "Last Name", "Email", "Country", "Action"];
  index = ["first_name", "last_name", "email", "country"];

  filterText = '';
  users: User[] = [];

  name: string
  lastname: string
  email: string
  country: string

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.usersService.getUser().subscribe(
      data => {
        this.users = data;
      },
      err => console.log(err)
    );
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {
        first_name: this.name,
        last_name: this.lastname,
        email: this.email,
        country: this.country
      }
    })
    dialogRef.componentInstance.submitted.subscribe(user => {
      this.users.push(user);
      dialogRef.close();
    });
  }
  editDialog(): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '250px',
      data: {

      }
    })
    dialogRef.componentInstance.submitted.subscribe(user => {
      const updatedIndex = this.users.findIndex(x => x.first_name === user.first_name);
      this.users[updatedIndex] = user;
      dialogRef.close();
    });
  }



  delete(id) {
    console.log(id)
    this.usersService.removeUser(id)
      .subscribe(ok => this.users = this.users.filter(x => x.id !== id),
        err => console.log(err))
  }



}


