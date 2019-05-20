
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photoTitle : string = '';
  httpURL : string = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f843076116700f4726a1512067694366&format=json&nojsoncallback=1&';
  response : Array<any>[];
  
  
  constructor(private http: HttpClient) { }

  ngOnInit() {}

  searchPhoto() {
    this.http.get(this.httpURL + 'text=' + this.photoTitle)
    .subscribe((response :Array<any>[]) => {
      this.response = response;
      console.log(response);
    }
    );
    
  }


}