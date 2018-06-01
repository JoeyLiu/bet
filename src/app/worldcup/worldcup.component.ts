import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material';
import {MatDialogRef} from '@angular/material';
import {Worldcup_confirmComponent} from "../worldcup_confirm/worldcup_confirm.component";


@Component({
  selector: 'app-worldcup',
  templateUrl: './worldcup.component.html',
  styleUrls: ['./worldcup.component.css']
})
export class WorldcupComponent implements OnInit {
  displayedColumns = ['position', 'name', 'weight','symbol'];
  dataSource = ELEMENT_DATA;
  foods = [
    {value: '2018-6-15 23:00', viewValue: '中国 vs. 巴西'},
    {value: '2018-6-15 23:00', viewValue: '法国 vs. 德国'},
    {value: '2018-6-15 23:00', viewValue: '英格兰  vs. 意大利'}
  ];


  constructor(public thisDialogRef: MatDialogRef<Worldcup_confirmComponent>, @Inject(MAT_DIALOG_DATA) public data: string, public dialog: MatDialog) { }
  hide = true;
  ngOnInit() {

  }
  openDialog() {
    const dialogRef = this.dialog.open(Worldcup_confirmComponent, {
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
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: 'Hydrogen', weight: 10079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 40026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 90122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 120107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 140067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 159994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 189984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 201797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 229897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 269815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 280855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 309738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 390983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40078, symbol: 'Ca'},
];
