import React from 'react';
import store from "./src/redux/store";
import AppNavigator from "./src/navigations/app-navigator";
import { Provider } from "react-redux";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

export default App;
