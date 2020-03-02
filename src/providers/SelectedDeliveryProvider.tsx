import React, { createContext, SetStateAction, useContext, useState, FunctionComponent } from 'react';

const selectedDelivery: number = 0;

const SelectedDeliveryContext = createContext(selectedDelivery);

export const useSelectedDeliveryContext = () : [number, SetStateAction<number>] => {
    return useContext(SelectedDeliveryContext);
}

type SelectedDeliveryProviderProps = {
    children: any
  };

  const SelectedDeliveryProvider: FunctionComponent<SelectedDeliveryProviderProps> = (props) =>{
    const [state, setState] = useState(selectedDelivery);
      return (
          <SelectedDeliveryContext.Provider value={[state, setState]} >
              {props.children}
          </SelectedDeliveryContext.Provider>
      )
  }
  
  export {SelectedDeliveryContext, SelectedDeliveryProvider}


