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
    query: ['', Validators.required]
  });

  constructor(
      private twitterService: TwitterService,
      private formBuilder: FormBuilder) {

  }

  onSubmit():void {
    if(!this.searchForm.valid) return;
      this.twitterService.getTopTenHashtagTweets(this.searchForm.value.query)
        .subscribe(hashtagGroups => {
          this.hashtagGroups = hashtagGroups;
        })
  }
}
