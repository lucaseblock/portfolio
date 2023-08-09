import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  public currentYear: string = '';

  constructor(private location: LocationService) {}

  ngOnInit(): void {
    this.location
      .getCurrentYear()
      .subscribe((resp: string) => (this.currentYear = resp));
  }
}
