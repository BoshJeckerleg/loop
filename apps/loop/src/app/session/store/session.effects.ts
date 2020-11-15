import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Recording } from '../interfaces';
import { SessionHttpService } from '../services/session-http/session-http.service';
import * as SessionActions from './session.actions';

@Injectable()
export class SessionEffects {
  constructor(private _actions: Actions, private _sessionHttpService: SessionHttpService) {}

  public addRecording = createEffect(() =>
    this._actions.pipe(
      ofType(SessionActions.addRecording),
      mergeMap((action: { recording: Recording }) => {
        return this._sessionHttpService.uploadRecording(action.recording).pipe(
          map((recording: Recording) => SessionActions.addRecordingSuccess({ recording })),
          catchError(() => of(SessionActions.addRecordingFailure()))
        );
      })
    )
  );
}
