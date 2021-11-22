import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { StepComponent } from '../step/step.component';

@Component({
  selector: 'app-wizard',
  template: '<app-step *ngFor="let i of allSteps"></app-step>',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements AfterViewInit {

  allSteps = [1, 2, 3, 4];

  @ViewChildren(StepComponent) steps!: QueryList<StepComponent>;

  constructor() {
    // undefined, pois a view não começou ainda.
    console.log(this.steps);
  }

  ngAfterViewInit(): void {
    // Depois da view inicializada, step existe e está disponível para uso!
    console.log(this.steps);
    this.steps.changes.subscribe(() => {
      console.log('Now exists ' + this.steps.length + ' steps.');
    })
  }

}
