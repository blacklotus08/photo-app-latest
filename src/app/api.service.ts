import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Photo} from './photo';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {

  apiURL:string = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=&format=json&nojsoncallback=1&auth_token=72157691311501703-4e2ea8aa1c70c3b0&api_sig=c2fca0ae3dbb29984e9253f43af60e14';

  constructor(private httpClient: HttpClient) { }

  public getPhotos(url?: string) { }

  public getPhotoById(id: string){}

}