import { data } from '../data/data.js';
import { render } from './render.js';

class Controller {
  constructor(data) {
    this._tagArray = {
      ingredients: [],
      ustensils: [],
      appliances: [],
    };
    this._recipeArray = data.getRecipes();
    this._buttonArray = [data._ingredients, data._appliance, data._ustensiles];
    this.refresh();
  }

  recipeFilter(data, tags) {
    tags = [].concat(tags.ingredients, tags.ustensils, tags.appliances);
    return data.filter((value) =>
      tags.every((tag) => JSON.stringify(value).toLowerCase().includes(tag))
    );
  }

  refresh() {
    // REFRESH RECIPE ARRAY
    this._recipeArray = this.recipeFilter(data.getRecipes(), this._tagArray);
    // REFRESH BUTTONS
    this._buttonArray = [
      data.getIngredients(this._recipeArray),
      data.getAppliance(this._recipeArray),
      data.getUstensiles(this._recipeArray),
    ];
    // REFRESH PAGE
    render.all(this._recipeArray, this._buttonArray, this._tagArray);
  }
}

export const controller = new Controller(data);
