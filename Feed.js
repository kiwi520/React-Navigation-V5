import React from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const FeedScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed Screen</Text>
      <Button
        title={'Go to Detail'}
        onPress={() => {
          return navigation.navigate('Detail', {
            screenName: 'My Detail Screen',
          });
        }}
      />
    </View>
  );
};

export default FeedScreen;
