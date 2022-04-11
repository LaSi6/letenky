import { Flight } from "./Flight/index.js";
 
const flights = [{
    cityFrom: 'Praha',
    cityTo: 'Londýn',
    timeFrom: '3. srpna 2022, 13:30',
    timeTo: '3. srpna 2022, 14:00',
  },
  {
    cityFrom: 'Praha',
    cityTo: 'Londýn',
    timeFrom: '3. srpna 2022, 13:30',
    timeTo: '3. srpna 2022, 14:00',
  },
]

const container = document.querySelector('.container');
  for (let i=0; i < flights.length; i += 1) {
        container.innerHTML += Flight(flights[i])
    }