import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-quote',
  templateUrl: './new-quote.component.html',
  styleUrls: ['./new-quote.component.css']
})
export class NewQuoteComponent implements OnInit {

	@Output() getQuote = new EventEmitter();

	newQuote: any = {
		quote: "",
		author: "",
		votes: 0
	}

	addQuote(){
		this.getQuote.emit( this.newQuote );
		this.newQuote = {
			quote: "",
			author: ""
		}
	}

  constructor() { }

  ngOnInit() {
  }

}
