import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BackgroundJob from 'react-native-background-job';

AppRegistry.registerComponent(appName, () => App);

// const backgroundJob = {
//     jobKey: "myJob",
//     job: () => { 
//       saveGPSData(); 
//      }
//    };
  
//   BackgroundJob.register(backgroundJob);
  
//   var backgroundSchedule = {
//    jobKey: "myJob",
//    period: 2000,
//    allowWhileIdle: true,
//    exact: true,
//    //requiresCharging: true,
//    //requiresDeviceIdle: true,
//    //override: false,
//    //timeout: 3000,
//    allowExecutionInForeground: true,
//   }
  
//   BackgroundJob.schedule(backgroundSchedule);
 
//   BackgroundJob.isAppIgnoringBatteryOptimization((error,ignoringOptimization) => { 
//     console.log(error+' <<Android>>ignore>> '+ignoringOptimization) 
//    });
 
//  const saveGPSData = (data) => {
//   console.log('holis');
//  }