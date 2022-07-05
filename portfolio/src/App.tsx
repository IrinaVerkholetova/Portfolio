import React from "react";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import { ContainerComponent } from "./components/container/container.componet";
import { BackTopComponent } from "./components/back-top/back-top.component";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <ContainerComponent />
        <BackTopComponent />
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
