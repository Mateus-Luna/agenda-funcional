const express = require('express');
const EventController = require('../eventController/eventController');

const router = express.Router();

router.get('/events', async (req, res) => {
    try {
      const events = await Event.find();
      res.json(events);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
    res.send('Lista de Eventos');
  });
  
  router.post('/events', async (req, res) => {
    const event = new Event({
      title: req.body.title,
      date: req.body.date,
      description: req.body.description,
    });
  
    try {
      const newEvent = await event.save();
      res.status(201).json(newEvent);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
    res.send('Evento Adicionado')
  });
  

module.exports = router;
