import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit, OnDestroy {
  education: any[] = [];
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
      this.education = translations.EDUCATION.DEGREES;
    });
  }

  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }
}
