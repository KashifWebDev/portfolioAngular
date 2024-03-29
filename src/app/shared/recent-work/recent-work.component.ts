import { Component, OnInit } from '@angular/core';
import {project} from "../dataTypes";
import {ProjectService} from "../../project.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-recent-work',
  templateUrl: './recent-work.component.html',
  styleUrls: ['./recent-work.component.css']
})
export class RecentWorkComponent implements OnInit {

  colors: string[] = ["primary", "secondary", "success", "danger", "dark"];
  projects: project[] = [];
  projectTypes: string[] = [];
  constructor(private service: ProjectService, private router: Router) { }

  tagColors: string[][] = [];

  ngOnInit(): void {
    this.projects = this.service.getProjects();
    this.projectTypes = this.service.getProjectsTypes();

    // Generate random colors for each project tag
    this.projects.forEach(project => {
      const colors: string[] = project.tags.map(tag => this.service.getRandomBadge(1));
      this.tagColors.push(colors);
    });
  }

  RandomTagColor(): string{
    return this.service.getRandomBadge(1);
  }

  generateProjectURL(project: project){
    this.router.navigate(['/', 'project', project.heading.toLowerCase().replace(/\s+/g, '-'),  project.id]);
  }
}
