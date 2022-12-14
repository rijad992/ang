import {
  AfterContentInit,
  Attribute,
  Component,
  ContentChildren,
  OnInit,
  QueryList,
} from '@angular/core';
import { delay, take } from 'rxjs';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit, AfterContentInit {
  allToggled = false;

  @ContentChildren(AccordionItemComponent)
  list!: QueryList<AccordionItemComponent>;

  constructor(@Attribute('allToggled') allToggled: string) {
    this.allToggled = allToggled !== null ? true : false;
  }

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    this.list.changes
      .pipe<QueryList<AccordionItemComponent>>(take(1))
      .pipe(delay(0))
      .subscribe((items) => {
        items.forEach((item) => {
          console.log(this.allToggled);
          item.toggled = this.allToggled;
        });
      });
  }
}
