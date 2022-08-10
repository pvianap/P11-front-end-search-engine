import { controller } from './controller.js';

class Listeners {
  constructor() {
    this.searchBar();
  }

  addAll() {
    this.buttons();
    this.tags();
    this.searchBar();
  }
  buttons(li, e, i) {
    li.addEventListener('click', function () {
      Object.values(controller._tagArray)[i].push(e.toLowerCase());
      controller.refresh();
    });
  }
  tags(tag, e) {
    tag.addEventListener('click', function () {
      console.log(e);

      Object.keys(controller._tagArray).forEach((type) => {
        console.log(controller._tagArray[type]);
        controller._tagArray[type] = controller._tagArray[type].filter(
          (el) => el !== e
        );
      });
      console.log(controller._tagArray);

      // controller._tagArray.ingredients.pop(e.toLowerCase());

      controller.refresh();
    });
  }
  searchBar() {
    const search = document.querySelector('input');
    search.addEventListener('keyup', (e) => {
      const query = e.target.value;

      if (query.toLowerCase().trim().length > 2) {
        controller.searchFilter([query.toLowerCase().trim()]);
      } else {
        controller._searchAtive = false;
        controller.refresh();
      }
    });
  }
}

export const listeners = new Listeners();
