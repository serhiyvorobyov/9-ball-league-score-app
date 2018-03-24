import { Injectable } from "@angular/core";
import { Game } from "../models/game.model";
import { Storage } from '@ionic/storage';
import { Subject } from "rxjs/Subject";
import * as moment from "moment";

@Injectable()
export class GameService {
  private _games: Subject<Array<Game>>;
  constructor(private storage: Storage) {
    this._games = new Subject();
  }

  get $games() {
    return this._games;
  }

  public async getGameHistory(): Promise<Array<Game>> {
    const gamesString:string = await this.storage.get('games');
    const games: Game[] = JSON.parse(gamesString);
    return games;
  }

  public async saveGame(game: Game) {
    const gamesString:string = await this.storage.get('games');
    let games: Game[] = JSON.parse(gamesString);
    if (!games) {
      games = [];
    }
    games.forEach(game => {
      game.startTime = moment(game.startTime);
      if(game.endTime) {
        game.endTime = moment(game.endTime);
      }
    });
    games.push(game);
    this.storage.set('games', JSON.stringify(games));
    this._games.next(games);
  }
}