import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import RecommendedList from '../views/recommended-list/recommended-list';
import ListOfSelected from '../views/list-of-selected/list-of-selected'
import CurrentTrack from '../views/current-track/current-track';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    ListOfSelected: {
      screen: ListOfSelected
    },
    RecommendedList: RecommendedList,
    CurrentTrack: CurrentTrack,
  },
  {
    initialRouteName: 'RecommendedList',
    headerMode: "none"
  },
);

export default createAppContainer(createSwitchNavigator({
    Home: AppNavigator,
    },
    {
      initialRouteName: 'Home',
    }
));
