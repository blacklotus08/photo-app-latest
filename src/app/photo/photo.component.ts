
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
    this.http.get('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=2cb5cd49a3d1f65cbd76483c239d3557&text='+ this.photoTitle +'&format=json&nojsoncallback=1&auth_token=72157691311501703-4e2ea8aa1c70c3b0&api_sig=f0c94eaa2ff20af7be9ba0316b6f4be1')
    .subscribe((response :Array<any>[]) => {
      
      this.response = response;
      alert(response);
      console.log(response);
    });

    /*alert(this.photoTitle);*/
    
  }




}