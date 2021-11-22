import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { StepOneComponent } from './components/step-one/step-one.component';
import { WizardStepDirective } from './directives/wizard-step.directive';
import { StepTwoComponent } from './components/step-two/step-two.component';
import { StepThreeComponent } from './components/step-three/step-three.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    WizardStepDirective,
    StepOneComponent,
    StepTwoComponent,
    StepThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
