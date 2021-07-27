import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IHashtagGroup } from './interfaces/hashtagGroup';
import { SpinnerService } from './services/spinner.service';
import { TwitterService } from './services/twitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter-clone';
  hashtagGroups: IHashtagGroup[] | null = null;
  searchForm = this.formBuilder.group({
    query: ['', Validators.required]
  });

  constructor(
      private twitterService: TwitterService, 
      public spinnerService: SpinnerService, 
      private formBuilder: FormBuilder) {

  }

  // method to preserve order of keyValue in pipe
  asIsOrder(a: any, b: any): number {
    return 1;
  }

  onSubmit():void {
    if(!this.searchForm.value.query) return
      this.spinnerService.requestStarted()
      this.twitterService.getTopTenHashtagTweets(this.searchForm.value.query)
        .subscribe(hashtagGroups => {
          this.hashtagGroups = hashtagGroups;
          this.spinnerService.requestEnded();
        })
  }
}
