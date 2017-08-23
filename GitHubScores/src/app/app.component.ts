import { Component } from '@angular/core';
import { GITHubService } from './github.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	username: string = null;

	score: number = null;

	promise;

	user;

	constructor( private _githubservice: GITHubService ){
	}

	getScore(){
		this.promise = this._githubservice.getUser( this.username );
		if( this.promise ){
			this.promise
				.then( ( user ) => { 
					this.score = user.followers + user.public_repos;
					this.username = null;
				})
				.catch( err => {
					console.log( err );
					this.username = null;
					this.score = null;
				})
		}
		else{
			this.username = null;
			this.score = null;
		}
	}
}
