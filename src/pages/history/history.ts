import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Game } from "../../models/game.model";
import { NewGamePage } from '../new-game/new-game';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  
  games: Array<Game>;

  constructor(public navCtrl: NavController) {

  }

  public newGame() {
    this.navCtrl.push(NewGamePage);
  }

}
