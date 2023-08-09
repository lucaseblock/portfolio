import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {
  cards: any[] = [];
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
      this.cards = translations.PORTFOLIO.CARDS;
    });
  }

  ngOnDestroy() {
    this.translateSubscription.unsubscribe();
  }
}
