import { controller } from './controller.js';

class Listeners {
  constructor() {}
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
    // console.log(tag);
    // console.log(e);
    // // li.addEventListener('click', function () {
    // //   controller._tagArray.ingredients.pop(e.toLowerCase());
    // //   controller.refresh();
    // // });
  }
  searchBar() {}
}

export const listeners = new Listeners();
