import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navBarObj: object[] = [
    {
      'firstLevelName': 'Home',
      'secondLevel': [
        {
          'secondLevelName': 'Multi Page',
          'thirdLevel': [
            {
              'thirdLevelName': 'Default Homepage',
            },
            {
              'thirdLevelName': 'Creative Homepage',
            },
            {
              'thirdLevelName': 'Corporate Homepage',
            },
            {
              'thirdLevelName': 'Blog Homepage',
            },
            {
              'thirdLevelName': 'Portfolio Home One',
            },
            {
              'thirdLevelName': 'Portfolio Home One Two',
            },
          ]
        },
        {
          'secondLevelName': 'One Page',
          'thirdLevel': [
            {
              'thirdLevelName': 'Homepage slider',
            },
            {
              'thirdLevelName': 'Parallax Image BG',
            },
            {
              'thirdLevelName': 'Particle Image BG',
            },
            {
              'thirdLevelName': 'Text rotator BG',
            },
            {
              'thirdLevelName': 'Static Image BG',
            },
            {
              'thirdLevelName': 'HTML Video BG',
            },
            {
              'thirdLevelName': 'Youtube Video BG',
            },
          ]
        }
      ],
    },
    {
      'firstLevelName': 'Pages',
      'secondLevel': [
        {
          'secondLevelName': 'About',
          'thirdLevel': [
            {
              'thirdLevelName': 'About Us',
            },
            {
              'thirdLevelName': 'About Us Two',
            },
          ]
        },
        {
          'secondLevelName': 'Services',
        },
        {
          'secondLevelName': 'Case Study Pages',
          'thirdLevel': [
            {
              'thirdLevelName': 'Case Study One',
            },
            {
              'thirdLevelName': 'Case Study Two',
            },
          ]
        },
        {
          'secondLevelName': '404 Pages',
          'thirdLevel': [
            {
              'thirdLevelName': '404 Page',
            },
            {
              'thirdLevelName': '404 Page Alt',
            },
          ]
        },
        {
          'secondLevelName': 'Contact',
        },
        {
          'secondLevelName': 'Typography',
        },
      ],
    },
    {
      'firstLevelName': 'Features',
      'secondLevel': [
        {
          'secondLevelName': 'Sliders',
          'thirdLevel': [
            {
              'thirdLevelName': 'Revolution FullScreen',
            },
            {
              'thirdLevelName': 'Revolution KenBurns',
            },
            {
              'thirdLevelName': 'Bootstrap Boxed',
            },
            {
              'thirdLevelName': 'Flex Thumbnail',
            },
          ]
        },
        {
          'secondLevelName': 'Hero Units',
          'thirdLevel': [
            {
              'thirdLevelName': 'Parallax BG',
            },
            {
              'thirdLevelName': 'Static BG',
            },
            {
              'thirdLevelName': 'Particle BG',
            },
            {
              'thirdLevelName': 'HTML Video',
            },
            {
              'thirdLevelName': 'Youtube Video',
            },
          ]
        },
        {
          'secondLevelName': 'Menu Style',
          'thirdLevel': [
            {
              'thirdLevelName': 'Default Menu',
            },
            {
              'thirdLevelName': 'Transparent Menu',
            },
            {
              'thirdLevelName': 'Fullscreen Menu',
            },
          ]
        },
        {
          'secondLevelName': 'Testimonial Styles',
        },
        {
          'secondLevelName': 'Embeded Videos',
        },
      
      ]
    },
    {
      'firstLevelName': 'Portfolio',
      'secondLevel': [
        {
          'secondLevelName': 'Boxed',
          'thirdLevel': [
            {
              'thirdLevelName': '2 Columns',
            },
            {
              'thirdLevelName': '3 Columns',
            },
            {
              'thirdLevelName': '4 Columns',
            },
            {
              'thirdLevelName': '5 Columns',
            },
          ]
        },
        {
          'secondLevelName': 'Boxed - Gutter',
          'thirdLevel': [
            {
              'thirdLevelName': '2 Columns',
            },
            {
              'thirdLevelName': '3 Columns',
            },
            {
              'thirdLevelName': '4 Columns',
            },
            {
              'thirdLevelName': '5 Columns',
            },
          ]
        },
        {
          'secondLevelName': 'Wide',
          'thirdLevel': [
            {
              'thirdLevelName': '2 Columns',
            },
            {
              'thirdLevelName': '3 Columns',
            },
            {
              'thirdLevelName': '4 Columns',
            },
            {
              'thirdLevelName': '5 Columns',
            },
          ]
        },
        {
          'secondLevelName': 'Wide - Gutter',
          'thirdLevel': [
            {
              'thirdLevelName': '2 Columns',
            },
            {
              'thirdLevelName': '3 Columns',
            },
            {
              'thirdLevelName': '4 Columns',
            },
            {
              'thirdLevelName': '5 Columns',
            },
          ]
        },
        {
          'secondLevelName': 'Portfolio Tiles',
          'thirdLevel': [
            {
              'thirdLevelName': '2 Columns',
            },
            {
              'thirdLevelName': '3 Columns',
            },
            {
              'thirdLevelName': '4 Columns',
            },
          ]
        },
        {
          'secondLevelName': 'Portfolio Details',
          'thirdLevel': [
            {
              'thirdLevelName': 'Details 1',
            },
            {
              'thirdLevelName': 'Details 2',
            },
            {
              'thirdLevelName': 'Details Gallery',
            },
          ]
        },
        {
          'secondLevelName': 'Case Study Pages',
          'thirdLevel': [
            {
              'thirdLevelName': 'Case Study One',
            },
            {
              'thirdLevelName': 'Case Study Two',
            },
          ]
        },
      ]
    },
    {
      'firstLevelName': 'Blog',
      'secondLevel': [
        {
          'secondLevelName': 'Classic',
          'thirdLevel': [
            {
              'thirdLevelName': 'Sidebar Left',
            },
            {
              'thirdLevelName': 'Sidebar Right',
            },
          ]
        },
        {
          'secondLevelName': 'Grid',
          'thirdLevel': [
            {
              'thirdLevelName': 'Grid 3 Column',
            },
            {
              'thirdLevelName': 'Grid Left Sidebar',
            },
            {
              'thirdLevelName': 'Grid Right Sidebar',
            },
          ]
        },
        {
          'secondLevelName': 'Masonry',
          'thirdLevel': [
            {
              'thirdLevelName': 'Masonry 4',
            },
            {
              'thirdLevelName': 'Masonry 4 FullWidth',
            },
            {
              'thirdLevelName': 'Masonry 3',
            },
            {
              'thirdLevelName': 'Masonry 3 FullWidth',
            },
            {
              'thirdLevelName': 'Masonry 2',
            },
          ]
        },
        {
          'secondLevelName': 'Blog Details',
          'thirdLevel': [
            {
              'thirdLevelName': 'Single Articel',
            },
            {
              'thirdLevelName': 'Single Left Sidebar',
            },
          ]
        },

      ]
    },
    {
      'firstLevelName': 'Shortcodes',
      'secondLevel': [
        {
          'secondLevelName': 'Accordion',
          'icon': 'fa-server',
        },
        {
          'secondLevelName': 'Alerts',
          'icon': 'fa-info-circle',
        },
        {
          'secondLevelName': 'Call To Action',
          'icon': 'fa-phone-square',
        },
        {
          'secondLevelName': 'Clients Styles',
          'icon': 'fa-user',
        },
        {
          'secondLevelName': 'Featured Box',
          'icon': 'fa-list-alt',
        },
        {
          'secondLevelName': 'Fun Facts',
          'icon': 'fa-clock-o',
        },
        {
          'secondLevelName': 'Wide Sections',
          'icon': 'fa-desktop',
        },
        {
          'secondLevelName': 'Hover Styles',
          'icon': 'fa-picture-o',
        },
        {
          'secondLevelName': 'Progressbar',
          'icon': 'fa-tasks',
        },
        {
          'secondLevelName': 'Tab',
          'icon': 'fa-rocket',
        },
        {
          'secondLevelName': 'Table',
          'icon': 'fa-table',
        },
        {
          'secondLevelName': 'Testimonial',
          'icon': 'fa-quote-right',
        },
      ]
    },
    {
      'firstLevelName': 'Contact',
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}
