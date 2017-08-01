import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	addQuote( eventData ){ this.allQuotes.push( eventData ) }

	voteUp( eventData ){ this.allQuotes[ eventData ].votes += 1 }

	voteDown( eventData ){ this.allQuotes[ eventData ].votes -= 1 }

	destroy( eventData ){
		for( var i = eventData; i < this.allQuotes.length-1; i++ ){
			this.allQuotes[ i ] = this.allQuotes[ i + 1 ];
		}
		this.allQuotes.pop();
	}
  
	allQuotes: Array<any> = [
		{
			quote: 'From my dead hand',
			author: 'Charlton Heston',
			votes: 7
		},
		{
			quote: "The mind is a terrible thing to waste, I give love it's a terrible thing to hate.",
			author: 'Guru from Gang Starr',
			votes: 49
		}
	]

}
