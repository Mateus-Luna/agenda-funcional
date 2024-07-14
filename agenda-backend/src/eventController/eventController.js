const Event = require('../models/event');

class EventController {
  static async getAllEvents(req, res) {
    try {
      const events = await Event.find();
      res.json(events);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async createEvent(req, res) {
    const newEvent = new Event(req.body);
    try {
      const savedEvent = await newEvent.save();
      res.status(201).json(savedEvent);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = EventController;
