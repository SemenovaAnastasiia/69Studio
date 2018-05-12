import { Component, OnInit } from '@angular/core';

class DataObj {
  'title': string;
  'subtitle': string;
  'img': string;
}

class TextFormat {
  'id': string;
  'title': string;
  'p1': string;
  'p2': string;
}

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrls: ['./main-section.component.scss']
})
export class MainSectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sectionTitle: DataObj = {
    'title': 'Welcome to 69Studio',
    'subtitle': 'Miami introduces the most flexible layout ever to the world of WordPress Themes. \n We provide you with a Toolkit to build your Dreams!',
    'img': 'planning.jpg'
  };

  sectionText: DataObj = {
    'title': 'We work together for solution',
    'subtitle': 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
    'img': ''
  };

  tablists: TextFormat[] = [
    {
      'id': 'vision',
      'title': 'Vision',
      'p1': 'Efficiently simplify low-risk high-yield methods of empowerment for turnkey materials. Distinctively target out-of-the-box value before extensive data. Compellingly unleash interactive testing procedures without impactful expertise. Monotonectally unleash leveraged outsourcing whereas.',
      'p2': 'Conveniently deliver business channels rather than seamless action items. Appropriately matrix maintainable core competencies before.'
    },
    {
      'id': 'mission',
      'title': 'Mission',
      'p1': 'Monotonectally unleash leveraged outsourcing whereas. Efficiently simplify low-risk high-yield methods of empowerment for turnkey materials. Distinctively target out-of-the-box value before extensive data. Compellingly unleash interactive testing procedures without impactful expertise. ',
      'p2': 'Competencies before onveniently deliver business channels rather than seamless action items. Appropriately matrix maintainable core .'
    },
    {
      'id': 'history',
      'title': 'History',
      'p1': 'Efficiently simplify low-risk high-yield methods of empowerment for turnkey materials. Distinctively target out-of-the-box value before extensive data. Compellingly unleash interactive testing procedures without impactful expertise. Monotonectally unleash leveraged outsourcing whereas.',
      'p2': 'Conveniently deliver business channels rather than seamless action items. Appropriately matrix maintainable core competencies before.<'
    },
    {
      'id': 'review',
      'title': 'Review',
      'p1': 'Monotonectally unleash leveraged outsourcing whereas. Efficiently simplify low-risk high-yield methods of empowerment for turnkey materials. Distinctively target out-of-the-box value before extensive data. Compellingly unleash interactive testing procedures without impactful expertise. ',
      'p2': 'Competencies before onveniently deliver business channels rather than seamless action items. Appropriately matrix maintainable core .'
    },
  ];

}
