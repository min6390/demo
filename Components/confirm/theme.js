import {Dimensions, StyleSheet} from 'react-native';
import colors from './colors';

const widthScreen = Dimensions.get('window').width;
export const darkTheme = {
    titleColor: 'black',
    containerColor: colors.wallpaperColor,
    textColor: 'white',
    colorButtonView: '#a9a9a9',
};
export const lightTheme = {
    titleColor: 'pink',
    containerColor: colors.wallpaperColor,
    textColor: 'black',
    colorButtonView: 'white',
};

export const stylesTest = StyleSheet.create({
    scrollView: {
        backgroundColor: 'pink',
    },
    container: {
        backgroundColor: 'pink',
        flexDirection: 'row',
        height: '8%',
        paddingHorizontal: 10,
    },
    imageView: {
        height: 40,
        width: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 20,
    },
    imageAccount: {
        height: 40,
        width: 40,
        borderColor: 'gray',
        borderRadius: 20,
        borderWidth: 2,
        marginLeft: 15,
    },
    textAccount: {
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#778899',
    },
    viewScrollView: {
        margin: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 20,
    },
    buttonViewLeft: {
        width: (widthScreen - 80) / 2,
        height: (widthScreen - 80) / 2,
        backgroundColor: '#FFF',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 20,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#8fbc8f',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    imageViewButton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        borderColor: '#6495ed',
        borderRadius: 50,
        borderWidth: 3,
        marginTop: 10,
    },
    imageViewCard: {
        height: 150,
        width: 320,
        margin: 10,
        marginHorizontal: 10,
        borderRadius: 27,
        borderWidth: 1,
        borderColor: 'gray',
    },
});

