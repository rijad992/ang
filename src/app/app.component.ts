import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private service: DataService) {}
  title = 'Pass it on';

  public $data: Observable<any> = new Observable();

  ngOnInit() {
    this.$data = this.service.getData().pipe(tap(console.log));
  }

  trackByTitle(index: number, item: any) {
    return item.title;
  }
}
