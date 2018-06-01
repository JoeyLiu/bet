import { Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-Publish',
  templateUrl: './Publish.component.html',
  styleUrls: ['./Publish.component.css']
})
export class PublishComponent implements OnInit {
  games = [
    {value: '世界杯', viewValue: '世界杯'},
    {value: '抢币', viewValue: '抢币'},
    {value: '3D彩', viewValue: '3D彩'},
    {value: '11选3', viewValue: '11选3'},
  ];
  matches = [
    {value: '2018-6-15 23:00', viewValue: '中国 vs. 巴西'},
    {value: '2018-6-15 23:00', viewValue: '法国 vs. 德国'},
    {value: '2018-6-15 23:00', viewValue: '英格兰  vs. 意大利'}
  ];
  constructor(public thisDialogRef: MatDialogRef<PublishComponent>, @Inject(MAT_DIALOG_DATA) public data: string) { }
  hide = true;
  ngOnInit() {
  }
  publish() {
    this.thisDialogRef.close('Confirm');
  }
  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}
