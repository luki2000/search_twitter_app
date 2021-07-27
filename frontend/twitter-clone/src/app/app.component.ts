import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IHashtagGroup } from './interfaces/hashtagGroup';
import { SpinnerService } from './services/spinner.service';
import { TwitterService } from './services/twitter.service';
import  { asIsOrder } from './util/mapKeyValue.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  asIsOrder = asIsOrder;
  hashtagGroups: IHashtagGroup[] | null = null;
  searchForm = this.formBuilder.group({
    query: ['']
  });

  constructor(
      private twitterService: TwitterService, 
      public spinnerService: SpinnerService, 
      private formBuilder: FormBuilder) {

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
