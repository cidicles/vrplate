import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

import Page from './page';
import OtherPage from './otherPage';

export default class vrplate extends React.Component {
  constructor() {
    super();
    this.state = {
        scene: '/other'
    };
  }
  getScene(){
    let {scene} = this.state;
    switch (scene) {
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
  setScene(scene){
    //this.setState({location: '/'})
    //console.log(location);
  }
  render() {
    return(
      <View>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          width: 2,
          alignItems: 'stretch',
          transform: [{translate: [-1, 1, -5]}],
        }}>
          <VrButton
            style={{margin: 0.1, height: 0.3, backgroundColor: 'red'}}
            onClick={()=>this.setState({scene: '/'})}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>Other Page</Text>
          </VrButton>
          <VrButton
            style={{margin: 0.1, height: 0.3, backgroundColor: 'red'}}
            onClick={()=>this.setState({scene: '/other'})}>
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>Main Page</Text>
          </VrButton>
        </View>
        {this.getScene()}
      </View>
    );
  }
};

AppRegistry.registerComponent('vrplate', () => vrplate);
