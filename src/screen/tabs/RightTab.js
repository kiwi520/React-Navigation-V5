import React from 'react';
import {Text, View} from 'react-native';

class RightTab extends React.Component {
  constructor(props) {
    super(props);
  }
  render(): React$Node {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>RightTab</Text>
      </View>
    );
  }
}

export default RightTab;
