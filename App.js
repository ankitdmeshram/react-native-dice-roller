import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [uri, setUri] = useState(DiceOne);

  const playButtonTapped = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri(DiceOne);
        break;
      case 2:
        setUri(DiceTwo);

        break;
      case 3:
        setUri(DiceThree);

        break;
      case 4:
        setUri(DiceFour);

        break;
      case 5:
        setUri(DiceFive);

        break;
      case 6:
        setUri(DiceSix);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <StatusBar backgroundColor={'#222831'} />
      <View style={styles.container}>
        <Image style={styles.image} source={uri} />
        <Pressable onPress={playButtonTapped}>
          <Text style={styles.gamePlayButton}>Tap Me</Text>
        </Pressable>
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222831',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
  gamePlayButton: {
    color: 'white',
    fontSize: 20,
    marginTop: 30,
    marginBottom: 30,
    color: '#f2a365',
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
 

});
