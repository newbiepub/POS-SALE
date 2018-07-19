import React from "react";
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {store} from 'src/store';
import AppRoute from 'src/routes';

import "./styles.css";

function App() {
  return (
    <Provider store={store}>
        <AppRoute/>
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
