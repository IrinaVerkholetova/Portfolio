import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import { ContainerComponent } from "./components/container/container.componet";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <div className="App">
          <ContainerComponent />
        </div>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
