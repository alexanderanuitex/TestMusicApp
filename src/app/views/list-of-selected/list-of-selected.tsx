import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import ListOfSelectedStyle from './list-of-selected.style';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
  ScrollView,
} from 'react-navigation';
import {SpotifyService} from '../../services/spotify.service';


interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State {
  tracks: any;
}

class ListOfSelected extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      tracks: {},
    };
  }

  private spotifyInstance = new SpotifyService();

  componentWillMount = () => {
    this.getTracks();
  };

  private getTracks = async () => {
    let res = await this.spotifyInstance.getTracksFromPlaylist(
      this.props.navigation.getParam('param'),
    );
    this.setState({
      tracks: res,
    });
  };

  render() {
    return (
      <ScrollView>
        <View style={ListOfSelectedStyle.wrapper}>
        <View>
          <Image style={ListOfSelectedStyle.albumImage} source={{uri: this.props.navigation.getParam('albumImage')}}/>
        </View>
          {this.state.tracks.data
            ? this.state.tracks.data.items.map((item, index) => {
                return (
                  <View key={index}>
                  <TouchableOpacity style={ListOfSelectedStyle.trackInfo} onPress={() => this.props.navigation.navigate('CurrentTrack', {param1: item.track.href})}>
                      <View>
                        <Image
                          style={{width: 64, height: 64}}
                          source={{uri: item.track.album.images[2].url}}
                        />
                      </View>
                      <View style={ListOfSelectedStyle.trackNames}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.track.album.artists[0].name}</Text>
                        <Text>{item.track.name}</Text>
                        <Text>Popularity: {item.track.popularity}</Text>
                      </View>
                      </TouchableOpacity>
                    </View>
                );
              })
            : null}
        </View>
      </ScrollView>
    );
  }
}

export default ListOfSelected;
