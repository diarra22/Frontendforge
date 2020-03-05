import { Component, OnInit } from '@angular/core';
import { GameService } from '../service/game.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {


  ngOnInit(): void { }

  lock = false;

	constructor(public gs: GameService, public snackBar: MatSnackBar) {
		
	}

	newGame() { 
		this.gs.freeBlocksRemaining = 9;
		this.gs.initBlocks();
		this.lock = false;
		this.gs.turn = 0;
	}

	resetGame(event) {
		location.reload();
		event.preventDefault();
  }
  
  trackByFn(index, item) { 
    return item.id; 
  }

	playerClick(i) {
		if( this.gs.blocks[i].free == false || this.lock == true ) { // If Block is already fill, don't Do anything
			return;
		}

		this.gs.freeBlocksRemaining -= 1; // Reduce no. of free blocks after each selection

		if( this.gs.freeBlocksRemaining <= 0 ) {

			this.gs.draw += 1;
			this.lock = true;
			this.snackBar.open("Gagnant:", "Null", {
		      duration: 4000,
		    });
			this.newGame();
			return;
		}


		this.gs.blocks[i].free = false;

		if( this.gs.turn == 0 ) { // Player1 Turn
			this.gs.blocks[i].setValue("tick");
		
		} else { // Bot Turn
			this.gs.blocks[i].setValue("cross");	
		}

		var complete = this.gs.blockSetComplete();

		if( complete == false ) {
			this.changeTurn();	
			return;
			
		} else {
			this.lock = true;
			this.gs.players[this.gs.turn].score += 1;
			this.snackBar.open("Gagnant:", "Joueur "+ (this.gs.turn +1), {
		      duration: 4000,
		    });

		    this.newGame();
		    return;
		}
		
	}

	botTurn() {

		if( this.gs.freeBlocksRemaining <= 0 ) {
			return;
		}

		var bot_selected = this.gs.figureBotMove()-1;
		
		if( this.gs.blocks[bot_selected].free == true ) {
			this.playerClick(bot_selected);	
		} else {
			this.botTurn();
			return;
		}

	}

	changeTurn() {
		var player = this.gs.changeTurn();

		if( player == 1 ) { // Bot Turn
			this.botTurn();
		
		}
	}

}
