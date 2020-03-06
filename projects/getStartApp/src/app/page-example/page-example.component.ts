import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreatedComponents } from '../../components';

@Component({
  selector: 'app-page-example',
  templateUrl: './page-example.component.html',
  styleUrls: ['./page-example.component.css']
})
export class PageExampleComponent implements OnInit {

  public name = "xablau";
  public compName = '';
  public component: any;
  constructor(route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.compName = params['compName'];
      this.component = CreatedComponents.components.find((item) => {
        return item.title == this.compName
      })
    })
  }

  ngOnInit() {
  }

}
