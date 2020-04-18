class Player {
  constructor(id, token, wins) {
    this.id = id;
    this.token = token;
    this.wins = [];
    //double check if/how wins should be passed in as parameter!
  }

  saveWinsToStorage() {
  //stringify wins array and put it into local storage
  }

  retrieveWinsFromStorage() {
  //remove wins array from storage and parse
  }
}
