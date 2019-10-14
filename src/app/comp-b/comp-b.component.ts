import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-comp-b',
  template: `
    <p>
      Data is: {{ value }}
    </p>
  `,
  styles: []
})
export class CompBComponent implements OnInit {
  value: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.pushedData.subscribe(
      (data: string) => this.value = data
    )
  }
}
