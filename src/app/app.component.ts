import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ParticlesConfig } from './particles-config';
import { LocationService } from './services/location.service';

declare let particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public appLoaded: boolean = false;
  constructor(
    public translate: TranslateService,
    private location: LocationService
  ) {
    this.translate.addLangs(['en', 'es']);
    this.translate.use('en');
    this.translate.setDefaultLang('en');
  }

  public ngOnInit(): void {
    this.invokeParticles();
    this.checkLanguage();
  }

  public changeLanguage() {
    const languages: Array<string> = this.translate.getLangs();
    const currentLanguage: string = this.translate.currentLang;
    const languageToUse: string = languages.filter(
      (lang) => lang !== currentLanguage
    )[0];
    this.translate.use(languageToUse);
  }

  private checkLanguage() {
    this.location.getLocation().subscribe((resp: any) => {
      this.setCurrentYear(resp);
      this.setCountryFlag(resp);
      if (resp.languages.split(',')[0].includes('es')) this.translate.use('es');
      this.appLoaded = true;
    });
  }

  private setCurrentYear(resp: any) {
    this.location.setCurrentYear(
      new Date(resp.time_zone.current_time).getFullYear().toString()
    );
  }

  private setCountryFlag(resp: any) {
    this.location.setCountryFlag(resp.country_flag);
  }

  public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig);
  }
}
