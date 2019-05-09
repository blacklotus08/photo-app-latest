
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  photoTitle : string = '';
  response : Array<any>[];
  
  constructor(private http: HttpClient) { }

  ngOnInit() {}

  searchPhoto() {
    this.http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=efbc060fba6ee0b2079db9b653b1b324&text='+ this.photoTitle +'&format=json&nojsoncallback=1')
    .subscribe((response :Array<any>[]) => {
      
      this.response = response;
      
    });
  }

  displayPhotoDetail() {
     alert('inside');
  }  


}