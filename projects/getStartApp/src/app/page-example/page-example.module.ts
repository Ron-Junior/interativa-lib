import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageExampleComponent } from './page-example.component';
import { ExampleComponentModule } from 'example-component';

@NgModule({
  imports: [
    CommonModule,
    ExampleComponentModule
  ],
  declarations: [PageExampleComponent]
})
export class PageExampleModule { }
