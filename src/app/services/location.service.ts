import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private key: string = environment.ipGeoLocationKey;
  private currentYear = new BehaviorSubject('');
  private countryFlag = new BehaviorSubject('');

  constructor(private http: HttpClient) {}

  public getLocation(): Observable<any> {
    return this.http.get(
      `https://api.ipgeolocation.io/ipgeo?apiKey=${this.key}`
    );
  }

  public getCurrentYear(): Observable<string> {
    return this.currentYear.asObservable();
  }

  public setCurrentYear(year: string) {
    this.currentYear.next(year);
  }

  public getCountryFlag(): Observable<string> {
    return this.countryFlag.asObservable();
  }

  public setCountryFlag(url: string) {
    this.countryFlag.next(url);
  }
}
