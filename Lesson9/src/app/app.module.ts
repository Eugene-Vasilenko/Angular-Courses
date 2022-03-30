import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConstructObservableComponent } from './components/construct-observable/construct-observable.component';
import { ObservableOperatorsComponent } from './components/observable-operators/observable-operators.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    ConstructObservableComponent,
    ObservableOperatorsComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
