import {Component, OnInit} from '@angular/core';
import {client, project, testimonial} from "../../shared/dataTypes";
import {OwlOptions} from "ngx-owl-carousel-o";
import {ProjectService} from "../../project.service";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


}
