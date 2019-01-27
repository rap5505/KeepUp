import { Component, OnInit, Input } from '@angular/core';
import { Tracker } from '../models/tracker.model';


@Component({
  selector: 'app-calorie-tracker',
  templateUrl: './calorie-tracker.component.html',
  styleUrls: ['./calorie-tracker.component.css']
})
export class CalorieTrackerComponent implements OnInit {


  foodItem: string;
  cal: number;
  total = 0;

  calories: Tracker[] = [];
  food: Tracker;


  constructor() { }

  ngOnInit() { }

  onAdd() {
    this.calories.push({itemName: this.foodItem, calories: this.cal});
    this.total += this.cal;
    this.foodItem = '';
    this.cal = null;
  }

  onRemove(item) {
    const index = this.calories.indexOf(item);
    this.calories.splice(index, 1);
    console.log(item.calories);
    this.total -= item.calories;
  }
}

