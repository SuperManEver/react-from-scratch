import "./index.css";
import * as serviceWorker from "./serviceWorker";

import Didact from "./didact";

/** @jsx Didact.createElement */
function Counter() {
  const [state, setState] = Didact.useState(1);

  return (
    <div>
      <p>Value: {state}</p>
      <button onClick={() => setState((c) => c + 1)}>+</button>
      {/* <button onClick={() => console.log("HEllo")}>+</button> */}
    </div>
  );
}

const element = <Counter />;

const container = document.getElementById("root");

if (container) {
  Didact.render(element, container);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
