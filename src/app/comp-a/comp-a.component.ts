import { Component } from '@angular/core';
import { DataService } from '../service/data.service'

@Component({
  selector: 'app-comp-a',
  template: `
    <button (click)="onPush('text')">Push Text</button>
    <hr>
  `,
  styles: []
})
export class CompAComponent {

  constructor(private dataService: DataService) { }

  onPush(data: string) {
    this.dataService.pushData(data)
  }
}
