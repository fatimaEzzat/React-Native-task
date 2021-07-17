import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainView:{
    
    backgroundColor:'black',
    flex:1,
    // alignItems:'center',
    padding:10
  },
  titleText:{
    color:'white',
    fontSize:50,
    fontFamily:"Cochin",
    fontWeight:'bold',
    marginLeft:20,
    marginBottom:50
  
  },
  lableText:{
    color:'white',
    marginLeft:25,
    fontSize:20,
    
  },
  iconContainer:{
    width:'10%',
    borderWidth:2,
    borderColor:'#333333',
    padding:20,
    margin:10,
    flex:0.5,
    backgroundColor: "#171717",
    alignItems:'center',
    borderRadius:15
  },
  inputText:{
    borderColor:'#A42F97',
    // width:'90%',
    height:70,
    margin: 12,
    borderWidth:1 ,
    borderRadius:10,
    padding:10,
    color:'white',
    fontSize:20,
    backgroundColor:'#171717',
    alignItems:'center',
  },
  buttonContainer:{
    
    width:'90%',
    height:120,
    margin:12
  
  },
  loginText:{
    fontWeight:'bold',
    color:'gray',
    marginTop:5,
    fontSize:15
  }

});

export {styles};
