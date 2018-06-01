import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-game-list-draw',
  templateUrl: './person-game-list-draw.component.html',
  styleUrls: ['./person-game-list-draw.component.css'],
  inputs: ['inputsValue']
})
export class PersonGameListDrawComponent implements OnInit {
  displayedColumns = ['bet', 'time', 'bonus','lucky'];
  dataSource = ELEMENT_DATA;
  private inputsValue;
  constructor() { }

  ngOnInit() {
  }

}
export interface Element {

  time: string;
  bonus: number;
  lucky: boolean;
  bet: number;
}

const ELEMENT_DATA: Element[] = [
  {time: '2018-6-15 23:13', bonus: 10079, lucky: false, bet: 10},
  {time: '2018-6-15 23:13', bonus: 40026, lucky: false, bet: 20},
  {time: '2018-6-15 23:13', bonus: 6941, lucky: false, bet: 30},
  {time: '2018-6-15 23:13', bonus: 90122, lucky: true, bet: 40},
  {time: '2018-6-15 23:13', bonus: 10811, lucky: true, bet: 50},
  {time: '2018-6-15 23:13', bonus: 120107, lucky: true, bet: 60},
  {time: '2018-6-15 23:13', bonus: 140067, lucky: true, bet: 70},
  {time: '2018-6-15 23:13', bonus: 159994, lucky: true, bet: 80},
  {time: '2018-6-15 23:13', bonus: 189984, lucky: true, bet: 90},
  {time: '2018-6-15 23:13', bonus: 201797, lucky: true, bet: 20},
  {time: '2018-6-15 23:13', bonus: 229897, lucky: true, bet: 30},
];
