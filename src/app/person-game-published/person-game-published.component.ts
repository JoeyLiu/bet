import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-person-game-published',
  templateUrl: './person-game-published.component.html',
  styleUrls: ['./person-game-published.component.css'],
  inputs: ['inputsValue']
})
export class PersonGamePublishedComponent implements OnInit {
  displayedColumns = ['result', 'name', 'time', 'bonus', 'interval', 'next', 'stopped'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  private inputsValue;
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
export interface Element {
  time: string;
  next: string;
  result: number;
  bonus: number;
  name: string;
  interval: number;
  stopped: boolean;
}

const ELEMENT_DATA: Element[] = [
  {result: 132, time: '2018-6-15 23:13', bonus: 10079, name: '游戏1', interval: 4, next: '2019-6-15 15:32', stopped: true},
  {result: 244, time: '2018-6-15 23:13', bonus: 40026, name: '游戏3', interval: 8, next: '2019-6-15 15:32', stopped: false},
  {result: 387, time: '2018-6-15 23:13', bonus: 6941, name: '游戏1', interval: 16, next: '2019-6-15 15:32', stopped: false},
  {result: 978, time: '2018-6-15 23:13', bonus: 90122, name: '游戏3', interval: 4, next: '2019-6-15 15:32', stopped: false},
  {result: 554, time: '2018-6-15 23:13', bonus: 10811, name: '游戏1', interval: 4, next: '2019-6-15 15:32', stopped: true},
  {result: 386, time: '2018-6-15 23:13', bonus: 120107, name: '游戏3', interval: 4, next: '2019-6-15 15:32', stopped: true},
  {result: 799, time: '2018-6-15 23:13', bonus: 140067, name: '游戏2', interval: 4, next: '2019-6-15 15:32', stopped: true},
  {result: 988, time: '2018-6-15 23:13', bonus: 159994, name: '游戏1', interval: 4, next: '2019-6-15 15:32', stopped: true},
  {result: 459, time: '2018-6-15 23:13', bonus: 189984, name: '游戏3', interval: 4, next: '2019-6-15 15:32', stopped: true},
  {result: 120, time: '2018-6-15 23:13', bonus: 201797, name: '游戏1', interval: 4, next: '2019-6-15 15:32', stopped: true},
  {result: 611, time: '2018-6-15 23:13', bonus: 229897, name: '游戏2', interval: 4, next: '2019-6-15 15:32', stopped: true},
];
