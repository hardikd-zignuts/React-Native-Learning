import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {VEG_DATA} from '../constant/FoodData';
import {addOpacityToHexColor} from '../utils/utils';
import {showToast} from './FormDemo';

const AddButton = ({onPress, title}: {onPress: () => void; title: string}) => (
  <TouchableOpacity onPress={onPress} style={btnStyles.appButtonContainer}>
    <Text style={btnStyles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const ListViewDemo = () => {
  return (
    <>
      <View>
        <Text style={headStyles.head}>Everything in your door step</Text>
        {/* <View style={heroStyles.hero}>
          <ImageBackground
            source={require('./../assets/bg.jpeg')}
            resizeMode="cover"
            style={heroStyles.heroBg}>
            <Text style={heroStyles.title}>Stay home we deliver</Text>
            <Text style={heroStyles.subDescription}>
              Any where... Any time!!
            </Text>
          </ImageBackground>
        </View> */}
        <View style={headStyles.gallery}>
          <FlatList
            numColumns={2}
            data={VEG_DATA}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <CardView {...item} />}
          />
        </View>
      </View>
    </>
  );
};

export default ListViewDemo;

const CardView = ({
  name,
  photo_url,
  price,
  color,
}: {
  name: string;
  photo_url: string;
  price: number;
  color: string;
}) => {
  return (
    <View style={cardStyles.body}>
      <View style={cardStyles.imgContainer}>
        <View
          style={[
            cardStyles.imgOverlay1,
            {backgroundColor: addOpacityToHexColor(color)},
          ]}>
          <View style={[cardStyles.imgOverlay2, {backgroundColor: color}]} />
        </View>
        <Image style={cardStyles.img} source={{uri: photo_url}} />
      </View>
      <View style={cardStyles.footer}>
        <View>
          <Text style={cardStyles.title}>{name}</Text>
          <Text style={cardStyles.price}>₹{price}</Text>
        </View>
        <View>
          <AddButton onPress={() => showToast('Add to cart', 800)} title="+" />
        </View>
      </View>
    </View>
  );
};

const btnStyles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#6FCF97',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

const cardStyles = StyleSheet.create({
  body: {
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 19,
    padding: 15,
    margin: 10,
    backgroundColor: 'white',
    flex: 1,
  },
  imgContainer: {
    marginHorizontal: 20,
    position: 'relative',
  },
  img: {
    width: 85,
    height: 85,
    borderRadius: 10,
    resizeMode: 'contain',
    margin: 'auto',
  },
  title: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '700',
    marginTop: 8,
  },
  price: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: '700',
  },
  imgOverlay1: {
    position: 'absolute',
    width: 100,
    height: 100,
    borderRadius: 110,
    zIndex: -1,
    top: -10,
    left: -8,
  },
  imgOverlay2: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 110,
    zIndex: -1,
    top: 10,
    left: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const headStyles = StyleSheet.create({
  head: {
    fontSize: 30,
    fontWeight: '700',
    color: 'black',
    fontFamily: 'Roboto',
    width: '80%',
    marginTop: 8,
  },
  gallery: {
    marginVertical: 10,
    marginBottom: 50,
  },
});

// const heroStyles = StyleSheet.create({
//   hero: {
//     width: '100%',
//     marginTop: 5,
//     borderRadius: 15,
//     backgroundColor: '#F2C94C',
//   },
//   heroBg: {
//     height: 130,
//     width: '100%',
//     borderRadius: 15,
//   },
//   title: {
//     color: 'white',
//     fontSize: 29,
//     fontFamily: 'Roboto',
//     marginTop: 20,
//     paddingHorizontal: 10,
//     width: 180,
//   },
//   subDescription: {
//     color: 'white',
//     fontSize: 15,
//     fontFamily: 'Roboto',
//     paddingHorizontal: 10,
//   },
// });
