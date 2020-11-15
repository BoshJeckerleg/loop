import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import * as Components from './components';

@NgModule({
  declarations: [Components.ButtonComponent, Components.ButtonLinkComponent],
  imports: [CommonModule, RouterModule],
  exports: [Components.ButtonComponent, Components.ButtonLinkComponent],
})
export class UiButtonModule {}
