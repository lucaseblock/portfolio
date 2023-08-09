import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  private id: string = '';
  public project: any;
  public translationesLoaded: boolean = false;
  private translateSubscription: Subscription = new Subscription();
  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ project }) => (this.id = project));
    this.getTranslation(this.translate.currentLang);
    this.translateSubscription.add(
      this.translate.onLangChange.subscribe((result) => {
        this.getTranslation(result.lang);
      })
    );
  }

  private getTranslation(language: string) {
    this.translate.getTranslation(language).subscribe((translations) => {
      translations.PROJECTS.forEach((project: any) => {
        if (project.ID === this.id) this.project = project;
        this.translationesLoaded = true;
      });
    });
  }
}
