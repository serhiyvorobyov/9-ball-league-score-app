import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';

import { Game } from "../../models/game.model";
import { NewGamePage } from '../new-game/new-game';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  
  games: Array<Game> = [
    {
      player1Name: "Shishko",
      player2Name: "Ozaki-san",
      player1Score: 10,
      player2Score: 82,
      startTime: moment()
    }
  ];

  constructor(public navCtrl: NavController) {}

  public toCreateGameView() {
    this.navCtrl.push(NewGamePage);
  }
}
