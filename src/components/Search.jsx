import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'; 


const Search = ({onSearchHandlerEvent}) => {

    const [searchInput, setSearchInput] = useState('')
    const [error, setError] = useState('')

    const onSearchHandler = () => {
        const regEx = /[^\w\s]/
        if(regEx.test(searchInput)){
            setError("Sólo se admiten letras y números")
            setSearchInput("")
        }else{
            setError("")
            onSearchHandlerEvent(searchInput)
        }
    }

    const onResetSearchHandler = () => {
        setSearchInput("")
        onSearchHandlerEvent(searchInput)
    }

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.textInput}
        onChangeText={setSearchInput}
        placeholder='search...'
        value={searchInput}
    />
    <TouchableOpacity onPress={()=>onSearchHandlerEvent(searchInput)}>
    <MaterialCommunityIcons name="shopping-search" size={24} color="black" />
    </TouchableOpacity>
    <TouchableOpacity onPress={onResetSearchHandler}>
    <Entypo name="circle-with-cross" size={24} color="black" />
    </TouchableOpacity>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    searchContainer :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding:10,
    },
    textInput:{
        width: '80%',
    },
})