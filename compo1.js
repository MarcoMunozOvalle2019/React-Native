import React, {Component} from 'react';
import { FlatList,TouchableHighlight, Text, View, StyleSheet} from 'react-native';

class FetchExample extends React.Component {

//class FetchExample extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        //console.log(responseJson.movies)
        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  
  render(){
    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text style={{ color: 'white' }}>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>      
      // <View style={{flex: 1, paddingTop:20}}>
      //       <TouchableHighlight style={styles.buttonContainer} >
      //           <Text style={{ color: 'white' }}>{{dataSource}}</Text>
      //       </TouchableHighlight>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
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
      }
    });
    
    
export default FetchExample