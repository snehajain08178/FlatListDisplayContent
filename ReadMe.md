# FlatListDisplayContent

A library for Displaying the Contents of FlatList easily.

<img src="http://drive.google.com/uc?export=view&id=1nRiAdDhD9PDOyA5GgGBfpIvvnVS65Pkd"  width="256" height="500">


## Installation

```bash
yarn add flatlistdisplaycontent
```

or

```bash
npm i --save flatlistdisplaycontent
```

<!-- ## Available Props

Property	|	Description |
:---------|:------------|
placeholder	|		The placeholder for the search bar.
style | Sets the style for searchBox.
placeHolderStyling |  Sets style for placeHolder.
placeholderTextColor |  Sets color of placeHolder.
onChangeText | Used to write search logic .
clearStyling |  Sets style for clear Button -->

  
## Usage

```
import FlatLIstDisplayContent from 'flatlistdisplaycontent';

<FlatLIstDisplayContent 
    name = 'Sneha'
    speciality='React Native Devoloper'
    extraDetails= 'Loves Dancing'
    imageStyling={{width: 50,height:50}}
    image={{source: {uri:url}}} 
    style={{borderWidth:2}}
    onPress={() => console.log('Hi')}
    nameStyling= {{fontSize:10}}
    specialityStyling= {{color:'red'}}
    extraDetailsStyling= {{fontSize:20}}
    {...otherProps}
     />
```
##### Note

- Image can also be given as :

```
image={{ source: require('path of the image')}}
```


## Example

```

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';
import FlatLIstDisplayContent from 'flatlistdisplaycontent';

class App extends React.Component {
  state = {
    data : [{   name: 'Parineeti',
                speciality:'React Native Devoloper',
                extraDetails:'Loves Dancing',
                uri:'https://upload.wikimedia.org/wikipedia/commons/b/b9/Parineeti_Chopra_in_2016.jpg'
            },
            {   name: 'Sidharth',
                speciality:'React Native Devoloper',
                extraDetails:'Loves Coding',
                uri:'https://upload.wikimedia.org/wikipedia/commons/6/69/Sidharth_Malhotra_2016.jpg'
            }]
  }

render(){
  return (
   <View>
     <FlatList 
     data = {this.state.data}
     renderItem = {({item}) => (
        <View style={{paddingTop: 10}}>
            <FlatLIstDisplayContent 
                name ={item.name} 
                speciality={item.speciality}
                extraDetails={item.extraDetails} 
                imageStyling={{width: 50,height:50}}
                image={{source: {uri:item.uri}}} 
                style={{borderWidth:2}}
            />
        </View>
     )}/>
   </View>
  );
};}

const styles = StyleSheet.create({
});

export default App;

```