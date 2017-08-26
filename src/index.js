import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App/App.js';
import registerServiceWorker from './utils/registerServiceWorker.js';
import './grid.css';
import './index.css';

const posts = [
  { id: 1, title: "Pinky: Son of Spunky", author: "Morgan McCircuit", date: "Wednesday, March 1, 2017", body: "Well, actually more like great-grandson or great-great grandson, I guess. This little squirrel had so much spunk that he reminded me of my dear old friend Spunky, who was featured a lot on this blog. He had the same cute face and spunky personality. It was good to think that Spunky's genes had survived! Pinky managed to survive the entire winter not only with no winter coat, but with no coat at all, due to a bad case of what looked like mange. But that didn't phase him: he would always run circles around the other larger squirrels, and managed to evade their bullying. We had a lot of fun playing peanuts with him: we'd throw a peanut, he'd grab it, go bury it, then come back for another. This went on forever. " },
  { id: 2, title: "The babies are down!", author: "Dan Raspberry", date:"Saturday, June 6, 2015", body: "In the last few days they've been venturing out of their safety zone, going father afield and sampling some of the bounties of the new world." }
];

export default posts;

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root'));
registerServiceWorker();
