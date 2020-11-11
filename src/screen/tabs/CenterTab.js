import React from 'react';
import {Text, View} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

const CenterTab = () => {
  const isFocused = useIsFocused();
  console.log(isFocused);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>CenterTab</Text>
    </View>
  );
};

export default CenterTab;
