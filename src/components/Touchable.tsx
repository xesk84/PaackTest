
import {
    Platform,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
  } from 'react-native'
  
  export const Touchable = Platform.select<any>({
    android: TouchableNativeFeedback,
    ios: TouchableWithoutFeedback,
  })
  

//   export const Touchable = Platform.select<any>({
//     android: TouchableNativeFeedback,
//     ios: TouchableOpacity,
//   })