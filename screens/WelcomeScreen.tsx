import { AppRegistry, Dimensions, Image, ImageBackground, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface MainProp {
  name: string;
}

const WelcomeScreen: React.FC<MainProp> = (props) => {
  return <View
    style={{
      flex: 1
    }}>
    <ImageBackground source={require('../assets/bg.jpg')} style={{
      flex: 1
    }}
      resizeMode='cover'>
      <_renderHeader></_renderHeader>
      <_renderWelcome></_renderWelcome>
    </ImageBackground>
  </View>;
};

const _renderWelcome = () => {
  let deviceHeight = Dimensions.get('window').height
  return <View style={{
    marginTop: deviceHeight * 0.15,
    alignItems:'center',
  }}>
    <Text
      style={{
        color: 'white'
      }}>
      Welcome to
    </Text>
    <Text
      style={{
        color: 'white',
        marginVertical: 8,
        fontSize: 20
      }}>
      Fullerton-Health.co
    </Text>
    <Text
      style={{
        color: 'white'
      }}>
      please select your account type
    </Text>
  </View>;
}

const _renderHeader = () => {
  return <View style={{ flexDirection: 'row', backgroundColor: 'green', alignItems: 'center' }}>
    <Image source={require('../assets/fire-icon-free-png.png')}
      style={
        {
          width: 50,
          height: 50,
        }
      }
    />
    <Text
      style={{
        color: 'white',
        flex: 1
      }}>
      This is WelcomeScreen
    </Text>
    <Image source={require('../assets/ic_question.png')}
      style={
        {
          marginEnd: 16,
          width: 25,
          height: 25,
          tintColor: 'white'
        }
      }
    />
  </View>;
}

export default WelcomeScreen;

