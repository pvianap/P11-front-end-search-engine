import { controller } from './controller.js';

class Listeners {
  constructor() {
    this.searchBar();
    this.searchButton();
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
      Object.keys(controller._tagArray).forEach((type) => {
        controller._tagArray[type] = controller._tagArray[type].filter(
          (el) => el !== e
        );
      });

      controller.refresh();
    });
  }
  searchBar() {
    const search = document.querySelector('input');
    search.addEventListener('keyup', (e) => {
      const query = e.target.value;

      if (query.toLowerCase().trim().length > 2) {
        controller.refresh();
        controller.searchFilter([query.toLowerCase().trim()]);
      } else {
        controller.refresh();
      }
    });
  }
  searchButton() {
    const search = document.querySelectorAll('.searchButtonInput');
    search.forEach((input, index) =>
      input.addEventListener('keyup', (e) => {
        const query = e.target.value.toLowerCase();
        controller.searchButton(query, index);
      })
    );

    // search.addEventListener('keyup', (e) => {
    //   const query = e.target.value.toLowerCase();

    //   const array = controller._buttonArray[0].filter((e) =>
    //     e.toLowerCase().includes(query)
    //   );
    //   const tagArray = controller._tagArray.ingredients;
    // });
  }
}

export const listeners = new Listeners();
