import React, { Component } from 'react';
import {Text,View,Image, TouchableOpacity,StyleSheet} from 'react-native';

export class FlatLIstDisplayContent extends Component {
    render (){
        return (
            <TouchableOpacity {...this.props.otherProps}
            onPress={this.props.onPress} style={[styles.mainContainer,this.props.style]}>
                <View style={{flexDirection:'row',paddingHorizontal: 30}}>
                    {this.props.image && ( <View style={{justifyContent:'center'}}>
                <Image {...this.props.image} style={[styles.image,this.props.imageStyling]}/>
                </View>)}
                <View style={{paddingHorizontal: 20}}>
                <Text style={[styles.nameStyling,this.props.nameStyling]}>{this.props.name}</Text>
                {this.props.speciality && (<Text style={[styles.specialityStyling,this.props.specialityStyling]}>{this.props.speciality}</Text>)}
                {this.props.extraDetails && (<Text style={[styles.extraDetailsStyling,this.props.extraDetailsStyling]}>{this.props.extraDetails}</Text>)}
                {this.props.component}
                </View>
                </View>
            </TouchableOpacity>
        )}}

FlatLIstDisplayContent.defaultProps = {
    name: 'Name',
    onPress: null
    //image: {source: require('./../assets/img_profileImgPlaceholder.png')},
    //speciality: 'Speciality',
    //extraDetails: 'extraDetails',

}

const styles = StyleSheet.create({
    mainContainer: {
        padding: 12,
    },
    image: {
        width: 50,
        height: 50,
    },
    nameStyling: {
        fontSize: 20
    },
    specialityStyling: {
        fontSize: 18
    },
    extraDetailsStyling: {
        fontSize: 16
    }
})