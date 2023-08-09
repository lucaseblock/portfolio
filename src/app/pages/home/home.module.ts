import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from './components/work-experience/work-experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    WorkExperienceComponent,
    EducationComponent,
    SkillsComponent,
    AboutMeComponent,
    HomeComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [
    WorkExperienceComponent,
    EducationComponent,
    SkillsComponent,
    AboutMeComponent,
    HomeComponent,
  ],
})
export class HomeModule {}
