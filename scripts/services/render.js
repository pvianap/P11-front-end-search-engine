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
    array.forEach((recipe) => {
      const element = document.createElement('div');
      element.setAttribute('class', 'card mb-4');
      const listIngredients = [];

      recipe.ingredients.forEach((ingredient) => {
        listIngredients.push(
          `<li>${ingredient.ingredient}: ${
            !isNaN(ingredient.quantity) ? ingredient.quantity : ''
          } ${ingredient.unit ? ingredient.unit : ''}</li>`
        );
      });

      // e.ingredients.forEach((e) => {
      //   listIngredients.push(`<li>${Object.values(e).join(' ')}</li>`);
      // });

      const content = `
      <img src="..." class="card-img-top imgCard" alt="...">
      <div class="row card-body">
        <div class="col">
        <h5 class="row card-title">${recipe.name}</h5>
        <ul class="list-unstyled listIngredients">
        ${listIngredients.join('')}
        </ul>
        </div>
        <div class="col-6">
        <div class="row d-flex justify-content-end">${recipe.time}min</div>
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

  // RENDER BUTTONS CONTENT
  // buttons(array, tagArray) {
  //   const targets = [
  //     'dropdownMenuIngredients',
  //     'dropdownMenuAppliances',
  //     'dropdownMenuUstensils',
  //   ];

  //   array.forEach((list, i) => {
  //     const target = document.querySelector(
  //       `[aria-labelledby = "${targets[i]}"]`
  //     );
  //     target.innerHTML = '';
  //     list.forEach((e) => {
  //       if (!JSON.stringify(tagArray).toLowerCase().includes(e.toLowerCase())) {
  //         const item = document.createElement('li');
  //         const content = document.createElement('a');
  //         content.innerText = e;
  //         Object.assign(content, {
  //           href: '#',
  //           className: 'dropdown-item ',
  //         });
  //         item.appendChild(content);

  //         listeners.buttons(item, e, i);
  //         target.appendChild(item);
  //       }
  //     });
  //   });
  // }

  // RENDER TAGS CONTENT
  tags(array) {
    const styles = ['btn-primary', 'btn-success', 'btn-danger'];
    const target = document.querySelector('.tagsContainer');
    target.innerHTML = '';

    array.forEach((type, i) => {
      const style = styles[i];

      type.forEach((e) => {
        const tag = document.createElement('button');
        Object.assign(tag, {
          className: `col-12 btn ${style} btn-xs me-2`,
          type: 'button',
        });
        tag.innerText = e;
        listeners.tags(tag, e);
        target.appendChild(tag);
      });
    });
  }
}

export const render = new Render();
