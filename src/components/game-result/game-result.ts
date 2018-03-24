import { Component, Input } from '@angular/core';
import { Game } from '../../models/game.model';

@Component({
  selector: 'app-game-result',
  templateUrl: 'game-result.html',
  styleUrls: ['/src/components/game-result/game-result.scss']
})
export class GameResultComponent {
  @Input() game: Game;

  constructor() {}

}
