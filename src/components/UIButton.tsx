import { Alert, AppRegistry, Dimensions, Image, ImageBackground, Text, TouchableOpacity, View } from 'react-native';

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