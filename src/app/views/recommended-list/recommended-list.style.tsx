import { StyleSheet, Dimensions } from "react-native";
const window = Dimensions.get('window');

export default StyleSheet.create({
    wrapper: {
        padding: 20,
        backgroundColor: '#EBEBED',
        height: window.height
    },
    titleLists: {
        color: 'black',
        fontSize: 20,
        marginBottom: 20
    },
    allPlaylists: {

    },
    playlistInfo: {
        color: 'black',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 30
    }
})