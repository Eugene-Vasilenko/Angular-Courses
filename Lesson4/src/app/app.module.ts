import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomStyleDirective } from './directives/custom-style.directive';
import { ShowMeDirective } from './directives/show-me.directive';
import { CustomUppercasePipe } from './pipes/custom-uppercase.pipe';
import { CustomFilterPipe } from './pipes/customFilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomStyleDirective,
    ShowMeDirective,
    CustomUppercasePipe,
    CustomFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
