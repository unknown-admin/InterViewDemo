import React from 'react';
import {Provider} from 'react-redux';

// Nav screens
import Navigation from './src/navigation';
import {AppProvider} from './src/navigation/appContext';

// store
import {store} from './src/redux';

const App = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <Navigation />
      </AppProvider>
    </Provider>
  );
};

export default App;
