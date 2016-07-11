import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { SecondScreenAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(SecondScreenAppComponent, [
  FIREBASE_PROVIDERS,
  // Initialize Firebase app
  defaultFirebase({
    apiKey: "AIzaSyB01w13aFIhpyKOOpVHEnqivjeUoz09TCY",
    authDomain: "ample-sandbox.firebaseapp.com",
    databaseURL: "https://ample-sandbox.firebaseio.com",
    storageBucket: ""
  })
]);
