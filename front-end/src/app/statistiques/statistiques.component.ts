import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {
  public chartType: string = 'polarArea';
  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' }
  ];
  public chartLabels: Array<any> = ['Red', 'Green', 'Yellow', 'Grey', 'Dark Grey'];

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(219, 0, 0, 0.1)',
        'rgba(0, 165, 2, 0.1)',
        'rgba(255, 195, 15, 0.2)',
        'rgba(55, 59, 66, 0.1)',
        'rgba(0, 0, 0, 0.3)'
      ],
      hoverBackgroundColor: [
        'rgba(219, 0, 0, 0.2)',
        'rgba(0, 165, 2, 0.2)',
        'rgba(255, 195, 15, 0.3)',
        'rgba(55, 59, 66, 0.1)',
        'rgba(0, 0, 0, 0.4)'
      ],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  constructor() { }

  ngOnInit(): void {
  }

}
