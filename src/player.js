class Player {
  constructor(name, id, token) {
    this.name = name,
    this.id = id;
    this.token = token;
    this.wins = [];
  }

  saveWinsToStorage() {
  localStorage.setItem(`${this.name} wins`, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
  this.wins = JSON.parse(localStorage.removeItem(`${this.name} wins`));
  }
}
