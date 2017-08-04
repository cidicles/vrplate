import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

import Page from './page';
import OtherPage from './otherPage';

export default class vrplate extends React.Component {
  constructor() {
    super();
    this.state = {
        location: '/'
    };
  }
  render() {
    let {location} = this.state;
    switch (location) {
      case '/':
        return (
          <Page />
        );
      case '/other':
        return (
          <OtherPage />
        );
      default:
        return (
          <Page />
        );
    }
  }
};

AppRegistry.registerComponent('vrplate', () => vrplate);
