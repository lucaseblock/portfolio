import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent implements OnInit {
  public countryFlag: string = '';

  constructor(private location: LocationService) {}

  ngOnInit(): void {
    this.location
      .getCountryFlag()
      .subscribe((resp: string) => (this.countryFlag = resp));
  }
}
