import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    title:'', date: '', description:''
  });

  useEffect(()=>{
    axios.get('http://localhost:3000/api/events').then((response)=>{
      setEvents(response.data);
    });
  },[]);

  const addEvent = () => {
    axios.post('http://localhost:3000/api/events', newEvent).then((response)=>{
      setEvents([...events, response.data]);
    });
  };

  return (
    <div className="App">
      <h1>AGENDA DIGITAL</h1>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            {event.title} - {new Date(event.Date).toLocaleDateString()} - {event.description}
          </li>
        ))}
      </ul>
      <h2>ADICONAR NOVO EVENTO</h2>
      <input
        type="text"
        placeholder='Título'
        value ={newEvent.title}
        onChange={(e)=> setNewEvent({ ...newEvent, title: e.target.value})}
      ></input>

      <input
        type="date"
        value ={newEvent.date}
        onChange={(e)=> setNewEvent({ ...newEvent, date: e.target.value})}
      ></input>

      <textarea 
        placeholder='Descrição'
        value ={newEvent.description}
        onChange={(e)=> setNewEvent({ ...newEvent, description: e.target.value})}>
        </textarea>
      
      <button onClick={addEvent}>Adicionar</button>
    </div>
  );
}

export default App;
