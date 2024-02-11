import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../global/colors'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { logout } from '../features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSession } from '../db';


const Header = ({ title, navigation }) => {

  const email = useSelector(state=>state.authReducer.user)
    const localId = useSelector(state=>state.authReducer.localId)
    const dispatch = useDispatch()
    const onLogout = ()=>{
        dispatch(logout())
        deleteSession(localId)

    }
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
      {
        email
        &&
        <TouchableOpacity onPress={onLogout}>
          <MaterialIcons name="logout" size={24} color="grey" />
        </TouchableOpacity>
      }
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
  headerTitle: {
    color: colors.secondary,
    fontFamily: 'EBGaramond-Bold',
    fontSize: 20,
  }
})