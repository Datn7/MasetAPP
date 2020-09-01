import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: [ './user.component.css' ]
})
export class UserComponent implements OnInit {
	persons: any;

	galleryOptions: NgxGalleryOptions[];
	galleryImages: NgxGalleryImage[];

	baseUrl: 'https://localhost:44367/';

	constructor(private _http: HttpClient) {}

	ngOnInit() {
		this.getPersons();

		this.galleryOptions = [
			{
				width: '600px',
				height: '400px',
				thumbnailsColumns: 4,
				imageAnimation: NgxGalleryAnimation.Slide,
				preview: false
			}
		];

		this.galleryImages = [
			{
				small: 'images/8R2A2162.jpg',
				medium: 'images/8R2A2162.jpg',
				big: 'images/8R2A2162.jpg'
			},
			{
				small: 'images/8R2A2176.jpg',
				medium: 'images/8R2A2176.jpg',
				big: 'images/8R2A2176.jpg'
			},
			{
				small: 'images/8R2A2196.jpg',
				medium: 'images/8R2A2196.jpg',
				big: 'images/8R2A2196.jpg'
			}
		];
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
