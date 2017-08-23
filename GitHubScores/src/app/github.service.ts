import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class GITHubService {

  constructor( private _http: Http ) {
  }
  
	getUser( user: string ){
		return this._http.get( `https://api.github.com/users/${user}` )
		.map( data => data.json() )
		.toPromise();
	}

}
