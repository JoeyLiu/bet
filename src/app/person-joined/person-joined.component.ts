import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {LoginComponent} from '../login/login.component';
import { PersonComponent} from '../person/person.component';

@Component({
  selector: 'app-person-joined',
  templateUrl: './person-joined.component.html',
  styleUrls: ['./person-joined.component.css']
})
export class PersonJoinedComponent implements OnInit {
  dialogResult;
  data;
  enabled: boolean;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.enabled = false;
  }
  openDialog() {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
      data: 'This text is passed into the dialog!'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }
  openPerson() {
    const dialogRef = this.dialog.open(PersonComponent, {
      width: '300px',
      data: 'This text is passed into the dialog!'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      this.dialogResult = result;
    });
  }
}
