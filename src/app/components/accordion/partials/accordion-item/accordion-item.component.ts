import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss'],
  exportAs: 'appAccordionItem',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemComponent implements OnInit {

  constructor(private parent: AccordionComponent) {}

  private _toggled = false;
  @Input() public get toggled() {
    return this._toggled;
  }
  public set toggled(val: boolean) {
    this._toggled = val;
  }

  ngOnInit(): void {
    this.toggled = this.parent.toggleAll;
    console.log('iteminit', this.parent);
  }

  toggle(): void {
    this.toggled = !this.toggled;
  }
}
