import * as moment from "moment";

export class Game {
    player1Name: string;
    player1Score: number;
    player2Name: string;
    player2Score: number;
    startTime: moment.Moment;
    endTime: moment.Moment;
}