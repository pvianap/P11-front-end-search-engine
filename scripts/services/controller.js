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
    console.log([data[0].name, data[0].ingredients]);
    console.log(
      JSON.stringify([
        data[0].name,
        ...data[0].ingredients,
        data[0].description,
      ])
    );
    return data.filter((value) =>
      tags.every((tag) =>
        JSON.stringify([value.name, ...value.ingredients, value.description])
          .toLowerCase()
          .includes(tag)
      )
    );

    // data.filter((value) =>
    //   tags.every((tag) => JSON.stringify(value).toLowerCase().includes(tag))
    // );
  }

  recipeFilterTags(data, tags) {
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

    this._recipeArray = this.recipeFilterTags(data.getRecipes(), allTags);

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
    controller.refresh();
    controller._recipeArray = controller.recipeFilter(
      controller._recipeArray,
      query
    );
    render.all(this._recipeArray, this._buttonArray, this._tagArray);
  }
  searchButton(query, index) {
    console.log(this._buttonArray);
    const array = [];
    array[index] = this._buttonArray[index].filter((e) =>
      e.toLowerCase().includes(query)
    );
    console.log(array);
    console.log(
      this._buttonArray[index].filter((e) => e.toLowerCase().includes(query))
    );
    render.buttons(array, this._tagArray);
  }
}

export const controller = new Controller(data);
