import { Recording } from '@loop/session/interfaces';
import { createAction, props } from '@ngrx/store';

export const addRecording = createAction('[Session] Add Recording Request', props<{ recording: Recording }>());

export const addRecordingSuccess = createAction('[Session] Add Recording Success', props<{ recording: Recording }>());

export const addRecordingFailure = createAction('[Session] Add Recording Failure');
