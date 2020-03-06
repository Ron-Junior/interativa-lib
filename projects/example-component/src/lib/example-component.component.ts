import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-exampleComponent',
  template: `
    <p>
      Name: {{name}}
    </p>
  `,
  styles: []
})
export class ExampleComponentComponent implements OnInit {
  @Input() name: string; //This line receive one input write one tag of componet ex: <lib-exampleComponent name="Xablau"></lib-exampleComponent>
  constructor() { }

  ngOnInit() {
  }

}
