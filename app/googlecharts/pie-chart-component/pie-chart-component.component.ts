import { Component, Input, OnInit } from '@angular/core';
import { PieChartConfig } from './.././pie-chart-config';
import { GooglePieChartService } from './../google-pie-chart-service.service';

declare var google: any;
declare var x: number;

@Component({
  selector: 'pie-chart',
  templateUrl: './pie-chart-component.component.html'
})
export class PieChartComponent implements OnInit {

    @Input() data: any[];
    @Input() config: PieChartConfig;
    @Input() elementId: String;

    constructor(private _pieChartService: GooglePieChartService) {}

    ngOnChanges(changes) : void {
        if (changes.data != undefined) {
            this.data = changes.data.currentValue;
            this._pieChartService.BuildPieChart(this.elementId, this.data, this.config);
        }      
    }

    ngOnInit(): void {
        this._pieChartService.BuildPieChart(this.elementId, this.data, this.config); 
    }
}