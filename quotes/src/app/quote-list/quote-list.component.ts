import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
	
	@Input() quotes;
	@Output() voteUp = new EventEmitter();
	@Output() voteDown = new EventEmitter();
	@Output() destroy = new EventEmitter();

	voteUpper( index ){ this.voteUp.emit( index ) }

	voteDowner( index ){ this.voteDown.emit( index ) }

	delete( index ){ this.destroy.emit( index ) }

  constructor() { }

  ngOnInit() {
  }

}
