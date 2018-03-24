import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Game } from "../../models/game.model";

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  
  games: Array<Game>;

  constructor(public navCtrl: NavController) {

  }

}
