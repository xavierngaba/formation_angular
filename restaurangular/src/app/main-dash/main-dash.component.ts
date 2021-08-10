import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'cc-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {title: 'A la carte', cols: 2, rows: 1},
          {title: 'Burgers', cols: 2, rows: 1},
          {title: 'Pizzas', cols: 2, rows: 1},
          {title: 'Salades', cols: 2, rows: 1}
        ];
      }

      return [
        {title: 'A la carte', cols: 2, rows: 1},
        {title: 'Burgers', cols: 2, rows: 1},
        {title: 'Pizzas', cols: 2, rows: 1},
        {title: 'Salades', cols: 2, rows: 1}
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
