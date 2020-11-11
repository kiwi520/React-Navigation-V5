import React from 'react';
import {Text, View} from 'react-native';

class ContactsScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render(): React$Node {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Contacts Screen</Text>
      </View>
    );
  }
}

export default ContactsScreen;
