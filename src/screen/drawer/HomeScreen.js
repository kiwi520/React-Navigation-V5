import React from 'react';
import {Text, View} from 'react-native';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render(): React$Node {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

export default HomeScreen;
