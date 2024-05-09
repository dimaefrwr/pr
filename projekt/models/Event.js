class Event {
  constructor(id, date, seats) {
    this.id = id;
    this.date = date;
    this.seats = seats;
  }

  reserveSeats(numberOfSeats) {
    if (this.seats >= numberOfSeats) {
      this.seats -= numberOfSeats;
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Event;
