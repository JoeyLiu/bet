import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {MatDialogRef} from '@angular/material';
import {Worldcup_confirmComponent} from "../worldcup_confirm/worldcup_confirm.component";
import { R113_confirmComponent} from "../r113_confirm/r113_confirm.component";

@Component({
  selector: 'app-r113',
  templateUrl: './r113.component.html',
  styleUrls: ['./r113.component.css']
})
export class R113Component implements OnInit {
  displayedColumns = ['position', 'time', 'weight'];
  dataSource = ELEMENT_DATA;
  numbers = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '3'},
    {value: '5', viewValue: '3'},
    {value: '6', viewValue: '3'},
    {value: '7', viewValue: '3'},
    {value: '8', viewValue: '3'},
    {value: '9', viewValue: '3'},

  ];


  constructor(public thisDialogRef: MatDialogRef<R113_confirmComponent>, @Inject(MAT_DIALOG_DATA) public data: string, public dialog: MatDialog) { }
  hide = true;
  ngOnInit() {

  }
  openDialog() {
    const dialogRef = this.dialog.open(R113_confirmComponent, {
      width: '300px',
      data: 'This text is passed into the dialog!'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog closed: ${result}`);
      // this.dialogResult = result;
    });
  }
}
export interface Element {
  time: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, time: '2018-6-15 23:13', weight: 10079, symbol: 'H'},
  {position: 2, time: '2018-6-15 23:13', weight: 40026, symbol: 'He'},
  {position: 3, time: '2018-6-15 23:13', weight: 6941, symbol: 'Li'},
  {position: 4, time: '2018-6-15 23:13', weight: 90122, symbol: 'Be'},
  {position: 5, time: '2018-6-15 23:13', weight: 10811, symbol: 'B'},
  {position: 6, time: '2018-6-15 23:13', weight: 120107, symbol: 'C'},
  {position: 7, time: '2018-6-15 23:13', weight: 140067, symbol: 'N'},
  {position: 8, time: '2018-6-15 23:13', weight: 159994, symbol: 'O'},
  {position: 9, time: '2018-6-15 23:13', weight: 189984, symbol: 'F'},
  {position: 10, time: '2018-6-15 23:13', weight: 201797, symbol: 'Ne'},
  {position: 11, time: '2018-6-15 23:13', weight: 229897, symbol: 'Na'},
];
