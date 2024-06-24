import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
    new Recipe(
      'A Test Recipe2',
      'This is simply a test2',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'
    ),
  ];
  @Output() recipeSelectedEvent = new EventEmitter<Recipe>();
  recipe: Recipe;

  constructor() {}

  ngOnInit() {}

  setRecipeDetails(recipe: Recipe) {
    this.recipeSelectedEvent.emit(recipe);
  }
}
