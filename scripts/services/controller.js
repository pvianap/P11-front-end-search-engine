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
    this._searchAtive = false;
    this.refresh();
  }

  recipeFilter(data, tags) {
    return data.filter((value) =>
      tags.every((tag) => JSON.stringify(value).toLowerCase().includes(tag))
    );
  }

  refresh() {
    // REFRESH RECIPE ARRAY
    const allTags = [].concat(
      this._tagArray.ingredients,
      this._tagArray.ustensils,
      this._tagArray.appliances
    );

    if (this._searchAtive) {
      // DO NOT RENEW DATA
      this._recipeArray = this.recipeFilter(this._recipeArray, allTags);
    } else {
      // RENEW DATA
      this._recipeArray = this.recipeFilter(data.getRecipes(), allTags);
    }

    // REFRESH BUTTONS
    this._buttonArray = [
      data.getIngredients(this._recipeArray),
      data.getAppliance(this._recipeArray),
      data.getUstensiles(this._recipeArray),
    ];

    // REFRESH PAGE
    render.all(this._recipeArray, this._buttonArray, this._tagArray);
  }

  searchFilter(query) {
    this._searchAtive = true;
    controller.refresh();
    controller._recipeArray = controller.recipeFilter(
      controller._recipeArray,
      query
    );
    controller.refresh();
    console.log(controller._tagArray);
  }
}

export const controller = new Controller(data);
