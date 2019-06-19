export class PieChartConfig {
    // title: string;
    pieHole: number;
    backgroundColor: string;
    height: number;
    width: number;
    is3D: boolean;
    slices: {};
    legend: {};
    chartArea: {};
    
    constructor(pieHole: number,backgroundColor: string,
        height: number,width: number,is3D: boolean,
        slices: {}, legend: {}, chartArea: {}) {
            
        // this.title = title;
        this.pieHole = pieHole;
        this.backgroundColor  =backgroundColor;
        this.height = height;
        this.width=width;
        this.is3D = is3D;
        this.slices =slices;
        this.legend = legend;
        this.chartArea = chartArea;
    }
}