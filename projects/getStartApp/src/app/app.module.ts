import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExampleComponentModule } from 'example-component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PageExampleModule } from './page-example/page-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExampleComponentModule,
    RouterModule,
    AppRoutingModule,
    PageExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
