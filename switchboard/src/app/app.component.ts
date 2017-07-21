import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	switchboard: Array<any> = [];

	startSwitchboard(){
		for( let x = 0; x < 10; x++ ){
			var num = Math.floor( Math.random() * 2 ) 
			if( num ){ this.switchboard.push( true ) }
			else{ this.switchboard.push( false ) }
		}
	}

	switchIt( index ){
		this.switchboard[ index ] = !this.switchboard[ index ];
	}

	ngOnInit(){
		this.startSwitchboard();
	}

}
