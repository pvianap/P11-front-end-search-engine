class Listeners {
  constructor() {
    this.addAll();
  }
  addAll() {
    this.buttons();
    this.tags();
    this.searchBar();
  }
  buttons() {}
  tags() {}
  searchBar() {}
}

export const listeners = new Listeners();
