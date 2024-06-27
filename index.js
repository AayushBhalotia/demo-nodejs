const express = require('express');
const app = express();
const port = 3000;

const events = [
  {
    id: 1,
    event_name: 'Butterfly 100M',
    event_category: 'Swimming',
    start_time: '2022-12-17 13:00:00',
    end_time: '2022-12-17 14:00:00',
  },
  {
    id: 2,
    event_name: 'Backstroke 100M',
    event_category: 'Swimming',
    start_time: '2022-12-17 13:30:00',
    end_time: '2022-12-17 14:30:00',
  },
  {
    id: 3,
    event_name: 'Freestyle 400M',
    event_category: 'Swimming',
    start_time: '2022-12-17 15:00:00',
    end_time: '2022-12-17 16:00:00',
  },
  {
    id: 4,
    event_name: 'High Jump',
    event_category: 'Athletics',
    start_time: '2022-12-17 13:00:00',
    end_time: '2022-12-17 14:00:00',
  },
  {
    id: 5,
    event_name: 'Triple Jump',
    event_category: 'Athletics',
    start_time: '2022-12-17 16:00:00',
    end_time: '2022-12-17 17:00:00',
  },
  {
    id: 6,
    event_name: 'Long Jump',
    event_category: 'Athletics',
    start_time: '2022-12-17 17:00:00',
    end_time: '2022-12-17 18:00:00',
  },
  {
    id: 7,
    event_name: '100M Sprint',
    event_category: 'Athletics',
    start_time: '2022-12-17 17:00:00',
    end_time: '2022-12-17 18:00:00',
  },
  {
    id: 8,
    event_name: 'Lightweight 60kg',
    event_category: 'Boxing',
    start_time: '2022-12-17 18:00:00',
    end_time: '2022-12-17 19:00:00',
  },
  {
    id: 9,
    event_name: 'Middleweight 75 kg',
    event_category: 'Boxing',
    start_time: '2022-12-17 19:00:00',
    end_time: '2022-12-17 20:00:00',
  },
  {
    id: 10,
    event_name: 'Heavyweight 91kg',
    event_category: 'Boxing',
    start_time: '2022-12-17 20:00:00',
    end_time: '2022-12-17 21:00:00',
  },
];

// Endpoint to get all events
app.get('/events', (req, res) => {
  try {
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ message: req });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
