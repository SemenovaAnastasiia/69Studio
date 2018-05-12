import { Component, OnInit } from '@angular/core';

class DataObj {
  'img': string;
  'text': string;
  'spanText': string;
  'copyright': string;
}

class Social {
  'linkText': string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerData: DataObj = {
    'img': 'footer-logo.png',
    'text': 'This theme is proudly designed and developed by',
    'spanText': 'John Doe',
    'copyright': 'Copright 2015 Trendy Theme - All Rights Reserved',
  };

  footerSocialArr: Social[] = [
    {
      'linkText': 'fa-facebook'
    },
    {
      'linkText': 'fa-twitter'
    },
    {
      'linkText': 'fa-google-plus'
    },
    {
      'linkText': 'fa-linkedin'
    },
    {
      'linkText': 'fa-youtube'
    },
    {
      'linkText': 'fa-instagram'
    },
    {
      'linkText': 'fa-behance'
    },
    {
      'linkText': 'fa-dribbble'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
