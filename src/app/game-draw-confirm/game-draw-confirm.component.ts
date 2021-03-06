import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';
import {MatButtonToggleGroupMultiple} from "@angular/material/typings/esm5/button-toggle";

@Component({
  selector: 'app-r113_confirm',
  templateUrl: './game-draw-confirm.component.html',
  styleUrls: ['./game-draw-confirm.component.css']
})
export class GameDrawConfirmComponent implements OnInit {
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

  constructor(public thisDialogRef: MatDialogRef<GameDrawConfirmComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }
  hide = true;
  ngOnInit() {

  }
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
  Cancel() {
    this.thisDialogRef.close('Cancel');
  }
}
