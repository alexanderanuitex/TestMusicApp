import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    wrapper: {
      
    },
    info: {
        backgroundColor: '#AAAAAA',
        height: Dimensions.get('window').height,
        padding: 20
    },
    text: {
        color: 'white',
        fontSize: 16
    },
    infoTrackWrapper: {
        flexDirection: 'column'
    },
    imageTrack: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 300
    },
    names: {
        alignItems: 'center',
        marginTop: 10
    },
    duration: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})