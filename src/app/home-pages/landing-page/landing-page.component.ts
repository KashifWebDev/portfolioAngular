import { Component, OnInit } from '@angular/core';
import {client, testimonial} from "../../shared/dataTypes";
import {OwlOptions} from "ngx-owl-carousel-o";


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  clients: client[] = [];
  testimonials: testimonial[] = [];
  customOptions: OwlOptions = {
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
  }

  constructor() { }

  ngOnInit(): void {
    this.clients = [
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
    this.testimonials = [
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

}
