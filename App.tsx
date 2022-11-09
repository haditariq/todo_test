import React, {useEffect} from 'react';
import {View} from 'react-native';
import {theme} from './src/assets/theme';

import {Navigation} from 'react-native-navigation';

const App = () => {
  useEffect(() => Navigation.setRoot(root), []);
  return <View />;
};

export default App;

const root = {
  root: {
    bottomTabs: {
      id: 'BOTTOM_TABS_LAYOUT',
      children: [
        {
          stack: {
            id: 'HOME_TAB',
            children: [
              {
                component: {
                  id: 'HOME_SCREEN',
                  name: 'HomeScreen',
                },
              },
            ],
            options: {
              bottomTab: {
                icon: require('./src/assets/icons/home.png'),
                selectedIcon: true,
                selectedTextColor: theme.activeTabColor,
                iconColor: theme.tabColor,
                selectedIconColor: theme.activeTabColor,
              },
            },
          },
        },
        {
          stack: {
            id: 'MORE_TAB',
            children: [
              {
                component: {
                  id: 'MORE_SCREEN',
                  name: 'MoreScreen',
                },
              },
            ],
            options: {
              bottomTab: {
                icon: require('./src/assets/icons/more.png'),
                selectedTextColor: theme.activeTabColor,
                iconColor: theme.tabColor,
                selectedIconColor: theme.activeTabColor,
              },
            },
          },
        },
      ],
    },
  },
};
