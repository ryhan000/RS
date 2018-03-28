import { Component, OnInit,Output ,EventEmitter} from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected= new EventEmitter<Recipe>();

  recipes: Recipe[]=[new Recipe ('A test recipe','This is a simpley test',
  'https://get.pxhere.com/photo/dish-food-recipe-snack-fast-food-cuisine-sandwich-vegetarian-food-baked-goods-power-supply-junk-food-beirut-mediterranean-food-finger-food-european-food-breakfast-sandwich-american-food-1375814.jpg'),
  new Recipe ('A test recipe','This is a simpley test',
  'https://get.pxhere.com/photo/dish-food-recipe-snack-fast-food-cuisine-sandwich-vegetarian-food-baked-goods-power-supply-junk-food-beirut-mediterranean-food-finger-food-european-food-breakfast-sandwich-american-food-1375814.jpg')];
  constructor() { }

  ngOnInit() {

  }

  onRecipeSelected(recipe:Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
