import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'cc-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  searchTerm = new FormControl();

  searchTerm$: Observable<string> = this.searchTerm.valueChanges

  constructor() { }

  ngOnInit() {
    this.searchTerm$
    .pipe(
      debounceTime(500),
      map(x => x.toUpperCase())
    )
    .subscribe(data => console.log(data));
  }

}
