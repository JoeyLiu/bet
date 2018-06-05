import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import { WorldcupComponent} from "../worldcup/worldcup.component";
import { R3dComponent} from "../r3d/r3d.component";
import { R113Component} from "../r113/r113.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog_worldcup() {
    const dialogRef = this.dialog.open(WorldcupComponent, {
      width: '600px',
      data: 'This text is passed into the dialog!'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      // this.dialogResult = result;
    });
  }
  openDialog_3d() {
    const dialogRef = this.dialog.open(R3dComponent, {
      width: '600px',
      data: 'This text is passed into the dialog!'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      // this.dialogResult = result;
    });
  }
  openDialog_113() {
    const dialogRef = this.dialog.open(R113Component, {
      width: '600px',
      data: 'This text is passed into the dialog!'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      // this.dialogResult = result;
    });
  }
}
