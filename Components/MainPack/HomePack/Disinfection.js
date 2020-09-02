import React from 'react';
import {

} from 'react-native';
import WebView from 'react-native-webview';

export default class Disinfection extends React.Component {
    render() {
        return <WebView source={{ uri: 'https://jupviec.vn/' }} />;
    }
}