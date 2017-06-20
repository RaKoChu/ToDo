import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>
  {{title}}
  </h1>
  <app-input></app-input>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string = 'app works!';
}
