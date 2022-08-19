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
    // return data.filter((value) =>
    //   tags.every((tag) =>
    //     JSON.stringify([value.name, ...value.ingredients, value.description])
    //       .toLowerCase()
    //       .includes(tag)
    //   )
    // );
    const arrayResult = [];
    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < tags.length; j++) {
        if (
          JSON.stringify([
            data[i].name,
            ...data[i].ingredients,
            data[i].description,
          ])
            .toLowerCase()
            .includes(tags[j])
        ) {
          arrayResult.push(data[i]);
        }
      }
    }
    return arrayResult;
  }

  recipeFilterTags(data, tags) {
    return data.filter((value) =>
      tags.every((tag) => JSON.stringify(value).toLowerCase().includes(tag))
    );
  }

  refresh() {
    // REFRESH RECIPE ARRAY using Tags
    const allTags = [].concat(
      this._tagArray.ingredients,
      this._tagArray.ustensils,
      this._tagArray.appliances
    );

    this._recipeArray = this.recipeFilterTags(data.getRecipes(), allTags);

    // REFRESH BUTTONS using recipes
    this.refreshButtons();

    // REFRESH PAGE
    render.all(this._recipeArray, this._buttonArray, this._tagArray);
  }

  refreshButtons() {
    // REFRESH BUTTONS using recipes
    this._buttonArray = [
      data.getIngredients(this._recipeArray),
      data.getAppliance(this._recipeArray),
      data.getUstensiles(this._recipeArray),
    ];
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
