import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHashtagGroup } from '../interfaces/hashtagGroup';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  baseUrl: string = 'http://localhost:5000/searchTweets'

  constructor(private http: HttpClient) { }

  public getTopTenHashtagTweets(query: string): Observable<IHashtagGroup[]> {
    return this.http.get<IHashtagGroup[]>(this.baseUrl + `?query=${query}`)
  }

}