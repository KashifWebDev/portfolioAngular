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

  clients: client[] = [];
  testimonials: testimonial[] = [];
  projects: project[] = [];
  projectTypes: string[] = [];
  testimonialSliderOptions: OwlOptions = {};
  colors: string[] = ["primary", "secondary", "success", "danger", "dark"];

  constructor(private service: ProjectService) { }

  ngOnInit(): void {
    this.clients = this.service.getClients();
    this.testimonials = this.service.getTestimonials();
    this.projects = this.service.getProjects();
    this.testimonialSliderOptions = this.service.testimonialSliderOptions();
    this.projectTypes = this.service.getProjectsTypes();
  }

  RandomTagColor(){
    return 'bg-' + this.colors[Math.floor(Math.random() * this.colors.length)];
    }

}
