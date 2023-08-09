import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  skillsImages = [
    {
      src: 'assets/images/skills/html5.png',
      title: 'HTML',
    },
    {
      src: 'assets/images/skills/css3.png',
      title: 'css',
    },
    {
      src: 'assets/images/skills/javascript.png',
      title: 'JavaScript',
    },
    {
      src: 'assets/images/skills/typescript.png',
      title: 'TypeScript',
    },
    {
      src: 'assets/images/skills/angular.png',
      title: 'Angular',
    },
    {
      src: 'assets/images/skills/ionic.png',
      title: 'Ionic',
    },
    {
      src: 'assets/images/skills/react.png',
      title: 'React',
    },
    {
      src: 'assets/images/skills/sass.png',
      title: 'Sass',
    },
    {
      src: 'assets/images/skills/bootstrap.png',
      title: 'Bootstrap',
    },
    {
      src: 'assets/images/skills/rxjs.png',
      title: 'RXJS',
    },
    {
      src: 'assets/images/skills/redux.png',
      title: 'Redux',
    },
    {
      src: 'assets/images/skills/jasmine.png',
      title: 'Jasmine',
    },
    {
      src: 'assets/images/skills/jest.png',
      title: 'Jest',
    },
    {
      src: 'assets/images/skills/nodejs.png',
      title: 'NodeJs',
    },
    {
      src: 'assets/images/skills/jquery.png',
      title: 'jQuery',
    },
    {
      src: 'assets/images/skills/github.png',
      title: 'GitHub',
    },
    {
      src: 'assets/images/skills/gitbash.png',
      title: 'GitBash',
    },
    {
      src: 'assets/images/skills/docker.png',
      title: 'Docker',
    },
    {
      src: 'assets/images/skills/wordpress.png',
      title: 'Wordpress',
    },
    {
      src: 'assets/images/skills/cleancode.webp',
      title: 'Clean Code',
    },
  ];
}
