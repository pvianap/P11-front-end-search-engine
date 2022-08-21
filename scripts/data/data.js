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

    // NATIVE CODE

    // data.forEach((element) => {
    //   element.ingredients.forEach((e) => {
    //     ingredients.push(e.ingredient);
    //   });
    // });

    // LOOP CODE
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].ingredients.length; j++) {
        ingredients.push(data[i].ingredients[j].ingredient);
      }
    }
    return [...new Set(ingredients)].sort();
  }

  getAppliance(data) {
    const appliances = [];
    // data.forEach((element) => {
    //   appliances.push(element.appliance);
    // });

    for (let i = 0; i < data.length; i++) {
      appliances.push(data[i].appliance);
    }

    // return [...new Set(appliances)].sort();
    return [...new Set(appliances)];
  }

  getUstensiles(data) {
    const ustensils = [];
    // data.forEach((element) => {
    //   element.ustensils.forEach((e) => {
    //     ustensils.push(e);
    //   });
    // });

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < data[i].ustensils.length; j++) {
        ustensils.push(data[i].ustensils[j]);
      }
    }

    return [...new Set(ustensils)].sort();
  }
}

export const data = new Data(recipesData);
