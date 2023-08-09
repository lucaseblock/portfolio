import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: any;

  constructor(private router: Router) {}

  navigateToProject(id: string) {
    this.router.navigate(['/portfolio', id]);
  }

  ngOnInit(): void {}
}
