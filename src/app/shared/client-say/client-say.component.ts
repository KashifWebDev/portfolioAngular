import { Component, OnInit } from '@angular/core';
import {testimonial} from "../dataTypes";
import {OwlOptions} from "ngx-owl-carousel-o";
import {ProjectService} from "../../project.service";

@Component({
  selector: 'app-client-say',
  templateUrl: './client-say.component.html',
  styleUrls: ['./client-say.component.css']
})
export class ClientSayComponent implements OnInit {

  testimonials: testimonial[] = [];
  testimonialSliderOptions: OwlOptions = {};
  constructor(private service: ProjectService) { }

  ngOnInit(): void {
    this.testimonials = this.service.getTestimonials();
    this.testimonialSliderOptions = this.service.testimonialSliderOptions();
  }

}
