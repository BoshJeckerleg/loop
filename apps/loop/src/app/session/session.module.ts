import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UiButtonModule } from '@lib/ui';
import * as Components from './components';
import * as Pages from './pages';
import { SessionRoutingModule } from './session-routing.module';
import { SessionStoreModule } from './store/session-store.module';

@NgModule({
  declarations: [Pages.SessionComponent, Components.RecordingComponent, Components.PlaybackComponent, Components.RecordComponent],
  imports: [CommonModule, SessionRoutingModule, UiButtonModule, SessionStoreModule],
})
export class SessionModule {}
