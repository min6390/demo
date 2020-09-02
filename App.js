import React from 'react';
import 'react-native-gesture-handler';
import Route from './Components/Route/Route';
import * as moment from 'moment';
import {AppearanceProvider} from 'react-native-appearance';

class App extends React.Component {

    render() {
        return (
            <AppearanceProvider>
                <Route/>
            </AppearanceProvider>
        );
    }
}

export default App;
