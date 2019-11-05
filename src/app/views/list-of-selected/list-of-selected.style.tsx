import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    trackInfo: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
        marginLeft: 20
    },
    trackNames: {
        flexDirection: 'column',
        marginLeft: 10,
    },
    wrapper: {
        
    },
    albumImage: {
        height: 250,
        width: Dimensions.get('window').width,
        marginBottom: 20
    }
})