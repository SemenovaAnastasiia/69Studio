import { Component, OnInit } from '@angular/core';

class DataObj {
  'title': string;
  'subtitle': string;
  'asset': string;
}

@Component({
  selector: 'app-intro-block',
  templateUrl: './intro-block.component.html',
  styleUrls: ['./intro-block.component.scss']
})
export class IntroBlockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  introBlockTextArr: DataObj[] = [
    {
      'title': 'Who We Are?',
      'subtitle': 'Dramatically enable exceptional e-tailers after prosp ective methods powerment Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'asset': 'Learn Details'
    },
    {
      'title': 'What We Do?',
      'subtitle': 'Veritatis rerum aliquam molestias eum quos aperiam dolores soluta repudiandae eos, perferendis quam sapiente eaque commodi non repellat.',
      'asset': 'Learn Details'
    },
    {
      'title': 'View Works',
      'subtitle': 'Dramatically enable exceptional e-tailers after prosp ective methods powerment Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      'asset': 'Learn Details'
    },
    {
      'title': 'Get in Touch',
      'subtitle': 'Veritatis rerum aliquam molestias eum quos aperiam dolores soluta repudiandae eos, perferendis quam sapiente eaque commodi non repellat.',
      'asset': 'Learn Details'
    }
  ];

}
