import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Input from '../components/input'
import { colors } from '../global/colors'
import { useLogInMutation } from '../services/authService'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/authSlice'

const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [triggerLogIn, result] = useLogInMutation()

    const onSubmit = () => {
        triggerLogIn({email, password})
        console.log(result)
    }
    const dispatch = useDispatch ()

    useEffect(()=> {
    if(result.data){
        dispatch(setUser(result.data))
    }
    }, [result])
    return (
        <View style={styles.container}>
            <Input
                label="Email:"
                onChange={setEmail}
                
            />
            <Input
                label="Password:"
                onChange={setPassword}
                isSecureEntry={true}
            
            />
            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
                <Text style={styles.btnText}>Log in</Text>
            </TouchableOpacity>
            <View style={styles.altContainer}>
                <Text style={styles.subtitle}>You dont have a account?</Text>
                <TouchableOpacity onPress={() => { navigation.navigate("Login") }}>
                    <Text style={styles.subtitleLink}>Create account</Text>
                </TouchableOpacity>
            </View>
            </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        gap: 10,
    },
    btn: {
        padding: 10,
        backgroundColor: colors.primaryBack,
        borderRadius: 8,
        margin: 5,

    },
    btnText: {
        color: "#fff",
        fontFamily: "EBGaramond-Bold"
    },
    altContainer: {
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    subtitle: {
        color: "#fff",
        fontFamily: "EBGaramond-Bold",
        fontSize: 12,
    },
    subtitleLink: {
        fontFamily: "EBGaramond-Bold",
        color: "#fff",
        fontSize: 11,
        textDecorationLine: 'underline'
    }
})