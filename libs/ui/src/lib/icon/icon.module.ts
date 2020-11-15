import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import * as Components from './components';

@NgModule({
  declarations: [Components.IconComponent],
  imports: [CommonModule],
  exports: [Components.IconComponent],
})
export class UiIconModule {}
