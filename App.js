
import React, { Component } from "react";
import { Animated, Image,TextInput,Alert, TouchableHighlight,StyleSheet, Text, View, ImageBackground } from "react-native";
import Video from "react-native-video";

import FetchExample from "./compo1";

export default class HomeActivity extends Component {

  constructor(props) {
      super(props);
      this.state = { saltando: true };
      state = {
        email   : '',
        password: '',
        paso:true
      }
      //  setInterval(() => (
      //    this.setState(previousState => (
      //      { saltando: !previousState.saltando }
      //    ))
      //  ), 500);
  }

  onClickListener = (viewId) => {
    if(viewId==="registrarse"){Alert.alert("Marco avisa:", "Tecla presionada: "+viewId);}
    if(viewId==="Logearse"){
       Alert.alert("Marco avisa:", "Email:"+this.state.email+"  Pass:"+this.state.password);
      }
    if(viewId==="pass"){
      this.setState(previousState => (
        { paso: !previousState.paso }
      ))    
    }
  }

  render() {
    return (

    <ImageBackground  source={{uri: 'https://media3.giphy.com/media/wWue0rCDOphOE/giphy.gif'}}  style={styles.container} >

      {/* <Image style={{height: 128, width: 170, marginTop: 20}}source={require('../Marco/assets/yo.png')} />       */}


      <Video source={require('../Marco/assets/2.mp4')}   // Can be a URL or a local file.
       ref={(ref) => {
         this.player = ref
       }}                                      // Store reference
         resizeMode="cover"
         repeat={true}                                      // Store reference
         onBuffer={this.onBuffer}                // Callback when remote video is buffering
         onError={this.videoError}               // Callback when video cannot be loaded
         style={styles.backgroundVideo} 
       />


          <View style={styles.container}>
           {/* <TouchableOpacity style={ styles.button } >
             <Text style={ styles.text }>jajsd</Text>
           </TouchableOpacity> */}

          {/* <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={require('../Marco/assets/yo.png')}/>
            {this.state.saltando &&
            <TextInput style={styles.inputs}
                placeholder="   Ingresa tu Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}
                />}
            {!this.state.saltando &&
            <TextInput style={styles.inputs}
                placeholder="Ingresa tu Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}/>
            }
          </View> */}

          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={require('../Marco/assets/yo.png')}/>
            <TextInput style={styles.inputs}
                placeholder="Ingresa tu Email"
                keyboardType="email-address"
                underlineColorAndroid='transparent'
                onChangeText={(email) => this.setState({email})}/>
          </View>

          <View style={styles.inputContainer}>
            <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
            <TextInput style={styles.inputs}
                placeholder="Password"
                secureTextEntry={true}
                underlineColorAndroid='transparent'
                onChangeText={(password) => this.setState({password})}/>
          </View>

            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('Logearse')}>
                <Text style={styles.loginText}>Ingresa</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('pass')}>
                <Text  style={{ color: 'white' }}>API: Peliculas</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('registrarse')}>
                <Text style={{ color: 'white' }}>React Native</Text>
            </TouchableHighlight>
            {this.state.paso && <FetchExample/>}

      </View>
      
    </ImageBackground>
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  backgroundVideo1: {
    position: 'relative',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:10,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:150,
    borderRadius:30,
    backgroundColor: '#ff3333',
    Color: '#ffffff'
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:150,
    borderRadius:30,
    backgroundColor: '#ff3333',
    Color: '#ffffff'
  },
  button: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: "white",
    fontWeight: "bold"
  },
  text: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: "white",
    fontWeight: "bold"
  },
   inputs:{
       height:45,
       marginLeft:16,
       borderBottomColor: '#FFFFFF',
       flex:1,
   },
   inputIcon:{
     width:30,
     height:30,
     marginLeft:15,
     justifyContent: 'center'
   },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: "white",
    fontWeight: "bold"
  }
});


// // // skip this line if using Create React Native App
// // AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);