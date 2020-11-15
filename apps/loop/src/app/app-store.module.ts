import { NgModule } from '@angular/core';
import { browserLocalStorageSync, browserSessionStorageSync } from '@lib/utils';
import { environment } from '@loop/environment';
import * as fromSession from '@loop/session/store';
import { EffectsModule } from '@ngrx/effects';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export interface ApplicationState {
  readonly [fromSession.FEATURE_KEY]: fromSession.State;
}

export const localStorageMetaReducer: MetaReducer = (reducer: ActionReducer<ApplicationState>) =>
  browserLocalStorageSync<ApplicationState>(reducer, []);

export const sessionStorageMetaReducer: MetaReducer<ApplicationState> = (reducer: ActionReducer<ApplicationState>) =>
  browserSessionStorageSync<ApplicationState>(reducer, [fromSession.FEATURE_KEY]);

@NgModule({
  imports: [
    StoreModule.forRoot(
      {},
      {
        metaReducers: [localStorageMetaReducer, sessionStorageMetaReducer],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  exports: [StoreModule],
})
export class AppStoreModule {}
