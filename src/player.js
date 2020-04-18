class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = [];
  }

  saveWinsToStorage() {
  //stringify wins array and put it into local storage
  }

  retrieveWinsFromStorage() {
  //remove wins array from storage and parse
  }
}
