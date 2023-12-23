import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../global/colors'

const Header = ({title}) => {
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  headercontainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  headerTitle : {
    color: colors.secondary,
    fontFamily: 'Alegreya-Bold'
  }
})