import { Dimensions, StyleSheet } from 'react-native'
import { brightColor, darkColor } from '../constants/colors'

export const style = StyleSheet.create({
  header: {
    width: '100%',
    height: (Dimensions.get('window').height / 3),
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: darkColor,
    position: 'relative',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'sono',
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 45,
  },
  iconContainer: {
    width: 150,
    height: 150,
    borderRadius: 1000,
    backgroundColor: brightColor,
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: -75,
  },
  imageStyle: {
    width: 75,
    height: 75,
  }
})
