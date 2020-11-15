import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as Components from './components';

@NgModule({
  declarations: [Components.HeaderComponent, Components.FooterComponent],
  imports: [CommonModule, RouterModule],
  exports: [Components.HeaderComponent, Components.FooterComponent],
})
export class UiLayoutModule {}
