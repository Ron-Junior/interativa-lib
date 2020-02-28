import { Component, ViewContainerRef, QueryList, ViewChildren } from '@angular/core';
import { CreatedComponents } from './../components'
import { DomSanitizer } from '@angular/platform-browser';

@ViewChildren('dynamic', {read: ViewContainerRef}) 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public widgetTargets: QueryList<ViewContainerRef>;
  title = 'getStartApp';
  htmlStr: string = '<strong>The Tortoise</strong> &amp; the Hare';
  components = CreatedComponents.components;

  constructor(private sanitizer: DomSanitizer) {}
}
