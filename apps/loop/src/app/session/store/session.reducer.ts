import { Recording } from '@loop/session/interfaces';
import { ActionReducer, createReducer, on } from '@ngrx/store';
import * as SessionActions from './session.actions';

export const FEATURE_KEY = 'loop.session';

export interface State {
  loaded: boolean;
  recordings: Recording[];
}

export const initialState: State = {
  loaded: false,
  recordings: [],
};

export const reducer: ActionReducer<State> = createReducer(
  initialState,

  on(SessionActions.addRecordingSuccess, (state: State, { recording }) => {
    console.log(state.recordings);
    return {
      ...state,
      recordings: [...state.recordings, recording],
    };
  })
);
