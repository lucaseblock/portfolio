import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss'],
})
export class WorkExperienceComponent implements OnInit, OnDestroy {
  workExperience: any[] = [];
  private translateSubscription: Subscription = new Subscription();
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.getTranslation(this.translate.currentLang);
    this.translateSubscription.add(
      this.translate.onLangChange.subscribe((result) => {
        this.getTranslation(result.lang);
      })
    );
  }

  private getTranslation(language: string) {
    this.translate.getTranslation(language).subscribe((translations) => {
      this.workExperience = translations.WORKEXPERIENCE.JOBS;
    });
  }

  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }
}
