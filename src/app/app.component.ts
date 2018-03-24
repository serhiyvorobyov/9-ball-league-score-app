import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

<<<<<<< HEAD
import { HistoryPage } from '../pages/history/history';
=======
import { NewGamePage } from '../pages/new-game/new-game';
>>>>>>> ad4d5ec3eea2176dc834d2e303d3be9c17768d35
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:any = HistoryPage;
=======
  rootPage:any = NewGamePage;
>>>>>>> ad4d5ec3eea2176dc834d2e303d3be9c17768d35

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

