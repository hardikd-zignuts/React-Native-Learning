import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://avatars.githubusercontent.com/u/87645745?v=4',
        }}
      />
      <Text style={styles.navTitle}>Hardik Desai</Text>
    </View>
  );
};

export default Navbar;

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
