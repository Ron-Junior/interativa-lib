import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExampleComponentModule } from 'example-component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExampleComponentModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
