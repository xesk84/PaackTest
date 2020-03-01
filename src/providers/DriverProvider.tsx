import React, { createContext, SetStateAction, useContext, useState, FunctionComponent } from 'react';

const driverId: number = 555;

const DriverContext = createContext(driverId);

export const useDriverContext = () : [number, SetStateAction<number>] => {
    return useContext(DriverContext);
}

type DriverProviderProps = {
    children: any
  };

  const DriverProvider: FunctionComponent<DriverProviderProps> = (props) =>{
    const [state, setState] = useState(driverId);
      return (
          <DriverContext.Provider value={[state, setState]} >
              {props.children}
          </DriverContext.Provider>
      )
  }
  
  export {DriverContext, DriverProvider}