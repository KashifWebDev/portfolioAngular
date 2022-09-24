import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../project.service";
import {client} from "../dataTypes";

@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.css']
})
export class IntroduceComponent implements OnInit {

  clients: client[] = [];

  constructor(private service: ProjectService) { }

  ngOnInit(): void {
    this.clients = this.service.getClients();
  }

}
