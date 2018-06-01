import { Component, OnInit, Inject, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';


@Component({
  selector: 'app-worldcup_confirm',
  templateUrl: './worldcup_confirm.component.html',
  styleUrls: ['./worldcup_confirm.component.css']
})
export class Worldcup_confirmComponent implements OnInit {


  constructor(public thisDialogRef: MatDialogRef<Worldcup_confirmComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }
  hide = true;
  ngOnInit() {

  }
  onCloseConfirm() {
    this.thisDialogRef.close('Confirm');
  }
}
