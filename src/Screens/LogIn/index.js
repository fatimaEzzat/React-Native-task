import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button
} from 'react-native';
import {styles} from './style';
import Icon from 'react-native-vector-icons/AntDesign';
//import Routes from './src/Navigation/Routes';

export default function Login({navigation}) {
  const [text, setText] = useState(null);
  // const [password, setPassword] = useState(null);
  const [email, setEmail] = useState('');
  const [inputVal, setPhone] = useState('');
  const handleSubmit = () => {
    Alert.alert('Successfuly Login');
  };
  function validatePhoneNumber (enteredPhoneNumber){
  if(enteredPhoneNumber.length != 11){
      return false;
  }
  return /^[0-9]+$/.test(enteredPhoneNumber)
}
const validateSubmitHandler =()=>{
  if (!validatePhoneNumber(inputVal)){
    alert('Wronge Number')
    return;
  }
  alert('Successfuly Number: ' + inputVal);
  navigation.navigate("Home");
}
  // return (
  //    const App = () => {
  // const [text, setText] = useState(null);
  // const [password, setPassword] = useState(null);
  // const handleSubmit = () => {
  //   Alert.alert('Successfuly Login');
  // };
  return( 
    <View style={styles.mainView}>
        <View style={{flexDirection:'row'}}>
        <View style={{borderColor:'#454545',borderWidth:2,marginTop:9,padding:12 ,borderRadius:20,height:60,width:60,alignItems:'center'}}><Icon name="left" size={30} color="#DDD" align='center'/></View>
        <Text style={styles.titleText}>Sign In</Text>
        </View>
        <Text style={styles.lableText}>sign up with one of the followig options</Text>
      {/* view contain tow icons */}
        <View style={{flexDirection:"row"}}>
        <View style={styles.iconContainer}>
        <Icon name="google" size={30} color="#DDD"/>
        </View>
        <View style={styles.iconContainer}>
        <Icon name="apple1" size={30} color="#DDD" onPress={()=>alert('Hello')}/></View>
        </View>
       
        
        <Text style={styles.lableText}>Name</Text>
        <TextInput
        style={styles.inputText}
        placeholder={'name'}
        placeholderTextColor="gray" 
        onChangeText={setText}
        keyboardType="email-address"
      />
      <Text style={styles.lableText}>Email</Text>
      <TextInput
        style={styles.inputText}
        placeholder={'numeric'}
        placeholderTextColor="gray"
        onChangeText={setPhone}
        keyboardType="email-address"
      />
      <Text style={styles.lableText}>Password</Text>
      <TextInput
        style={styles.inputText}
        placeholder={'password'}
        placeholderTextColor="gray"
        onChangeText={setText}
        // keyboardType=""
      />
      <View style={styles.buttonContainer}>
      <Button 
      title='Creat Account'
      color="#841584"
      onPress={()=>{
         validateSubmitHandler() }}
      // style={{width:'100%',height:90, margin: 12,color:'#A42F97'}}
      />
      
      <View style={{flexDirection:'row',marginTop:20}}>
      <Text style={styles.lableText}>Already have an account?  </Text>
      <Text style={styles.loginText}>Log in</Text></View>
        </View>
        </View>
  
 
      );




























    
  
}
//   <View style={styles.mainContainer}>
  //     <TextInput
  //       // style={styles.emailAndPasswordInput}
  //       placeholder={'email'}
  //       // onChangeText={setText}
  //       keyboardType="email-address"
  //     />

  //     <TextInput
  //       style={styles.emailAndPasswordInput}
  //       placeholder={'password'}
  //       onChangeText={setPassword}
  //       keyboardType="numeric"
  //       secureTextEntry={true}
  //     />
  //     <TouchableOpacity
  //       style={{
  //         backgroundColor: '#DDDDDD',
  //         padding: 10,
  //       }}
  //       onPress={handleSubmit}>
  //       <Text> Login </Text>
  //     </TouchableOpacity>
  //   </View>
  // );
