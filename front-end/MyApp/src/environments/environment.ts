// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  endpoint:'http://localhost:3000/',
  firebase:{
    apiKey: "AIzaSyA1Feou-OGn8eJ_dp6mjNNPAwvn1f6dWio",
    authDomain: "u-space-drive.firebaseapp.com",
    databaseURL: "https://u-space-drive.firebaseio.com",
    projectId: "u-space-drive",
    storageBucket: "u-space-drive.appspot.com",
    messagingSenderId: "264432521145",
    appId: "1:264432521145:web:4eb96cac91323f405ab068"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
