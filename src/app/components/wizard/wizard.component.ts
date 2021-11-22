import { Component, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { WizardStepDirective } from 'src/app/directives/wizard-step.directive';

@Component({
  selector: 'app-wizard',
  template: '<ng-content></ng-content>',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent {

  @ContentChildren(WizardStepDirective, { read: ElementRef }) steps!: QueryList<ElementRef>;

  constructor() { }

  // Implementação...

}
