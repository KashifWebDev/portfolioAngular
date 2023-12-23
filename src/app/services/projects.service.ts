import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projects = [
    {
      "id": 1,
      "Category": ["Web Desing", "Admin Panel", "CRM"],
      "Client": "Zenit Co.",
      "Project Date": "08 Dec, 2019",
      "Project URL": "http://bugardsas.com/smartmonitor/",
      "Heading": "Energy Distribution Dashboard",
      "Description": "Gives control to the admin to monitor and control the power flow of energy into different areas. Admin can view the past statistics of hardware current, voltages, Power etc. A pdf downloadable file can be generated to share results with other engineers to plan the next moves accordingly.",
      "pics": [
        "smart-energy-distribution/1.jpg",
        "smart-energy-distribution/smart-energy-distribution.jpg",
        "smart-energy-distribution/graphs.jpg",
        "smart-energy-distribution/login.jpg",
      ]
    },
    {
      "id": 2,
      "Category": ["Web Desing", "Admin Panel", "CRM", "Admin Dashboards"],
      "Client": "Access1Technologies",
      "Project Date": "23 Mar, 2020",
      "Project URL": "http://access1technologies.com/smartgate",
      "Heading": "Smart Access Control System",
      "Description": "Smart Access Control System offer complete solution for building management. It offer verity of options such as smart access control from any part of the world. Notification and data recording of all incoming and outgoing human traffic in the buildings and offices. It create smart schedules and allow users to get access to resources during defined timings only. It handles guest users efficiently.",
      "pics": [
        "smartgate/1.jpg",
        "smartgate/3.jpg",
        "smartgate/4.jpg",
        "smartgate/5.jpg",
        "smartgate/6.jpg",
      ]
    },
    {
      "id": 3,
      "Category": ["Angular", "Frontend", "Admin Panel", "CRM", "Charts"],
      "Client": "DBS Manufacturing",
      "Project Date": "02 Jun, 2020",
      "Project URL": "http://embeddediiot.com/dbs",
      "Heading": "IoT Devices Management Dashboard",
      "Description": "This dashboard was designed for a industrial company to monitor and control their machines and hardwares. Admin can add new devices and assign them to corresponding engineers. The users then can monitor different activities of their device. The dashboard is fully customizable, user can select the blocks from UI settings which he wants to be monitor at the time. User can download the one time report of the selected time span to observe the behavior of device at any instance.",
      "pics": [
        "dbs/1.jpg",
        "dbs/2.jpg",
        "dbs/3.jpg",
        "dbs/4.jpg",
        "dbs/5.jpg",
      ]
    },
    {
      "id": 4,
      "Category": ["Web", "Dashboard", "Admin Panel", "CRM", "Charts"],
      "Client": "DBS Manufacturing",
      "Project Date": "02 Jun, 2020",
      "Project URL": "Private Server",
      "Heading": "Remote Control of devices on Web",
      "Description": "Gives control to the admin to monitor and control the power flow of energy into different areas. Admin can view the past statistics of hardware current, voltages, Power etc. A pdf downloadable file can be generated to share results with other engineers to plan the next moves accordingly. Admin can also monitor the live locations of devices using Google Maps APIs.",
      "pics": [
        "powerdiverter/1.jpg",
        "powerdiverter/2.jpg",
        "powerdiverter/3.jpg",
        "powerdiverter/4.jpg",
      ]
    },
    {
      "id": 5,
      "Category": ["Core PHP", "APIs", "Admin Panel", "Charts"],
      "Client": "Smart Tech Inc.",
      "Project Date": "19 Feb, 2020",
      "Project URL": "Private Server",
      "Heading": "Monitor and control a Garden from Web App",
      "Description": "This app was designed for a client who was also a gardner, to help him monitoring his plants. The smart garden is totally controllable from a local server. The gardner can start/stop the water sprinkler and also can set the schedules for them to start/stop at the particular time everyday. The gardner can monitor the health of plants form the server remotely.",
      "pics": [
        "smartgarden/1.jpg",
        "smartgarden/2.jpg",
        "smartgarden/3.jpg",
      ]
    },
    {
      "id": 6,
      "Category": ["Core PHP", "APIs", "Python", "Dashboard", "Attendance"],
      "Client": "DBS Manufacturing",
      "Project Date": "02 Jun, 2020",
      "Project URL": "Private Server",
      "Heading": "Biometric Attendance Management System",
      "Description": "This application was designed for a CEO who can see the In and Out time of his clients and can Add/Delete users Remotely. The user, while get to work, can mark his attendance on the assigned IoT machine. Same while leaving the office he will mark himself OUT by using that machine and his fingerprint. The same IN and OUT record will be uploaded to the server to be monitor IN and OUT activities of clients.",
      "pics": [
        "attendence/1.jpg",
        "attendence/2.jpg",
        "attendence/3.jpg",
      ]
    }
  ]

  constructor() { }

  findProject(id: number){
    return this.projects.filter((project: any) => {project.id == id});
  }
}
