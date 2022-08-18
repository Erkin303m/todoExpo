import React from 'react'
import { StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Navigation from './screen/Menu/Navigation';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>

  );
}

const styles = StyleSheet.create({});
