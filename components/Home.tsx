import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const Home = ({navigation}: {navigation: any}) => {
  return (
    <>
      <View style={styles.bodyContainer}>
        <Button title="Form Demo" onPress={() => navigation.navigate('Form')} />
      </View>
      <View style={styles.bodyContainer}>
        <Button
          title="ECommerce Demo"
          onPress={() => navigation.navigate('ECommerce')}
        />
      </View>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  bodyContainer: {
    margin: 10,
  },
});
