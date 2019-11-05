import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
  Platform,
  Image,
} from 'react-native';
import RecommendedListStyle from './recommended-list.style';
import {
  NavigationScreenProp,
  NavigationParams,
  NavigationState,
  ScrollView,
} from 'react-navigation';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import environments from '../../environments/environments';
import {SpotifyService} from '../../services/spotify.service';
import moment from 'moment';

interface State {
  playList: any;
}
interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;

}

class RecommendedList extends Component<Props, State> {
  public playlists: any;
  constructor(props: Props, private spotifyService: SpotifyService) {
    super(props);
    this.state = {
      playList: {},
    };
  }

  private spotifyInstance = new SpotifyService();
  request_location_runtime_permission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.getCurrentLocation();
      } else {
        Alert.alert('Location Permission Not Granted');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  componentWillMount = () => {
    this.request_location_runtime_permission();
    this.getPlayList();
  };

  private getPlayList = async () => {
    
    this.setState({
      playList: await this.spotifyInstance.getPlaylists()
    });
  };

  getCurrentLocation = async () => {
    await Geolocation.getCurrentPosition(
      async position => {
        this.getLatLong(position.coords.latitude, position.coords.longitude);
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 30000},
    );
  };

  public getLatLong = async (lat: any, long: any) => {
    await axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${environments.API_KEY}`,
      )
      .then(response => {
        console.log(response);
        return response;
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  };

  render() {
    const {playList} = this.state;

    return (
      <>
<ScrollView style={RecommendedListStyle.wrapper}>

    { playList.data
     
      ?  playList.data.playlists.items.map((item: any) => {
          return (
         
            <View 
              style={RecommendedListStyle.allPlaylists}
              key={item.id}
            >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('ListOfSelected',{param: item.tracks.href, albumImage: item.images[0].url})}>
              <View>
              <Image
                style={{width: 200, height: 200}}
                source={{uri: item.images[0].url}}
              />
              <Text style={RecommendedListStyle.playlistInfo}>
                {item.name} - {item.tracks.total} Tracks
              </Text>
            </View>
            </TouchableOpacity>
            </View>
          );
        })
      : null
      }
      </ScrollView>
   </>
    );
  }
}

export default RecommendedList;
