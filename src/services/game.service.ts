import { Injectable } from "@angular/core";
import { Game } from "../models/game.model";
import { Storage } from '@ionic/storage';
import { Subject } from "rxjs/Subject";

@Injectable()
export class GameService {
  private _games: Subject<Array<Game>>;
  constructor(private storage: Storage) { }

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
    const games: Game[] = JSON.parse(gamesString);
    games.push(game);
    this.storage.set('games', games);
  }
}