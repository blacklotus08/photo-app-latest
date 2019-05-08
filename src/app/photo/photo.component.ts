
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photo} from '../photo';
import { toArray } from 'rxjs/operators';


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
    this.http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=4f4a68e7d4e7e0bf7c00594ecc0964a6&text='+ this.photoTitle +'&format=json&nojsoncallback=1')
    .subscribe((response :Array<any>[]) => {
      
      this.response = response;
      alert(response);
      console.log(response);
    });

    /*alert(this.photoTitle);*/
    
  }




}