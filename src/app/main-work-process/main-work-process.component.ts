import { Component, OnInit } from '@angular/core';

class DataObj {
  'title': string;
  'subtitle': string;
}

class TextFormat {
  'class': string;
  'title': string;
  'p': string;
}

@Component({
  selector: 'app-main-work-process',
  templateUrl: './main-work-process.component.html',
  styleUrls: ['./main-work-process.component.scss']
})
export class MainWorkProcessComponent implements OnInit {

  sectionTitle: DataObj = {
    'title': 'Working Process',
    'subtitle': 'Miami introduces the most flexible layout ever to the world of WordPress Themes. \n We provide you with a Toolkit to build your Dreams!'
  };

  sectionTextArr: TextFormat[] = [
    {
      'class': 'flaticon-light92',
      'title': 'Web Design',
      'p': 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat pretium ut lacinia elementum.',
    },
    {
      'class': 'flaticon-smartphone97',
      'title': 'Web Development',
      'p': 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat pretium ut lacinia elementum.',
    },
    {
      'class': 'flaticon-cart',
      'title': 'eCommerce Solutions',
      'p': 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat pretium ut lacinia elementum.',
    },
    {
      'class': 'flaticon-paint104',
      'title': 'Web Design',
      'p': 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat pretium ut lacinia elementum.',
    },
    {
      'class': 'flaticon-document171',
      'title': 'Web Development',
      'p': 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat pretium ut lacinia elementum.',
    },
    {
      'class': 'flaticon-cart',
      'title': 'eCommerce Solutions',
      'p': 'Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla quis lorem ut libero malesuada feugiat pretium ut lacinia elementum.',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
