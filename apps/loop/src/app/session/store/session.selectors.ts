import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Recording } from '../interfaces';
import { FEATURE_KEY, State } from './session.reducer';

export const getSessionState = createFeatureSelector<State>(FEATURE_KEY);

export const getRecordings = createSelector(getSessionState, (state: State): Recording[] => state.recordings);

export const getRecordingById = (id: string) =>
  createSelector(getSessionState, (state: State) => state.recordings.find((recording: Recording) => recording.id === id));
