// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: 'AIzaSyD-d99wJdX3hp3YoFisBZFzUXotbdww2nI',
    authDomain: 'ngfirebasedb.firebaseapp.com',
    databaseURL: 'https://ngfirebasedb.firebaseio.com',
    projectId: 'ngfirebasedb',
    storageBucket: 'ngfirebasedb.appspot.com',
    messagingSenderId: '815629332394'
  }
};
