import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  baseUrl: string = 'http://localhost:5000/searchTweets'

  constructor(private http: HttpClient) { }

  public getTopTenHashtagTweets(query: string) {
    return this.http.get(this.baseUrl + `?query=${query}`)
  }

}