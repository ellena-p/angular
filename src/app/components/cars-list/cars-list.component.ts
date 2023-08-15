import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css'],
})
export class CarsListComponent {
  @Input()
  cars_list: Car[] = [];
  @Input()
  showAvailable: boolean = false;
  @Input()
  showUnavailable: boolean = false;
  sortModel: string = 'asc';

  @Output()
  carToRent = new EventEmitter<number>();
  @Output()
  carToReturn = new EventEmitter<number>();
  @Output()
  rentTheCar = (carId: number) => {
    this.carToRent.emit(carId);
  };

  returnTheCar = (carId: number) => {
    this.carToReturn.emit(carId);
  };

  toggleSortModel() {
    this.sortModel = this.sortModel === 'asc' ? 'desc' : 'asc';
  }
}
