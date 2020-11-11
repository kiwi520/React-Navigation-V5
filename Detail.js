import React, {useCallback} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  useFocusEffect,
  useNavigation,
  useRoute,
  useNavigationState,
} from '@react-navigation/native';

const DetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const index = useNavigationState((state) => state.index);

  console.log(`screen ${index}`);
  useFocusEffect(
    useCallback(() => {
      let res: any = '';
      fetch('https://restcountries.eu/rest/v2/capital/tallinn', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        console.log(response);
        response.json().then((data) => {
          console.log(data);
          res = data;
        });
      });
      return () => console.log(res);
    }),
  );

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{route.params.screenName}</Text>
      <Icon style={styles.icon} name="rocket" size={100} color="#900" />
      <Button
        title={'Go to Feed'}
        onPress={() => {
          return navigation.navigate('Feed');
        }}
      />
      <Button
        title={'View Top Tabs'}
        onPress={() => {
          return navigation.navigate('Top Tabs', {
            name: 'params 2',
          });
        }}
      />
      <Button
        title={'View Bottom Tabs'}
        onPress={() => {
          return navigation.navigate('Bottom Tabs', {
            name: 'params 1',
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    borderRadius: 100,
    borderColor: '#900',
    borderWidth: 3,
    backgroundColor: 'lightgray',
  },
});

export default DetailScreen;
