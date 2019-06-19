import { GoogleChartsBaseService } from './google-charts-base-service';
import { Injectable } from '@angular/core';
import { PieChartConfig } from './pie-chart-config';

declare var google: any;

@Injectable()
export class GooglePieChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildPieChart(elementId: String, data: any[], config: PieChartConfig) : void {  
    var chartFunc = () => { return new google.visualization.PieChart(document.getElementById(<string>elementId)); };
    var options = {
            // title: config.title,
            pieHole: config.pieHole,
            backgroundColor: config.backgroundColor,
            height: config.height,
            width: config.width,
            is3D: config.is3D,
            slices: config.slices,
            legend: config.legend,
            chartArea: config.chartArea
      };

    this.buildChart(data, chartFunc, options);
  }
}