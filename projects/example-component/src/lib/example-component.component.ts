import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-exampleComponent',
  template: `
    <p>
      example-component works!
    </p>
  `,
  styles: []
})
export class ExampleComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
