import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort} from '@angular/material';

@Component({
  selector: 'app-person-game-list-wc',
  templateUrl: './person-game-list-wc.component.html',
  styleUrls: ['./person-game-list-wc.component.css'],
  inputs: ['inputsValue']
})
export class PersonGameListWcComponent implements OnInit {
  displayedColumns = ['match', 'result', 'bet', 'time', 'bonus', 'lucky'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  private inputsValue;
  @ViewChild(MatSort) sort: MatSort;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
}
export interface Element {
  match: string;
  time: string;
  result: number;
  bonus: number;
  lucky: boolean;
  bet: number;
}

const ELEMENT_DATA: Element[] = [
  {match: '中国 vs. 巴西', result: 0, time: '2018-6-15 23:13', bonus: 10079, lucky: false, bet: 0},
  {match: '德国 vs. 法国',result: 1, time: '2018-6-15 23:13', bonus: 40026, lucky: false, bet: 0},
  {match:'中国 vs. 巴西',result: 2, time: '2018-6-15 23:13', bonus: 6941, lucky: false, bet: 0},
  {match:'中国 vs. 巴西',result: 2, time: '2018-6-15 23:13', bonus: 90122, lucky: true, bet: 0},
  {match:'中国 vs. 巴西',result: 1, time: '2018-6-15 23:13', bonus: 10811, lucky: true, bet: 0},
  {match:'中国 vs. 巴西',result: 2, time: '2018-6-15 23:13', bonus: 120107, lucky: true, bet: 0},
  {match:'中国 vs. 巴西',result: 0, time: '2018-6-15 23:13', bonus: 140067, lucky: true, bet: 0},
  {match:'中国 vs. 巴西',result: 0, time: '2018-6-15 23:13', bonus: 159994, lucky: true, bet: 0},
  {match:'中国 vs. 巴西',result: 0, time: '2018-6-15 23:13', bonus: 189984, lucky: true, bet: 0},
  {match:'中国 vs. 巴西',result: 0, time: '2018-6-15 23:13', bonus: 201797, lucky: true, bet: 0},
  {match:'中国 vs. 巴西',result: 0, time: '2018-6-15 23:13', bonus: 229897, lucky: true, bet: 0},
];
