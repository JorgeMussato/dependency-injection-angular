import { Component, OnInit } from '@angular/core';
import { WizardStepService } from 'src/app/interfaces/wizard-step-service';

@Component({
  selector: 'app-step-one',
  template: 'step-one-works',
  styleUrls: ['./step-one.component.css'],
  // quase funciona, porém falta algo...
  providers: [
    { provide: WizardStepService, useExisting: StepOneComponent }
  ]
})
export class StepOneComponent implements OnInit, WizardStepService {

  constructor() { }

  ngOnInit(): void {
  }

  next(): void {
    throw new Error('Method not implemented.');
  }
  
  back(): void {
    throw new Error('Method not implemented.');
  }

}
