import { Component, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Tweet } from 'src/app/models/tweet';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() public title: string = ''
  // keyValue pipe does unexpected value comparison of tweet[] to number
  // we use 'any' to protect against this typescript bug https://github.com/angular/angular/issues/35743
  @Input() public tweets: Tweet[] | any = [];

  get Title() {
    return `#${this.title}`;
  }
}


