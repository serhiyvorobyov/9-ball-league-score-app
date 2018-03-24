import { Injectable } from "@angular/core";
import { Game } from "../models/game.model";
import { Storage } from '@ionic/storage';

@Injectable()
export class GameService {
  constructor(private storage: Storage) { }

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