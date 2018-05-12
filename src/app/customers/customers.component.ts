import { Component, OnInit } from '@angular/core';

class DataObj {
  'text': string;
  'client': string;
  'spanText': string;
  'job': string;
  'img': string;
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  title: string = 'Our happy customers';

  clientsArr: DataObj[] = [
    {
      'text': 'Buffalo created an e-commerce site with the tools to make our business a success, with \n innovative ideas we feel tshat our site has unique elements that make us stand \n out from the crowd.',
      'client': 'Kris Jegenes',
      'spanText': 'Ventive',
      'job': 'SEO, Uniquegraph',
      'img': 'client-logo-1.jpg',
    },
    {
      'text': 'Buffalo created an e-commerce site with the tools to make our business a success, with \n innovative ideas we feel tshat our site has unique elements that make us stand \n out from the crowd.',
      'client': 'Kris Jegenes',
      'spanText': 'Ventive',
      'job': 'SEO, Uniquegraph',
      'img': 'client-logo-2.jpg',
    },
    {
      'text': 'Buffalo created an e-commerce site with the tools to make our business a success, with \n innovative ideas we feel tshat our site has unique elements that make us stand \n out from the crowd.',
      'client': 'Kris Jegenes',
      'spanText': 'Ventive',
      'job': 'SEO, Uniquegraph',
      'img': 'client-logo-3.jpg',
    },
    {
      'text': 'Buffalo created an e-commerce site with the tools to make our business a success, with \n innovative ideas we feel tshat our site has unique elements that make us stand \n out from the crowd.',
      'client': 'Kris Jegenes',
      'spanText': 'Ventive',
      'job': 'SEO, Uniquegraph',
      'img': 'client-logo-4.jpg',
    },
    {
      'text': 'Buffalo created an e-commerce site with the tools to make our business a success, with \n innovative ideas we feel tshat our site has unique elements that make us stand \n out from the crowd.',
      'client': 'Kris Jegenes',
      'spanText': 'Ventive',
      'job': 'SEO, Uniquegraph',
      'img': 'client-logo-5.jpg',
    },
    {
      'text': 'Buffalo created an e-commerce site with the tools to make our business a success, with \n innovative ideas we feel tshat our site has unique elements that make us stand \n out from the crowd.',
      'client': 'Kris Jegenes',
      'spanText': 'Ventive',
      'job': 'SEO, Uniquegraph',
      'img': 'client-logo-6.jpg',
    },
    {
      'text': 'Buffalo created an e-commerce site with the tools to make our business a success, with \n innovative ideas we feel tshat our site has unique elements that make us stand \n out from the crowd.',
      'client': 'Kris Jegenes',
      'spanText': 'Ventive',
      'job': 'SEO, Uniquegraph',
      'img': 'client-logo-7.jpg',
    },
    {
      'text': 'Buffalo created an e-commerce site with the tools to make our business a success, with \n innovative ideas we feel tshat our site has unique elements that make us stand \n out from the crowd.',
      'client': 'Kris Jegenes',
      'spanText': 'Ventive',
      'job': 'SEO, Uniquegraph',
      'img': 'client-logo-8.jpg',
    },
    {
      'text': 'Buffalo created an e-commerce site with the tools to make our business a success, with \n innovative ideas we feel tshat our site has unique elements that make us stand \n out from the crowd.',
      'client': 'Kris Jegenes',
      'spanText': 'Ventive',
      'job': 'SEO, Uniquegraph',
      'img': 'client-logo-9.jpg',
    },
    {
      'text': 'Buffalo created an e-commerce site with the tools to make our business a success, with \n innovative ideas we feel tshat our site has unique elements that make us stand \n out from the crowd.',
      'client': 'Kris Jegenes',
      'spanText': 'Ventive',
      'job': 'SEO, Uniquegraph',
      'img': 'client-logo-10.jpg',
    },
    {
      'text': 'Buffalo created an e-commerce site with the tools to make our business a success, with \n innovative ideas we feel tshat our site has unique elements that make us stand \n out from the crowd.',
      'client': 'Kris Jegenes',
      'spanText': 'Ventive',
      'job': 'SEO, Uniquegraph',
      'img': 'client-logo-11.jpg',
    },
    {
      'text': 'Buffalo created an e-commerce site with the tools to make our business a success, with \n innovative ideas we feel tshat our site has unique elements that make us stand \n out from the crowd.',
      'client': 'Kris Jegenes',
      'spanText': 'Ventive',
      'job': 'SEO, Uniquegraph',
      'img': 'client-logo-12.jpg',
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
