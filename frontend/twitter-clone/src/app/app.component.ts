import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SpinnerService } from './services/spinner.service';
import { TwitterService } from './services/twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'twitter-clone';
  tweets: any;
  searchForm = this.formBuilder.group({
    query: ['', Validators.required]
  });

  constructor(
      private twitterService: TwitterService, 
      public spinnerService: SpinnerService, 
      private formBuilder: FormBuilder) {

  }

  ngOnInit() {
  }

  onSubmit():void {
      if(!this.searchForm.value.query) return
      this.spinnerService.requestStarted()
      this.twitterService.getTopTenHashtagTweets(this.searchForm.value.query)
        .subscribe(tweets => {
          this.tweets = tweets;
          this.spinnerService.requestEnded();
        })
  }
}
