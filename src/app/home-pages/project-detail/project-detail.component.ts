import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProjectService } from "../../project.service";
import { project } from "../../shared/dataTypes";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  projectID: number = 0;
  project: project | any;

  @ViewChild('indicatorsList') indicatorsList: ElementRef | any;

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private titleService: Title,
              private metaTagService: Meta) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectID = params['id'];
      this.project = this.projectService.findProject(this.projectID);
      window.scrollTo(0, 0);
    });


    this.titleService.setTitle(this.project.heading + "- Kashif Ali Rabbani | Full Stack Developer");
    this.metaTagService.addTags([
      { name: 'keywords', content: 'Full Stack Developer, Core PHP, Laravel, JavaScript, Angular, Web Application Development, Backend Development, Frontend Development, Web Development Solutions, International Clients, Industry Solutions, Custom Web Development, PHP Development, Laravel Development, JavaScript Development, Angular Development, Web Development Expert, Client Satisfaction, Professional Experience, Innovative Solutions' },
      { name: 'robots', content: 'index, follow' },
      { name: 'writer', content: 'Kashif Ali Rabbani' },
      { charset: 'UTF-8' }
    ]);
  }

  ngAfterViewInit(): void {
    if (this.indicatorsList) {
      for (let i = 0; i < this.project.pics.length; i++) {
        let indicatorItem = document.createElement('li');
        indicatorItem.setAttribute('data-target', '#carouselExampleIndicators');
        indicatorItem.setAttribute('data-slide-to', i.toString());
        this.indicatorsList.nativeElement.appendChild(indicatorItem);
      }
    }
  }

  getBadge(): string{
    return this.projectService.getRandomBadge(1);
  }
}
