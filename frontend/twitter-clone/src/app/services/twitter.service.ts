import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {finalize, catchError} from 'rxjs/operators'
import { IHashtagGroup } from '../interfaces/hashtagGroup';
import { SpinnerService } from '../services/spinner.service';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  baseUrl: string = 'http://localhost:5000/searchTweets'

  constructor(private http: HttpClient, private spinnerService: SpinnerService) { }

  public getTopTenHashtagTweets(query: string): Observable<IHashtagGroup[]> {
    // ideally spinner should be in an interceptor to be used only once for all http requests
    this.spinnerService.requestStarted();
    return this.http.get<IHashtagGroup[]>(this.baseUrl + `?query=${query}`)
      .pipe(
        finalize(() => this.spinnerService.requestEnded()),
        catchError((e) => {
          this.spinnerService.requestEnded();
          return throwError(e)
        })
      )
  }

}