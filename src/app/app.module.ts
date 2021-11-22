import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { StepComponent } from './components/step/step.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    StepOneComponent,
    StepComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
