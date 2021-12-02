import { Component, forwardRef, OnInit } from '@angular/core';
import { WizardStepService } from 'src/app/interfaces/wizard-step-service';

@Component({
  selector: 'app-step-three',
  template: 'step-three-works',
  styleUrls: ['./step-three.component.css'],
  providers: [
    { provide: WizardStepService, useExisting: forwardRef(() => StepThreeComponent) }
  ]
})
export class StepThreeComponent implements OnInit, WizardStepService {

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
