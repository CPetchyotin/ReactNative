import { StyleSheet, Text, View ,Button,TextInput,Alert} from 'react-native'
import React,{useState} from 'react'

const Recap = () => {
const[password,setPassword] = useState('')
const[email,setEmail] = useState('')
    const alertProvoke= ()=>{
       alert('email: '+email+'\n'+'Password: '+password)
    }

  return (
    <View style = {styles.container}>
      <TextInput
        placeholder='Enter email'
         style={styles.input}
         value={email}
         onChangeText={(value) => {
          setEmail(value);
        }}
        />
        <Text>{'\n'}</Text>
        <TextInput
        placeholder='Enter Password'
        style={styles.input}
        value={password}
        onChangeText={(value) => {
         setPassword(value)
        }}
         />
        <Text>{'\n'}</Text>
          <Button
          style={styles.submitButton}
         title='SUBMIT'
            onPress={()=>{
                alertProvoke()
            }}
         />
        </View>
  ) 
}

export default Recap

const styles = StyleSheet.create({
    container: {
        paddingTop:23  
    },
    input: {
        margin:15,
        height:40,
        bordercolor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding:10,
        margin:15,
        height:40,
    },
    submitButtonText: {
        color: 'white'
    }
})