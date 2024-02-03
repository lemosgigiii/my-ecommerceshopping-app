import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import  user_data  from "../data/user_data.json"
import { colors } from '../global/colors'
import { useSelector } from 'react-redux'
import LocationSelector from '../components/LocationSelector'

const ProfileScreen = ({navigation}) => {
    const image = useSelector(state=>state.authReducer.profilePicture)
    const location = useSelector(state=>state.authReducer.location)
     
  return (
    <>
    <View style={styles.container}>
            <View>
                <Pressable onPress={()=>navigation.navigate("select image")}
                    style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? '#DCDCDC' : '#E8E8E8',
                        },
                        styles.imageContainer,
                    ]}>
                    {
                        image
                            ?
                            <Image
                                source={{uri:image}}
                                style={styles.profilePicture}
                                resizeMode='contain'
                            />
                            :
                            <Image
                                source={require('../../assets/img/user.png')}
                                style={styles.profilePicture}
                                resizeMode='contain'
                            />

                    }
                </Pressable>
            </View>
            <View style={styles.userDataContainer}>
                <Text style={styles.userTitle}>{user_data.name}</Text>
                <Text style={styles.userData}>{user_data.role}</Text>
                <Text style={styles.userData}>level: {user_data.level}</Text>
                <Text style={styles.userData}>adress: {user_data.address}</Text>
                <Text style={styles.userData}>{user_data.city}</Text>
            </View>
           
        </View>
        {
            location.address
            &&
            <View style={styles.addressContainer}>
                <Text style={styles.addressTitle}>Última ubicación guardada: </Text>
                <Text style={styles.addressDescription}>{location.address}</Text>     
            </View>
        }
         <LocationSelector />
         </>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 20,
        gap: 20,
        alignItems: 'flex-start'
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    userDataContainer: {
        marginTop: 10,
    },
    userTitle: {
        fontFamily: 'EBGaramond-Bold',
        fontSize: 16,
    },
    imageContainer: {
        borderRadius: 100,
    },
    userData: {
        fontFamily: 'EBGaramond-Bold',
        fontSize: 12
    },
    addressContainer: {
        alignItems: 'center',
        gap: 5,
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: colors.primaryBack,
    },
    addressTitle: {
        fontFamily: 'EBGaramond-Bold',
        fontSize: 14,
        color:"#fff"
    },
    addressDescription: {
        fontFamily: 'EBGaramond-Bold',
        color:"#fff"
    }

})