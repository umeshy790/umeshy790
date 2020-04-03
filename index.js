/**
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {name as appName} from './app.json';

import {ApolloClient} from 'apollo-client';
import {ApolloProvider} from '@apollo/react-hooks';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {HttpLink} from 'apollo-link-http';
import Root from './src/Root';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DetailedArticle from './src/screens/DetailedArticle';
import {path} from './src/env';
import InShorts from './src/screens/InShorts';
import ShortsWebView from './src/screens/ShortsWebView';

const Stack = createStackNavigator();

const client = new ApolloClient({
  link: new HttpLink({
    uri: path,
  }),
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <StatusBar backgroundColor="#f8faf7" barStyle="dark-content" />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Root}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailedArticle"
          component={DetailedArticle}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InShorts"
          component={InShorts}
          options={{headerShown: false}}
        />
        <Stack.Screen name="WebView" component={ShortsWebView} />
      </Stack.Navigator>
    </NavigationContainer>
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => App);
