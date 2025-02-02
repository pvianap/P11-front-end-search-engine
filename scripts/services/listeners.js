import { controller } from './controller.js';
import { render } from './render.js';

class Listeners {
  constructor() {
    this.searchBar();
    this.searchButton();
    this.dropdownButton();
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
      const search = document.querySelector('input');
      controller.searchBar(search.value);
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
      const search = document.querySelector('input');
      controller.searchBar(search.value);
    });
  }
  searchBar() {
    const search = document.querySelector('input');
    search.addEventListener('keyup', (e) => {
      const query = e.target.value;
      controller.searchBar(query);
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
  }
  dropdownButton() {
    document.addEventListener('click', (e) => {
      const isDropdownButton = e.target.matches('[data-dropdown-button]');
      if (!isDropdownButton && e.target.closest('[data-dropdown]') != null)
        return;

      let currentDropdown;
      if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
      }

      document
        .querySelectorAll('[data-dropdown].active')
        .forEach((dropdown) => {
          if (dropdown === currentDropdown) return;
          dropdown.classList.remove('active');
        });
    });
  }
}

export const listeners = new Listeners();
