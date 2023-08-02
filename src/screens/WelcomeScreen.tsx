import { Alert, AppRegistry, Dimensions, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface MainProp {
  name: string;
}

const WelcomeScreen: React.FC<MainProp> = (props) => {
  return <View
    style={{
      flex: 1
    }}>
    <ImageBackground source={require('../../assets/bg.jpg')} resizeMode='cover' style={{
      flex: 1
    }}>
      <_renderHeader></_renderHeader>
      <_renderWelcome></_renderWelcome>
      <_renderButtons></_renderButtons>
    </ImageBackground>
  </View>;
};

const _renderButtons = () => {
  return <View>
    <TouchableOpacity 
    onPress={()=>{
      Alert.alert('Alert Title', 'My Alert Msg', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    }}
    style={{
      borderColor: 'white', borderRadius: 4, borderWidth: 1, paddingVertical: 16,
     justifyContent:"center", flexDirection: 'row'
    }}>
      <Image source={require('../../assets/ic_question2.png')}
        style={
          {
            width: 20,
            height: 20,
          }
        }/>
      <Text
        style={{
          color: 'white'
        }}>
        Welcome to
      </Text>
    </TouchableOpacity>
  </View>
}

const _renderWelcome = () => {
  let deviceHeight = Dimensions.get('window').height
  return <View style={{
    marginTop: deviceHeight * 0.15,
    alignItems: 'center',
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
    <Image source={require('../../assets/fire-icon-free-png.png')}
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
    <Image source={require('../../assets/ic_question.png')}
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

