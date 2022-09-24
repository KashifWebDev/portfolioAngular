import { Component, OnInit } from '@angular/core';
import {project} from "../dataTypes";
import {ProjectService} from "../../project.service";

@Component({
  selector: 'app-recent-work',
  templateUrl: './recent-work.component.html',
  styleUrls: ['./recent-work.component.css']
})
export class RecentWorkComponent implements OnInit {

  colors: string[] = ["primary", "secondary", "success", "danger", "dark"];
  projects: project[] = [];
  projectTypes: string[] = [];
  constructor(private service: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.service.getProjects();
    this.projectTypes = this.service.getProjectsTypes();
  }

  RandomTagColor(){
    return 'bg-danger'
  }
}
