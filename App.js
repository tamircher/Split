/**
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from 'react';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './app/store';

import LoadingScreen from './app/screens/LoadingScreen/LoadingScreen';
import ActListScreen from './app/screens/ActListScreen/ActListScreen';
import GroupScreen from './app/screens/GroupScreen/GroupScreen';
import TransferScreen from './app/screens/TransferScreen/TransferScreen';

const TabNav = createMaterialTopTabNavigator(
  {
    Items: ActListScreen,
    Groups: GroupScreen,
    Transfers: TransferScreen,
  },
  {
    initialRouteName: 'Items',
    activeTintColor: 'white',
    inactiveTintColor: '#3e2465',
    tabBarPosition: 'bottom',
    lazy: true,
    animationEnabled: true,
    optimizationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      style: { backgroundColor: '#ed8450', maxHeight: 60 },
      indicatorStyle: { backgroundColor: '#2e3142' },
      showIcon: true,
      upperCaseLabel: false,
      iconStyle: { paddingBottom: 0 },
      labelStyle: { fontSize: 12 },
    }
  },
);

const TabNavigator = createAppContainer(TabNav);

export const App = () => (
  <Provider store={store}>
    <PersistGate loading={<LoadingScreen />} persistor={persistor}>
      <TabNavigator />
    </PersistGate>
  </Provider>
);

export default App;
/*
const AppScreen = TabNavigator(
  {
    Items: { screen: props => <ActListScreen {...props} /> },
    Groups: { screen: props => <GroupScreen {...props} /> },
    Transfers: { screen: props => <TransferScreen {...props} /> },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => (
      <Footer>
        <FooterTab style={{ backgroundColor: '#795548' }}>
          <Button
            vertical
            backgroundColor={props.navigationState.index === 1 ? '#a1887f' : '#795548'}
            active={props.navigationState.index === 0}
            onPress={() => props.navigation.navigate('Items')}
          >
            <Icon name="list" type="Entypo" />
            <Text>
              {'Items'}
            </Text>
          </Button>
          <Button
            vertical
            backgroundColor={props.navigationState.index === 1 ? '#a1887f' : '#795548'}
            active={props.navigationState.index === 1}
            onPress={() => props.navigation.navigate('Groups')}
          >
            <Icon name="group" type="FontAwesome" />
            <Text>
              {'Group'}
            </Text>
          </Button>
          <Button
            vertical
            backgroundColor={props.navigationState.index === 2 ? '#a1887f' : '#795548'}
            active={props.navigationState.index === 2}
            onPress={() => props.navigation.navigate('Transfers')}
          >
            <Icon name="headset" />
            <Text>
              {'Transfers'}
            </Text>
          </Button>
        </FooterTab>
      </Footer>
    ),
  },
);
*/
