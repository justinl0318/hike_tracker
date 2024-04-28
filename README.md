# Hike Tracker

An app that gathers information about some of the famous mountains in the world. Also allows you to keep track of the mountains that you've summited.

Video: [Demo](https://youtu.be/w2l8AdGQSGg)

---

### Front end
- react
- react-router-dom
- Frameworks: 
  - react-bootstrap
  - axios
  - mdb-ui-kit
  - google-map-react
 
API: [google-map-react](https://github.com/google-map-react/google-map-react),
     [freeweatherapi](https://www.weatherapi.com)

### Back end
- Express.js
- cors
- mongoose

---

### Steps: 

1. Start backend server by running ```npm run dev``` in folder ```./server```
2. Start react by running ```npm start``` in folder ```./client```
3. Generate your own google map api, and replace
   - ```const apiKey=""``` in ```./client/src/Components/Map/Map.js```
   - ```const map_api_key="" ``` in ```./client/src/Components/MountainComponent/Mountain.js```
     
   with your own api
5. Generate your own freeweatherapi, and replace ```const weather_api_key=""``` in ```./client/src/Components/MountainComponent/Mountain.js``` with your own api



