
import React,{useState} from 'react';
import { Button ,TextInput} from 'react-native-paper';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignupScreen = (props) => {

  const [email,setEmail] = useState('');
  const [password,setPassword]=useState('')

  const sendCred= async (props)=>{
    console.log(email)
    console.log(password)
     fetch("http://localhost:3000/signup",{
       method:"POST",
       headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        "email":email,
        "password":password
      })
     })
     .then(res=>res.json())
     .then(async (data)=>{
            try {
              await AsyncStorage.setItem('token',data.token)
              props.navigation.replace("home")
            } catch (e) {
              console.log("error hai",e)
            }
     })
  }
  return (
   <> 
   <KeyboardAvoidingView behavior="position">
     <StatusBar backgroundColor="hotpink" barStyle="light-content" />
      <Text 
      style={{fontSize:35,marginLeft:18,marginTop:10,color:"#3b3b3b"}}>welcome to</Text>
      <Text 
      style={{fontSize:30,marginLeft:18,color:"hotpink"}}
      >Agatsa Software Pvt. Ltd.</Text>
      <View
      style={{
        borderBottomColor:"hotpink",
        borderBottomWidth:4,
        borderRadius:10,
        marginLeft:20,
        marginRight:150,
        marginTop:4
      }}
       />
      <Text
      style={{
        fontSize:20,marginLeft:18,marginTop:20
      }}
      
      >create new account</Text>
      <TextInput
        label='Email'
        mode="outlined"
        value={email}
        style={{marginLeft:18,marginRight:18,marginTop:18}}
        theme={{colors:{primary:"hotpink"}}}
        onChangeText={(text)=>setEmail(text)}
     
      />
      <TextInput
        label='password'
        mode="outlined"
        secureTextEntry={true}
        value={password}
        onChangeText={(text)=>{setPassword(text)}}
        style={{marginLeft:18,marginRight:18,marginTop:18}}
        theme={{colors:{primary:"hotpink"}}}
     
      />
      <Button 
        mode="contained"
        style={{marginLeft:18,marginRight:18,marginTop:18}}
       onPress={() => sendCred(props)}>
        signup
      </Button>
      <TouchableOpacity>
        <Text
      style={{
        fontSize:18,marginLeft:18,marginTop:20
      }}
      onPress={()=>props.navigation.replace("login")}
      >already have a account ?</Text>
      </TouchableOpacity>
      
      </KeyboardAvoidingView>
   </>
  );
};



export default SignupScreen;