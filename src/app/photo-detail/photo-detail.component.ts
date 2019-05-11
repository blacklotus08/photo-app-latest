import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  response : Array<any>[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getPhoto();
  }

   goBack(): void {
    this.location.back();
  }

  getPhoto(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.http.get('https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=1c7b3ffed3009239dad4c3cfa738c808&photo_id=' + id + '&format=json&nojsoncallback=1')
    .subscribe((response :Array<any>[]) => {
      
      this.response = response;
      console.log(response);
      
    });

    /*alert(id);*/

  }

}