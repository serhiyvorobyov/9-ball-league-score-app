import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Game } from '../../models/game.model';
import { GameService } from '../../services/game.service';
import * as moment from 'moment';

@Component({
  selector: 'page-current-game',
  templateUrl: 'current-game.html',
  styleUrls: ['/src/pages/current-game/current-game.css'],
})
export class CurrentGamePage {
  public game: Game;

  constructor(public navCtrl: NavController, public navParams: NavParams, private gameService: GameService) {
    this.game = this.navParams.get('game');
  }

  public async saveGame() {
    this.game.endTime = moment();
    this.game.player1Score = 0;
    this.game.player2Score = 0;
    await this.gameService.saveGame(this.game);
    this.navCtrl.popToRoot();
  }
}
