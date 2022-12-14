import { Component, OnInit } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  exportAs: 'appAccordionItem',
})
export class AccordionItemComponent implements OnInit {
  toggled = false;

  constructor(private parent: AccordionComponent) {}

  ngOnInit(): void {
    //this.toggled = this.parent.allToggled;
  }

  toggle() {
    this.toggled = !this.toggled;
  }
}
