import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-game-list',
  templateUrl: './person-game-list.component.html',
  styleUrls: ['./person-game-list.component.css'],
  inputs: ['inputsValue']
})
export class PersonGameListComponent implements OnInit {
  displayedColumns = ['result', 'bet', 'time', 'bonus','lucky'];
  dataSource = ELEMENT_DATA;
  private inputsValue;
  constructor() { }

  ngOnInit() {
  }

}
export interface Element {
  time: string;
  result: number;
  bonus: number;
  lucky: boolean;
  bet: number;
}

const ELEMENT_DATA: Element[] = [
  {result: 132, time: '2018-6-15 23:13', bonus: 10079, lucky: false, bet: 132},
  {result: 244, time: '2018-6-15 23:13', bonus: 40026, lucky: false, bet: 132},
  {result: 387, time: '2018-6-15 23:13', bonus: 6941, lucky: false, bet: 132},
  {result: 978, time: '2018-6-15 23:13', bonus: 90122, lucky: true, bet: 978},
  {result: 554, time: '2018-6-15 23:13', bonus: 10811, lucky: true, bet: 132},
  {result: 386, time: '2018-6-15 23:13', bonus: 120107, lucky: true, bet: 132},
  {result: 799, time: '2018-6-15 23:13', bonus: 140067, lucky: true, bet: 132},
  {result: 988, time: '2018-6-15 23:13', bonus: 159994, lucky: true, bet: 132},
  {result: 459, time: '2018-6-15 23:13', bonus: 189984, lucky: true, bet: 132},
  {result: 120, time: '2018-6-15 23:13', bonus: 201797, lucky: true, bet: 132},
  {result: 611, time: '2018-6-15 23:13', bonus: 229897, lucky: true, bet: 132},
];
