import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  template: `
    <app-comp-a></app-comp-a>
    <app-comp-b></app-comp-b>
  `,
  styles: [],
  providers: [DataService]
})
export class AppComponent {
  title = 'angular-dataservice';
}
