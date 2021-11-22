import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { StepOneComponent } from './components/step-one/step-one.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    StepOneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
