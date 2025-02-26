import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  counter$: Observable<number>;

  constructor(private store: Store<{ counter: number }>) {
    this.counter$ = this.store.select('counter');
  }
}
