import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as moment from 'moment';
import { Game } from '../../models/game.model';
import { CurrentGamePage } from '../current-game/current-game';

@Component({
  selector: 'new-game',
  templateUrl: 'new-game.html',
  styleUrls: ['/src/pages/new-game/new-game.css']
})
export class NewGamePage {
  public player1Name: string;
  public player2Name: string;  

  constructor(public navCtrl: NavController) { }

  startGame() {
    const newGame: Game = {
      player1Name: this.player1Name,
      player2Name: this.player2Name,
      startTime: moment()
    }
    this.navCtrl.push(CurrentGamePage, {game: newGame});
  }
}