import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  colors = [];

  fillColors() {
  	for( let x = 0; x < 8; x++ ){
  		const num = ( Math.floor( Math.random() * 7 ) );
  		if( num === 0 ){ this.colors.push( 'red' ) }
  		else if( num === 1 ){ this.colors.push( 'orange' ) }
  		else if( num === 2 ){ this.colors.push( 'yellow' ) }
  		else if( num === 3 ){ this.colors.push( 'green' ) }
  		else if( num === 4 ){ this.colors.push( 'blue' ) }
  		else if( num === 5 ){ this.colors.push( 'indigo' ) }
  		else if( num === 6 ){ this.colors.push( 'violet' ) }
  	}
  }

  ngOnInit(){
  	this.fillColors();
  }
}
