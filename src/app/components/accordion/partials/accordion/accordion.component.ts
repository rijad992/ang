import {
  AfterContentInit,
  Attribute,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { delay, take } from 'rxjs';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent implements AfterContentInit {
  @ContentChildren(AccordionItemComponent, { emitDistinctChangesOnly: true })
  accordionItems!: QueryList<AccordionItemComponent>;

  toggleAll = false;

  constructor(@Attribute('toggled') toggled: string) {
    this.toggleAll = toggled !== null ? true : false;
  }

  ngAfterContentInit(): void {
    this.accordionItems.changes
      .pipe<QueryList<AccordionItemComponent>>(take(1))
      .pipe(delay(0))
      .subscribe((items) => {
        items.forEach((item) => {
          if (this.toggleAll) {
            //item.toggled = this.toggleAll;
          }
        });
      });
  }
}
