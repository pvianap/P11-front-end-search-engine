import { recipes as recipesData } from './recipes.js';

class Data {
  constructor(data) {
    this._recipes = data;
    this._ingredients = this.getIngredients(data);
    this._appliance = this.getAppliance(data);
    this._ustensiles = this.getUstensiles(data);
  }

  getRecipes() {
    return this._recipes;
  }

  getIngredients(data) {
    const ingredients = [];
    data.forEach((element) => {
      element.ingredients.forEach((e) => {
        ingredients.push(e.ingredient);
      });
    });
    return [...new Set(ingredients)].sort();
  }

  getAppliance(data) {
    const appliances = [];
    data.forEach((element) => {
      appliances.push(element.appliance);
    });
    return [...new Set(appliances)].sort();
  }

  getUstensiles(data) {
    const ustensils = [];
    data.forEach((element) => {
      element.ustensils.forEach((e) => {
        ustensils.push(e);
      });
    });

    return [...new Set(ustensils)].sort();
  }
}

export const data = new Data(recipesData);
