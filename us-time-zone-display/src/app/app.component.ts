import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	time: any;

	pacific(){
		this.time = new Date();
	}

	mountain(){
		this.time = new Date();
		this.time.setHours( this.time.getHours() + 1 );
	}

	central(){
		this.time = new Date();
		this.time.setHours( this.time.getHours() + 2 );
	}

	eastern(){
		this.time = new Date();
		this.time.setHours( this.time.getHours() + 3 );
	}

	clear(){
		this.time = null;
	}

}
