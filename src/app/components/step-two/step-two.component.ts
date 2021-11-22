import { Component, forwardRef, OnInit } from '@angular/core';
import { WizardStepService } from 'src/app/interfaces/wizard-step-service';

@Component({
  selector: 'app-step-two',
  template: 'step-two-works',
  styleUrls: ['./step-two.component.css'],
  // funciona para solucionar o erro de typescript.
  providers: [
    { provide: WizardStepService, useExisting: forwardRef(() => StepTwoComponent) }
  ]
})
export class StepTwoComponent implements OnInit, WizardStepService {

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
