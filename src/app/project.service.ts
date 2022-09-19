import {Injectable} from '@angular/core';
import {client, project, projectType, testimonial} from "./shared/dataTypes";
import {OwlOptions} from "ngx-owl-carousel-o";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getClients(): client[]{
    return [
      {logo: 'abc.jpg'},
      {logo: 'logo2.png'},
      {logo: '18Jorissen.png'},
      {logo: 'logo4.png'},
      {logo: 'suman.png'},
      {logo: 'turktronics.png'},
      {logo: 'logo5.png'},
      {logo: 'bkfx.png'},
      {logo: 'logo1.png'},
    ];
  }

  getTestimonials(): testimonial[]{
    return [
      {clientName: 'Suman Adhikary',
        clientPic: 'suman.jpg',
        feedback: 'Amazing guy he does take every aspect into consideration and gives your project the time and effort needed to finish what you seek'},
      {
        clientName: 'Ron',
        clientPic: 'ron.jpg',
        feedback: 'Kashif is a bright intelligent young man, who understands the job description, speaks, reads, and writes good English which is very helpful. Always communicated without disappearing for days. When asked, he added his own independent opinion to contribute to the project and bring some ideas to improve it. We accepted some of his ideas...they were good'
      },
      {
        clientName: 'Kim Witzl',
        clientPic: 'kim.jpg',
        feedback: 'Kashif\'s analytical and programming skills are exceptional. He is intuitive to see the client\'s vision an direct the process. We can highly recommend this young professional who is smart, talented and has a work ethic of note! He has single-handedly turned our business around for success.'
      },
      {
        clientName: 'Jianxiong Yu',
        clientPic: 'testimonials-3.png',
        feedback: 'Kashif is skillful and very proactive toward deliverables. Did not ask for an interface but he did it anyway to make the test very user-friendly. Love to work with him again in the future.'
      },
      {
        clientName: 'Sunny Claire',
        clientPic: 'testimonials-5.jpg',
        feedback: 'A great programmer who will get straight to work, communicate all the time and focus on your specification.'
      },
    ];
  }

  getProjects(): project[]{
    return [
      {
        heading: 'Remote Doctor-Patient Consultation Web App',
        tags: ['Bootstrap', 'Angular', 'MySQL', 'APIs', 'PHP'],
        coverPic: 'Aivizo/3.png',
        description: 'Aivizo is a platform where patients can do consultations with the doctors. They can arrange a live call meeting on the platform, where doctor can diagnose the paitient with multiple cameras, and some remote medical equipments.<br>After the meeting, doctor can leave notes (Rx) to the pateint for medications and instructions. And they can reschedule the meeting after some time period.<br>Application provides a calender view to list the upcoming/recent appointments, it also provides E-mail alerts to both patents and doctors if theres any upcoming relevent meeting coming.',
        pics: [
          'Aivizo/1.png',
          'Aivizo/2.png',
          'Aivizo/3.png',
          'Aivizo/4.png',
          'Aivizo/5.png',
          'Aivizo/6.png',
          'Aivizo/7.png',
          'Aivizo/8.png',
          'Aivizo/9.png'
        ],
        website: "Private Server",
        type: projectType.angular
      },
      {
        heading: 'Energy Distribution Dashboard',
        tags: ['HTML', 'CSS', 'PHP', 'Javascript', 'MySQL'],
        coverPic: 'smart-energy-distribution/1.jpg',
        description: 'Gives control to the admin to monitor and control the power flow of energy into different areas. Admin can view the past statistics of hardware current, voltages, Power etc. A pdf downloadable file can be generated to share results with other engineers to plan the next moves accordingly.',
        pics: ['smart-energy-distribution/1.jpg', 'smart-energy-distribution/admin-dashboard.jpg', 'smart-energy-distribution/graphs.jpg', 'smart-energy-distribution/login.jpg'],
        website: 'http://bugardsas.com/smartmonitor',
        type: projectType.php
      },
      {
        heading: 'Smart Access Control System',
        tags: ['HTML', 'CSS', 'Laravel', 'Jquery', 'CronJobs'],
        coverPic: 'smartgate/6.jpg',
        description: 'Smart Access Control System offer complete solution for building management. It offer verity of options such as smart access control from any part of the world. Notification and data recording of all incoming and outgoing human traffic in the buildings and offices. It create smart schedules and allow users to get access to resources during defined timings only. It handles guest users efficiently.',
        pics: [
          'smartgate/1.jpg',
          'smartgate/2.jpg',
          'smartgate/3.jpg',
          'smartgate/4.jpg',
          'smartgate/5.jpg',
          'smartgate/6.jpg'
        ],
        website: 'http://access1technologies.com/',
        type: projectType.laravel
      },
      {
        heading: 'IoT Devices Management Dashboard',
        tags: ['HTML', 'CSS', 'PHP', 'MySQL', 'Javascript'],
        coverPic: 'dbs/1.JPG',
        description: 'This dashboard was designed for a industrial company to monitor and control their machines and hardwares. Admin can add new devices and assign them to corresponding engineers. The users then can monitor different activities of their device. The dashboard is fully customizable, user can select the blocks from UI settings which he wants to be monitor at the time. User can download the one time report of the selected time span to observe the behavior of device at any instance.',
        pics: [
          'dbs/1.JPG',
          'dbs/2.JPG',
          'dbs/3.JPG',
          'dbs/4.JPG',
          'dbs/5.JPG'
        ],
        website: 'http://embeddediiot.com/dbs/',
        type: projectType.php
      },
      {
        heading: 'Remote Control of devices on Web',
        tags: ['HTML', 'CSS', 'Angular', 'MySQL', 'PHP'],
        coverPic: 'powerdiverter/1.jpg',
        description: 'Gives control to the admin to monitor and control the power flow of energy into different areas. Admin can view the past statistics of hardware current, voltages, Power etc. A pdf downloadable file can be generated to share results with other engineers to plan the next moves accordingly. Admin can also monitor the live locations of devices using Google Maps APIs.',
        pics: [
          'powerdiverter/1.jpg',
          'powerdiverter/2.jpg',
          'powerdiverter/3.jpg',
          'powerdiverter/4.jpg'
        ],
        website: "Private Server",
        type: projectType.angular
      },
      {
        heading: 'Monitor and control a Garden from Web App',
        tags: ['HTML', 'CSS', 'Laravel', 'MySQL', 'APIs'],
        coverPic: 'smartgarden/2.JPG',
        description: 'This app was designed for a client who was also a gardner, to help him monitoring his plants. The smart garden is totally controllable from a local server. The gardner can start/stop the water sprinkler and also can set the schedules for them to start/stop at the particular time everyday. The gardner can monitor the health of plants form the server remotely.',
        pics: [
          'smartgarden/1.JPG',
          'smartgarden/2.JPG',
          'smartgarden/3.JPG'
        ],
        website: "Private Server",
        type: projectType.laravel
      },
      {
        heading: 'Biometric Attendance Management System',
        tags: ['HTML', 'CSS', 'PHP', 'MySQL', 'Javascript'],
        coverPic: 'attendence/1.JPG',
        description: 'This application was designed for a CEO who can see the In and Out time of his clients and can Add/Delete users Remotely. The user, while get to work, can mark his attendance on the assigned IoT machine. Same while leaving the office he will mark himself OUT by using that machine and his fingerprint. The same IN and OUT record will be uploaded to the server to be monitor IN and OUT activities of clients.',
        pics: [
          'attendence/1.JPG',
          'attendence/2.jpg',
          'attendence/3.JPG'
        ],
        website: "Private Server",
        type: projectType.php
      },
    ];
  }

  getProjectsTypes(): string[]{
    return [projectType.php, projectType.angular, projectType.laravel];
  }

  testimonialSliderOptions(): OwlOptions{
    return {
      loop: true,
        mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots: true,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 1
      }
    },
      nav: false
    };
  }
}
