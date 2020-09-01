import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.css' ]
})
export class UserComponent implements OnInit {
	persons: any;

	constructor(private _http: HttpClient) {}

	ngOnInit() {
		this.getPersons();
	}

	getPersons() {
		this._http.get('https://localhost:44367/api/people').subscribe(
			(response) => {
				this.persons = response;
			},
			(error) => {
				console.log(error);
			}
		);
	}
}
