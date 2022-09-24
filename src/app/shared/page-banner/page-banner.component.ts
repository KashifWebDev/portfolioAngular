import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-page-banner',
  templateUrl: './page-banner.component.html',
  styleUrls: ['./page-banner.component.css']
})
export class PageBannerComponent implements OnInit {

  @Input() pageTitle: string = '';
  @Input() pageLink: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
