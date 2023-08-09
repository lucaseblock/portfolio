import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [PortfolioComponent, CardComponent],
  imports: [CommonModule],
  exports: [PortfolioComponent, CardComponent],
})
export class PortfolioModule {}
