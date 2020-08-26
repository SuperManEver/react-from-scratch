import "./index.css";
import * as serviceWorker from "./serviceWorker";

import Didact from "./didact";

function App(props) {
  return Didact.createElement("h1", null, "Hi ", props.name);
}

const element = Didact.createElement(App, {
  name: "Hello Nick",
});

const container = document.getElementById("root");

if (container) {
  Didact.render(element, container);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
