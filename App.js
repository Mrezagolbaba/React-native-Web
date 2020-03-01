import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Provider} from 'react-redux'

import {TopTabNavigator} from './navigation/TopTabNavigator';
import useLinking from './navigation/useLinking';
import configureStore from "./utils/Redux/store/store";

const Stack = createStackNavigator();

 const  App=(props)=> {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);
  // const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  // const reducer = combineReducers(reducer);

  // const store=createStore(reducer)
  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
        // this.props.getListRequest()
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
      const store = configureStore();
    return (
        <Provider store={store}>
              <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar  barStyle="default" />}
                 <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
                      <Stack.Navigator>
                          <Stack.Screen name="Root" component={TopTabNavigator} />
                      </Stack.Navigator>
                  </NavigationContainer>
              </View>
        </Provider>

    );
  }
}


export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
