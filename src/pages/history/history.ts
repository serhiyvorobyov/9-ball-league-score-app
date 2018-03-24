import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';

import { Game } from "../../models/game.model";
import { NewGamePage } from '../new-game/new-game';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  
  games: Array<Game>;

  constructor(public navCtrl: NavController, private gameService: GameService) {
    this.gameService.$games.subscribe(games => {
      this.games = games;
    })
  }

  public toCreateGameView() {
    this.navCtrl.push(NewGamePage);
  }
}
