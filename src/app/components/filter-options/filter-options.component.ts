import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrls: ['./filter-options.component.css'],
})
export class FilterOptionsComponent {
  @Output()
  available = new EventEmitter<void>();
  @Output()
  rented = new EventEmitter<void>();
  @Output()
  reset = new EventEmitter<void>();

  showAvailable = () => {
    this.available.emit();
  };
  showRented = () => {
    this.rented.emit();
  };
  showReset = () => {
    this.reset.emit();
  };
}
