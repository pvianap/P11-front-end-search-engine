class Render {
  constructor() {}

  all(recipes, buttons, tags) {
    this.recipes(recipes);
    this.buttons(buttons);
    this.tags(Object.values(tags));
  }

  recipes(array) {}

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
