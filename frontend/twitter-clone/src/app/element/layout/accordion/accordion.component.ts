import { Component, Input, OnInit } from '@angular/core';
import { ITweet } from 'src/app/interfaces/tweet';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() public hashtagGroup: any;
  public title: string = ''
  public tweets: ITweet[] = [];

  ngOnInit(): void {
    this.title = this.hashtagGroup.key;
    this.tweets = this.hashtagGroup.value;
  }

}
