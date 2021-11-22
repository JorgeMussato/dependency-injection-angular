import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard',
  template: '<ng-content></ng-content>',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  constructor() { }

  registerStep(step: any) {
     // ...
  }

  ngOnInit(): void {
  }

}
