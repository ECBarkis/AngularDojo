import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	power: number = 0;

	powerLevel: number = 0;

	newPowerLevel(){
		this.power = this.powerLevel;
	}

}
