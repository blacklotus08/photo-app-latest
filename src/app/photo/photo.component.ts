
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
    this.http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1c7b3ffed3009239dad4c3cfa738c808&text='+ this.photoTitle +'&format=json&nojsoncallback=1')
    .subscribe((response :Array<any>[]) => {
      
      this.response = response;
      console.log(response);
      
    });
  }

  displayPhotoDetail() {
     alert('inside');
  }  


}