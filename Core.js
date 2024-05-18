import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const ImageButton = ({ title, imageUrl, details, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={imageUrl} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.subText}>{details}</Text>
      </View>
    </TouchableOpacity>
  );
};

const CoreScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{ uri:'https://drive.google.com/uc?id=1qcj2MrTM0qgikVP3YXTyzZpkgnWpgL1_'}}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Icon 
          name="arrow-back" 
          size={30} 
          color="white" 
          style={styles.backIcon}
          onPress={() => navigation.goBack()} 
        />
        <Text style={styles.header}>7-Day Workout Routine</Text>
        <ScrollView style={styles.scrollView}>
          <ImageButton
            title="Day 1"
            details="10 minutes"
            imageUrl={{ uri:'https://drive.google.com/uc?id=1U3-D4OyEXaXmqKCiNf13jLtIEzQ74x25'}}
            onPress={() => navigation.navigate('Day1Screen')}
          />
          <ImageButton
            title="Day 2"
            details="10 minutes"
            imageUrl={{ uri:'https://drive.google.com/uc?id=1U3-D4OyEXaXmqKCiNf13jLtIEzQ74x25'}}
            onPress={() => navigation.navigate('Day2Screen')}
          />
          <ImageButton
            title="Day 3"
            details="10 minutes"
            imageUrl={{ uri:'https://drive.google.com/uc?id=1U3-D4OyEXaXmqKCiNf13jLtIEzQ74x25'}}
            onPress={() => navigation.navigate('Day3Screen')}
          />
          <ImageButton
            title="Day 4"
            details="Rest Day"
            imageUrl={{ uri:'https://drive.google.com/uc?id=1qHQij6eKtEaC8v_Rbpk7i6ZJD0xRnxj4'}}
          />
          <ImageButton
            title="Day 5"
            details="10 minutes"
            imageUrl={{ uri:'https://drive.google.com/uc?id=1U3-D4OyEXaXmqKCiNf13jLtIEzQ74x25'}}
            onPress={() => navigation.navigate('Day5Screen')}
          />
          <ImageButton
            title="Day 6"
            details="11 minutes"
            imageUrl={{ uri:'https://drive.google.com/uc?id=1U3-D4OyEXaXmqKCiNf13jLtIEzQ74x25'}}
            onPress={() => navigation.navigate('Day6Screen')}
          />
          <ImageButton
            title="Day 7"
            details="10 minutes"
            imageUrl={{ uri:'https://drive.google.com/uc?id=1U3-D4OyEXaXmqKCiNf13jLtIEzQ74x25'}}
            onPress={() => navigation.navigate('Day7Screen')}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
    marginLeft: 80,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 310,
    padding: 20,
    marginVertical: 8,
    backgroundColor: '#DDD',
    borderRadius: 10,
    opacity: 0.9,
  },
  backButton: {
    padding: 10,
    position: 'absolute',
    bottom: 20,
    backgroundColor: '#2196F3',
  },
  backButtonText: {
    fontSize: 18,
    color: 'white',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
  },
  backIcon: {
    position: 'absolute',
    left: 10,  
    top: 10,   
    padding: 10, 
  },
});

export default CoreScreen;