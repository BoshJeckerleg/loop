import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Recording } from '@loop/session/interfaces';
import * as fromSession from '@loop/session/store';
import { Store } from '@ngrx/store';
import { Observable, ReplaySubject } from 'rxjs';
@Component({
  selector: 'loop-playback',
  templateUrl: './playback.component.html',
  styleUrls: ['./playback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaybackComponent implements OnInit, OnDestroy {
  public recordings$: Observable<Recording[]>;

  private _destroyed$: ReplaySubject<void> = new ReplaySubject();

  constructor(private _store: Store<fromSession.State>) {}

  public ngOnInit(): void {
    this._connectToStore();
  }

  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  public trackRecording(index: number, recording: Recording): string {
    return recording.id;
  }

  private _connectToStore(): void {
    this.recordings$ = this._store.select(fromSession.getRecordings);
  }
}
