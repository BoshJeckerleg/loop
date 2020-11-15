import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SessionEffects } from './session.effects';
import * as fromSession from './session.reducer';

@NgModule({
  imports: [StoreModule.forFeature(fromSession.FEATURE_KEY, fromSession.reducer), EffectsModule.forFeature([SessionEffects])],
  exports: [StoreModule],
})
export class SessionStoreModule {}
