import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import ListViewDemo from './components/ListViewDemo';
// import FormDemo from './components/FormDemo';

const App = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{
            uri: 'https://avatars.githubusercontent.com/u/87645745?v=4',
          }}
        />
        <Text style={styles.navTitle}>Hardik Desai</Text>
      </View>
      <View style={styles.bodyContainer}>
        {/* <FormDemo /> */}
        <ListViewDemo />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#20232A',
    paddingHorizontal: 5,
    paddingVertical: 10,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bodyContainer: {
    margin: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  navTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Verdana',
  },
});

export default App;
