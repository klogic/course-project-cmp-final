import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  constructor() {}

  ngOnInit() {}
  onIngredientOutputEvent(event) {
    console.log('event', event);
    this.ingredients.push(new Ingredient(event.name, event.amount));
  }
}
