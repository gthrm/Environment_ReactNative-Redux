import React from 'react';
import { createStore } from 'redux';

import { Provider } from 'react-redux';
import { rootReducer } from './src/store/reducers.js';

import AppNavigator from './src/AppNavigator/AppNavigator.js';

const store = createStore(rootReducer)


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
