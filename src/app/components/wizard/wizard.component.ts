import { AfterViewInit, Component, ContentChildren, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { StepComponent } from '../step/step.component';

@Component({
  selector: 'app-wizard',
  template: '<ng-content></ng-content>',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent {

  @ContentChildren(StepComponent) steps!: QueryList<StepComponent>;

  constructor() { }

  // Implementação...

}
