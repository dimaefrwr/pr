const Event = require('../models/Event');

const events = {
  '1': new Event(1, '2024-05-10', 200),
  '2': new Event(2, '2024-05-20', 200)
};

module.exports = {
  getEvents(req, res) {
    res.render('index', { events: Object.values(events) });
  },
  reserveSeat(req, res) {
    const eventId = req.params.id;
    const seatsToReserve = parseInt(req.body.seats, 10);
    const event = events[eventId];
    
    if (event && event.reserveSeats(seatsToReserve)) {
      res.render('success', { event });
    } else {
      res.render('failure');
    }
  }
};
