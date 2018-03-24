import {IonicStorageModule} from '@ionic/storage';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';

// Pages
import { HistoryPage } from '../pages/history/history';
import { NewGamePage } from '../pages/new-game/new-game';

// Services
import { GameService } from '../services/game.service';
import { CurrentGamePage } from '../pages/current-game/current-game';

// Components
import { GameResultComponent } from '../components/game-result/game-result';

@NgModule({
  declarations: [
    MyApp,
    HistoryPage,
    NewGamePage,
    CurrentGamePage,
    GameResultComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HistoryPage,
    NewGamePage,
    CurrentGamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GameService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
