import { getRandomNumber } from './helper_funcs.js';
import { Player } from './Player.js'

export class ScoringEvent {

	ob: boolean;
	result: string;
	inning: number;
	pitcher: Player;
	batter: Player;

	constructor (inning: number, batter: Player, pitcher: Player) {
	
		const obResult = getRandomNumber(0,100); 
		this.inning = inning;
		this.pitcher = pitcher;
		this.batter = batter;
		
		if (obResult > 60) {
		// on base
			this.ob = true;

			const obResult = getRandomNumber(0,100);

				if (obResult > 95) {
					this.result = "TRIPLE";
				} else if (obResult > 75) {
					this.result = "HOMERUN";
				} else if (obResult > 50) {
					this.result = "DOUBLE";
				} else {
					this.result = "SINGLE";
				}

		} else {
		// out
			this.ob = false;
			const outResult = getRandomNumber(0,100);
		
				if (outResult > 80) {
					this.result = "STRIKEOUT";
				} else if (outResult > 40) {
					this.result = "GROUNDOUT"; 
				} else if (outResult > 10) { 
					this.result = "FLYOUT";
				} else {
					this.result = "POP OUT";
				}
		}

	}

}
