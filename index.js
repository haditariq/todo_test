import App from './App';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import {persistor, store} from './src/redux/store';
import Home from './src/views/Home';
import More from './src/views/More';

Navigation.registerComponent(
  'App',
  () => props =>
    (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App {...props} />
        </PersistGate>
      </Provider>
    ),

  () => App,
);

Navigation.registerComponent(
  'HomeScreen',
  () => props =>
    (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Home {...props} />
        </PersistGate>
      </Provider>
    ),

  () => Home,
);

Navigation.registerComponent(
  'MoreScreen',
  () => props =>
    (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <More {...props} />
        </PersistGate>
      </Provider>
    ),

  () => More,
);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'App',
            },
          },
        ],
      },
    },
  });
});

Navigation.mergeOptions('BOTTOM_TABS_LAYOUT', {
  bottomTabs: {
    currentTabId: 'MORE_TAB',
  },
});

Navigation.setDefaultOptions({
  bottomTab: {
    fontSize: 6,
    selectedFontSize: 5,
  },
});
