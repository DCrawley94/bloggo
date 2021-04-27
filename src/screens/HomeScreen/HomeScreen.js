// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import 'firebase/firestore';

import React from 'react';
import {
  ImageBackground, Text, TouchableOpacity, View,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBold, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import NavBar from '../../components/NavBar';
import styles from './styles';
import ProfileHeader from '../../components/ProfileHeader';
import image from '../../images/mountain.jpeg';

export default function HomeScreen({ navigation }) {
  // const handlePress = () => {
  //   console.log('in here');
  //   firebase
  //     .auth()
  //     .signOut()
  //     .then(() => {
  //       console.log('in navigate');
  //       navigation.replace('Login');
  //     });
  // };

  const onLinkPress = () => {
    navigation.navigate('Add Trip');
  };

  // const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{ opacity: 0.6 }}
      >
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>
            <FontAwesomeIcon icon={faBold} style={styles.logo} size={30} />
            logg
            <FontAwesomeIcon
              icon={faGlobeAmericas}
              style={styles.logo}
              size={20}
            />
          </Text>
        </View>
        <ProfileHeader />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={onLinkPress}>
            Add Trip
          </Text>
        </TouchableOpacity>

        <View style={styles.header}>
          <TouchableOpacity style={styles.button}>
            <Text
              style={styles.buttonText}
              onPress={() => navigation.navigate('My Trips')}
            >
              My Trips
            </Text>
          </TouchableOpacity>
          {/* <AddAvatar /> */}
        </View>

        {/* <Image style={styles.tinyLogo} source={image1} /> */}
      </ImageBackground>

      <NavBar />
    </View>
  );
}
