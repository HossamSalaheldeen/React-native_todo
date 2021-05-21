import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default class ImagePickerExample extends React.Component {
  state={
      img:null
  }


  async ComponentDidMount(){
    if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
  }

  pickImage = async () => {
      console.log("pick image")
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({img:result.uri});
    }
  };

  render(){
    return (
        <View >
        <Button title="Pick an image from camera roll" onPress={this.pickImage} />
        {this.state.img && <Image source={{ uri: this.state.img }} style={{ width: 200, height: 200 }} />}
        </View>
    );
  }
}