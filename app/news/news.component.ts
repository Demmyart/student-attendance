import { Component, OnInit } from '@angular/core';
import {RequestService} from '../shared/request.service';
import { PieChartConfig } from '../googlecharts/pie-chart-config';
import { AuthService } from './../shared/auth.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  data:any;
  data1: any[];
  config1: PieChartConfig;
  elementId1: String;

  news: any;
  constructor(private http:RequestService, private http1:AuthService,
  private router: Router) { }

  ngOnInit() {
    this.getStat();
    this.getNews();
    
  }

  getNews(){
    this.http.getNews().subscribe(data => {this.news = data});
  }

  getStat(){
    this.http.getstatforadmin().subscribe(data =>{  
    let ner = data[0]*100; 
    this.drawChart(ner);
  })
  }

  redirect(i){
    // this.router.navigate([this.news.articles[i].url])
    window.location.href= this.news.articles[i].url;
  }
  drawChart(ner){
    this.data1 = [['Task', 'Hours per Day'],
    ['Посещено',  ner ],
    ['Не посещено',  100 - ner ],];
    this.config1 = new PieChartConfig(0.4,'transparent',200,330,true,
    [{color: '#7F00FF'}, {color: '#E100FF',offset: 0.2}],
    {position: 'bottom', textStyle: {color: 'grey', fontSize: 12},alignment: 'start'},
    {chartArea:{left:0,top:0}}
   );
    this.elementId1 = 'myPieChart1'; 
  }

  exit(){
    this.http1.logout();
    this.router.navigate["/main"];
}

}
