import React from 'react';
import {RootNavigation} from './src/RootNavigator';
import {SelectedDeliveryProvider} from './src/providers/SelectedDeliveryProvider';
import {DriverProvider} from './src/providers/DriverProvider';

const App = () => {
  return (
    <SelectedDeliveryProvider>
      <DriverProvider>
        <RootNavigation />
      </DriverProvider>
    </SelectedDeliveryProvider>
  );
};

export default App;
