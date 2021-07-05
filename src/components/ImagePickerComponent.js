import React, {Fragment, Component} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {COLOR} from '../themes/COLOR';

const options = {
  title: 'Select Avatar',
  customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
export default class ImagePickerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUri: '',
      fileUri2: '',
    };
  }

  launchImageLibrary = item => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = {uri: response['assets'][0].uri};
        console.log('Vinneet', source.uri);
        if (item === 'first') {
          this.setState({
            fileUri: source.uri,
          });
        } else {
          this.setState({
            fileUri2: source.uri,
          });
        }
      }
    });
  };

  renderFileUri() {
    if (this.state.fileUri) {
      return <Image source={{uri: this.state.fileUri}} style={styles.images} />;
    } else {
      return (
        <Image
          source={require('../assests/images/dummy.png')}
          style={styles.images}
        />
      );
    }
  }
  renderFileUri2() {
    if (this.state.fileUri2) {
      return (
        <Image source={{uri: this.state.fileUri2}} style={styles.images} />
      );
    } else {
      return (
        <Image
          source={require('../assests/images/dummy.png')}
          style={styles.images}
        />
      );
    }
  }
  render() {
    return (
      <View style={styles.ImageSections}>
        <TouchableOpacity onPress={() => this.launchImageLibrary('first')}>
          {this.renderFileUri()}
        </TouchableOpacity>
        {this.state.fileUri ? (
          <TouchableOpacity
            style={{marginLeft: 7}}
            onPress={() => this.launchImageLibrary('second')}>
            {this.renderFileUri2()}
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {},

  body: {
    borderWidth: 1,
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'flex-start',
  },
  images: {
    width: 130,
    height: 130,
    borderColor: COLOR.GREY,
    borderWidth: 1,
  },
});
