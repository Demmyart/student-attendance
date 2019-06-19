import { Component, OnInit } from '@angular/core';
import {RequestService} from '../../shared/request.service';
import {ActivatedRoute,Router} from '@angular/router';
import { PieChartConfig } from './../../googlecharts/pie-chart-config';
import {ShareObj,GlobalService } from './../../shared/global.service';
import { CommonService } from './../../shared/common.service';

import {Store} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromStat from './../../ngrx/reducers/statReducer'
import * as fromState from './../../ngrx/index'
import * as userActions from '../../ngrx/actions/userActions'


@Component({
  selector: 'app-statforstudent',
  templateUrl: './statforstudent.component.html',
  styleUrls: ['./statforstudent.component.css']
})
export class StatforstudentComponent implements OnInit {
  stat: Observable<any>;
  loader: Observable<boolean> = this.store.select(fromStat.getPagePending);

  data2: any[];
  config2: PieChartConfig;
  elementId2: String;

  
  constructor(
    private http:RequestService,
    private router: Router,
    private store: Store<fromState.AppState>) {}

  ngOnInit() {
    this.getStatStudent();
    
  }

  getStatStudent(){
    this.stat = this.store.select(fromStat.selectAll);
    this.store.select(fromStat.selectAll).subscribe(data => {
      if (data[0]) {
      let myNumber = data[0].total;
      this.drawChart(myNumber);
      }
     });
    // this.http.getstatforstudent(this.share.shareObj[0]).subscribe(result =>{
    //   this.stat = result;
    //   let myNumber = result[0].total;
    //   this.drawChart(myNumber);
      
    // })
  }

  drawChart(myNumber){
    this.data2 = [['Task', 'Hours per Day'],
    ['Не посещено',  100 - myNumber ],
    ['Посещено',  myNumber ]];
    this.config2 = new PieChartConfig(0.4,'transparent',300,350,false,
    [{color: '#EC334D'}, {color: '#0BAC45'}],
    {position: 'bottom', textStyle: {color: 'grey', fontSize: 12},alignment: 'start'},
    {chartArea:{left:0,top:0}}
   );
    this.elementId2 = 'myPieChart2'; 
  }
}
