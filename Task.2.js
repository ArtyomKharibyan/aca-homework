const flights = {
  flights: [],
  
  priorityFlights: [],

  scheduleFlight(flight) {
    this.flights.push(flight);
  },

  removeFlight(flight) {
    if (this.flights.includes(flight)) {
      this.flights = this.flights.filter(elem => elem !== flight);
    }
    if (this.priorityFlights.includes(flight)) {
      this.priorityFlights = this.priorityFlights.filter(elem => elem !== flight);
    }
  },

  makePriorityFlight(flight) {
    this.priorityFlights.push(flight);
  },
};

flights.scheduleFlight("1");
flights.scheduleFlight("3");
flights.scheduleFlight("2");
flights.scheduleFlight("4");

flights.makePriorityFlight("4");
flights.makePriorityFlight("6");

flights.removeFlight("4","6");

console.log(flights.flights);