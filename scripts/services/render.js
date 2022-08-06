class Render {
  constructor() {}

  all(recipes, buttons, tags) {
    this.recipes(recipes);
    this.buttons(buttons);
    this.tags(Object.values(tags));
  }

  // RENDER RECIPES
  recipes(array) {
    const target = document.querySelector('.recipesContainer');
    target.innerHTML = '';
    array.forEach((e) => {
      const element = document.createElement('div');

      const listIngredients = [];
      e.ingredients.forEach((e) => {
        listIngredients.push(`<li>${Object.values(e).join(' ')}</li>`);
      });

      const content = `<div class="row card-body">
      <div class="col">
        <h5 class="row card-title">${e.name}</h5>
        <ul class="list-unstyled listIngredients">
        ${listIngredients.join('')}
        </ul>
      </div>
      <div class="col-6">
        <div class="row d-flex justify-content-end">${e.time}min</div>
        <p class="row card-text">${e.description}
        </p>
      </div>
    </div>`;
      element.innerHTML = content;

      target.appendChild(element);
    });
  }

  // RENDER BUTTONS CONTENT
  buttons(array) {
    const targets = [
      'dropdownMenuIngredients',
      'dropdownMenuAppliances',
      'dropdownMenuUstensils',
    ];

    array.forEach((list, i) => {
      const target = document.querySelector(
        `[aria-labelledby = "${targets[i]}"]`
      );
      target.innerHTML = '';
      list.forEach((e) => {
        const item = document.createElement('li');
        const tag = document.createElement('a');
        tag.innerText = e;
        Object.assign(tag, {
          href: '#',
          className: 'dropdown-item',
        });
        item.appendChild(tag);
        target.appendChild(item);
      });
    });
  }

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
        target.appendChild(tag);
      });
    });
  }
}

export const render = new Render();
