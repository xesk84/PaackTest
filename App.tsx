import React from 'react';
import { RootNavigation } from './src/RootNavigator';
import { SelectedDeliveryProvider } from './src/providers/SelectedDelivery';


const App = () => {
  return (
    <SelectedDeliveryProvider>
      <RootNavigation />
    </SelectedDeliveryProvider>
  );
};

export default App;
