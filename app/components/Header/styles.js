import EStyleSheet from 'react-native-extended-stylesheet';
// import { StatusBar } from 'react-native';

const styles = EStyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    '@media ios': {
      paddingTop: 20,
    },
    // Pushes the Settings icon away from the Android Status Bar slightly.
    // This is commented out because we enabled the Status Bar on routes.js.
    // The code is `cardStyle: { paddingTop: StatusBar.currentHeight },`.
    // '@media android': {
    //   paddingTop: StatusBar.currentHeight,
    // },
  },
  button: {
    alignSelf: 'flex-end',
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  icon: {
    width: 18,
  },
});

export default styles;
