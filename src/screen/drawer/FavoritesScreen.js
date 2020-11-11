import React from 'react';
import {Text, View} from 'react-native';

class FavoritesScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render(): React$Node {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Favorites Screen</Text>
      </View>
    );
  }
}

export default FavoritesScreen;
