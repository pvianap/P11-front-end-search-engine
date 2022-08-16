import { listeners } from './listeners.js';
import { controller } from './controller.js';

class Render {
  constructor() {}

  all(recipes, buttons, tags) {
    this.recipes(recipes);
    this.buttons(buttons, tags);
    this.tags(Object.values(tags));
  }

  // RENDER RECIPES
  recipes(array) {
    const target = document.querySelector('.recipesContainer');
    target.innerHTML = '';

    if (array.length == 0) {
      const msgError = document.createElement('p');
      msgError.innerText = 'Aucune recette correspondante à la recherche';
      target.appendChild(msgError);
    }
    array.forEach((recipe) => {
      const element = document.createElement('div');
      element.setAttribute('class', 'card mb-4');
      const listIngredients = [];

      recipe.ingredients.forEach((ingredient) => {
        listIngredients.push(
          `<li><span>${ingredient.ingredient}:</span><p> ${
            !isNaN(ingredient.quantity) ? ingredient.quantity : ''
          } ${
            ingredient.unit ? ingredient.unit : ''
          }<p class="ingredient"></li>`
        );
      });

      const content = `
      <div class="card-img-top imgCard" alt="..."></div>
      <div class="row  card-body">
        <div class="flex-nowrap descriptionHeader "><h5 class="col-8">${
          recipe.name
        }</h5> <i class="fa-regular fa-clock"></i><p>${
        recipe.time
      } min</p></div>
        <div class="col-6 ps-0">
        
        <ul class="list-unstyled listIngredients">
        ${listIngredients.join('')}
        </ul>
        </div>
        <div class="col-6">
      
        <p class="row card-text">${recipe.description}
        </p>
        </div>
        </div>
    `;
      element.innerHTML = content;

      target.appendChild(element);
    });
  }

  // RENDER NEW BUTTONS CONTENT
  buttons(array, tagArray) {
    const targets = [
      'dropdownMenuIngredients',
      'dropdownMenuAppliances',
      'dropdownMenuUstensils',
    ];
    if (array == null) {
      return;
    }
    array.forEach((list, i) => {
      const target = document.querySelector(`.${targets[i]}`);
      target.innerHTML = '';
      list.forEach((e) => {
        if (!JSON.stringify(tagArray).toLowerCase().includes(e.toLowerCase())) {
          const content = document.createElement('li');
          content.innerText = e;
          Object.assign(content, {
            href: '#',
            className: 'link',
          });
          listeners.buttons(content, e, i);
          target.appendChild(content);
        }
      });
    });
  }

  // RENDER TAGS CONTENT
  tags(array) {
    const styles = ['btn-primary', 'btn-danger', 'btn-success'];
    const target = document.querySelector('.tagsContainer');
    target.innerHTML = '';

    array.forEach((type, i) => {
      const style = styles[i];

      type.forEach((e) => {
        const tag = document.createElement('button');
        Object.assign(tag, {
          className: `btn w-auto ${style} btn-xs me-2 mb-2`,
          type: 'button',
        });
        tag.innerText = e;
        listeners.tags(tag, e);
        target.appendChild(tag);
        const closeButton = document.createElement('i');
        closeButton.setAttribute(
          'class',
          'fa-regular fa-circle-xmark ps-2 pe-2'
        );
        tag.appendChild(closeButton);
      });
    });
  }
}

export const render = new Render();
