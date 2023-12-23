import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProjectService } from "../../project.service";
import { project } from "../../shared/dataTypes";

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
              private projectService: ProjectService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectID = params['id'];
      this.project = this.projectService.findProject(this.projectID);
      window.scrollTo(0, 0);
    });
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
