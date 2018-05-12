import { Component, OnInit } from '@angular/core';


class DataObj {
  'title': string;
  'subtitle': string;
  'img': string;
  'btn': string;
}

@Component({
  selector: 'app-intro-team',
  templateUrl: './intro-team.component.html',
  styleUrls: ['./intro-team.component.scss']
})
export class IntroTeamComponent implements OnInit {

  sectionTitle: DataObj = {
    'title': 'We Are Young Player of \n Creative Feild',
    'subtitle': 'Yes, strangely enough we\'ve had a couple of people ask how they can contact us.',
    'img': 'assets/images/intro-team/team.jpg',
    'btn': 'View full team',
  };


  constructor() { }

  ngOnInit() {
  }

}
