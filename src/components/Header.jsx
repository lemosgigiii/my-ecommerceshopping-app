import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import { Ionicons } from '@expo/vector-icons'; 

const Header = ({title, navigation}) => {
  return (
    <View style={styles.headercontainer}>
      {
        navigation.canGoBack()
        ?
      <TouchableOpacity onPress={navigation.goBack}>
        <Ionicons name="ios-arrow-back-circle-outline" size={26} color="grey" />
      </TouchableOpacity>
      :
      <View></View>
}
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headercontainer: {
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 45,
    paddingVertical: 37,
    paddingStart: 15,
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  headerTitle : {
    color: colors.secondary,
    fontFamily: 'EBGaramond-Bold',
    fontSize: 20,
  }
})