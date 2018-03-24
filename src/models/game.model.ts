import * as moment from "moment";

export class Game {
    player1Name: string;
    player2Name: string;
    startTime: moment.Moment;
    player1Score?: number;
    player2Score?: number;
    endTime?: moment.Moment;
}