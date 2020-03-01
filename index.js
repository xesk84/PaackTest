import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import BackgroundJob from 'react-native-background-job';

AppRegistry.registerComponent(appName, () => App);


/*
const backgroundJob = {
 jobKey: "myJob",
 allowWhileIdle: true,
 allowExecutionInForeground: true, 
 job: () => console.log("Running in background")
};

BackgroundJob.register(backgroundJob);

var backgroundSchedule = {
    jobKey: "myJob",
    allowWhileIdle: true,
    allowExecutionInForeground: true
   }
   
   BackgroundJob.schedule(backgroundSchedule)
     .then(myTest)
     .catch(err => console.err(err));

function myTest() {
    setInterval(function(){
        console.log('Holis')
    }, 1000);
    console.log('tu puta madre');
}
*/



const backgroundJob = {
    jobKey: "myJob",
    job: () => { 
      locat(); 
     }
   };
  
  BackgroundJob.register(backgroundJob);
  
  var backgroundSchedule = {
   jobKey: "myJob",
   period: 2000,
   allowWhileIdle: true,
   exact: true,
   //requiresCharging: true,
   requiresDeviceIdle: true,
   override: false,
   timeout: 3000,
   allowExecutionInForeground: true,
  }
  
  BackgroundJob.schedule(backgroundSchedule);
 
  BackgroundJob.isAppIgnoringBatteryOptimization((error,ignoringOptimization) => { 
    console.log(error+' <<Android>>ignore>> '+ignoringOptimization) 
   });
 
 const locat = (data) => {
//    navigator.geolocation.getCurrentPosition((position) => {
//      console.log('Android>>: Location>>222--->>: '+JSON.stringify(position.coords));
//     });
console.log('holis');
 }