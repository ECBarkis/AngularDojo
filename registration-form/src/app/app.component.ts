import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	submitted: boolean = false;

	name: string = '';
	email: string = '';
	address: string = '';
	city: string = '';
	state: string = '';

	user = {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		address: '',
		city: '',
		state: ''
	}

	formSubmit(){
		this.name = this.user.firstName;
		this.email = this.user.email;
		this.address = this.user.address;
		this.city = this.user.city;
		this.state = this.user.state;
		this.submitted = true;
	}

}
