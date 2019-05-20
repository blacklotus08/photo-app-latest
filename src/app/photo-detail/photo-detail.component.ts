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
  httpURL : string = 'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=f843076116700f4726a1512067694366&format=json&nojsoncallback=1';

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
    this.http.get(this.httpURL + '&photo_id='  + id)
    .subscribe((response :Array<any>[]) => {
      
      this.response = response;
      console.log(response);
      
    });

    /*alert(id);*/

  }

}