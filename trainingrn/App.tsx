import React from 'react';
import RootStack from './src/nav/RootStack';
import store from './src/reduxs/store';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

const App = () => {
  React.useEffect(() => { 
    SplashScreen.hide(); 
  }); 
  
  return (
    <Provider store={store()}>
      <RootStack />
    </Provider>
  );
};

export default App;
