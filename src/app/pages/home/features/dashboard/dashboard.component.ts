import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Color, Label} from 'ng2-charts';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lineChartData: ChartDataSets[] = [
    {data: [300, 200, 250, 400, 500, 325, 410, 425, 500, 250, 380, 410], label: 'Ganancias mensuales'},
  ];
  lineChartLabels: Label[] = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Div'];
  lineChartColors: Color[] = [
    {borderColor: 'black', backgroundColor: 'rgba(255,255,0,0.28)'}];
  chartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          fontSize: 16
        }
      }],
      xAxes: [{
        ticks: {
          fontSize: 16
        }
      }]
    }
  };
  dataSource = [
    {id: 1, name: 'John Doe', jobTitle: 'CEO', salary: '$5.000'},
    {id: 2, name: 'Jane Doe', jobTitle: 'Design', salary: '$3.500'},
    {id: 3, name: 'Daniel Stefanelli', jobTitle: 'Developer', salary: '$4.000'},
    {id: 4, name: 'Paul Rogers', jobTitle: 'Manager', salary: '$1.500'},
    {id: 5, name: 'Peter Wayne', jobTitle: 'Marketing', salary: '$2.000'},
  ];
  displayedColumns = ['position', 'name', 'jobTitle', 'salary'];
  tasks = [
    {id: 1, title: 'Documentation', information: 'Write app documentacion'},
    {id: 2, title: 'Solve issue', information: 'Solve issues in the server'},
    {id: 3, title: 'Release 2.0', information: 'Release new version'},
    {id: 4, title: 'Export files', information: 'Export files to drive'},
    {id: 5, title: 'Deploy app', information: 'Deploy app to server'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
