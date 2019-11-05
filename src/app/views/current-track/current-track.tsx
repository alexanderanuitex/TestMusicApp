import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import CurrentTrackStyle from './current-track.style';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
import {SpotifyService} from '../../services/spotify.service';
import moment from 'moment';

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

interface State {
  currentTrack: any;
}

class CurrentTrack extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      currentTrack: {},
    };
  }

  private spotifyInstance = new SpotifyService();

  componentWillMount = () => {
    this.getCurrentTrack();
  };

  getCurrentTrack = async() => {
    const res = await this.spotifyInstance.getCurrentTrack(
      this.props.navigation.getParam('param1'),
    );
    this.setState({
      currentTrack: res,
    });
  }

  render() {
    const {currentTrack} = this.state;  
    return (
      <View style={CurrentTrackStyle.wrapper}>
        {currentTrack.data ? (
          <View style={CurrentTrackStyle.infoTrackWrapper}>
            <Image
              style={CurrentTrackStyle.imageTrack}
              source={{uri: currentTrack.data.album.images[1].url}}
            />
            <View style={CurrentTrackStyle.info}>
              <View style={CurrentTrackStyle.names}>
                <Text style={CurrentTrackStyle.text}>{currentTrack.data.artists[0].name}</Text>
                <Text style={CurrentTrackStyle.text}>{currentTrack.data.name}</Text>
              </View>
              <View style={CurrentTrackStyle.duration}>
                <Text style={CurrentTrackStyle.text}>{currentTrack.data.album.name}</Text>
                <Text style={CurrentTrackStyle.text}>{moment(currentTrack.data.duration_ms).format('M:ss')}</Text>
              </View>
            </View>
          </View>
        ) : null}
      </View>
    );
  }
}

export default CurrentTrack;
