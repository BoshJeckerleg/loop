import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiLayoutModule } from '@lib/ui';
import * as Components from './components';

@NgModule({
  declarations: [Components.HeaderComponent, Components.FooterComponent],
  imports: [CommonModule, UiLayoutModule],
  exports: [Components.HeaderComponent, Components.FooterComponent],
})
export class CoreModule {}
