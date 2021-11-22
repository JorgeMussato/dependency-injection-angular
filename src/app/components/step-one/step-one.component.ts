import { Component, OnInit } from '@angular/core';
import { WizardComponent } from '../wizard/wizard.component';

@Component({
  selector: 'app-step-one',
  template: 'ste[-one-works',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

  constructor(private wizard: WizardComponent) {
    wizard.registerStep(this);
  }

  ngOnInit(): void {
  }

}
