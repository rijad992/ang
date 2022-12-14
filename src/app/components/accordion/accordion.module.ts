import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './partials/accordion/accordion.component';
import { AccordionItemComponent } from './partials/accordion-item/accordion-item.component';

@NgModule({
  declarations: [AccordionComponent, AccordionItemComponent],
  imports: [CommonModule],
  exports: [AccordionComponent, AccordionItemComponent]
})
export class AccordionModule {}
