import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { fromEvent, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'loop-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss'],
})
export class RecordComponent implements OnInit, OnDestroy {
  public mediaRecorder: MediaRecorder;
  public audioChunks: Blob[] = [];
  public audioUrl: SafeUrl;

  @ViewChild('container', { static: true }) public container: ElementRef<HTMLDivElement>;

  private _destroyed$: ReplaySubject<void> = new ReplaySubject();

  constructor(private _changeDetectorRef: ChangeDetectorRef, private _domSanitizer: DomSanitizer) {}

  public ngOnInit(): void {
    this._loadPermissions();
  }

  public ngOnDestroy(): void {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  public startRecording = (): void => {
    this.mediaRecorder.start();
  };

  public endRecording = (): void => {
    this.mediaRecorder.stop();
  };

  private _loadPermissions(): void {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((mediaStream: MediaStream) => {
      this.mediaRecorder = new MediaRecorder(mediaStream);
      this._listenToRecording();
    });
  }

  private _listenToRecording(): void {
    fromEvent(this.mediaRecorder, 'dataavailable')
      .pipe(takeUntil(this._destroyed$))
      .subscribe((audioChunk: BlobEvent) => {
        this.audioChunks.push(audioChunk.data);
      });

    fromEvent(this.mediaRecorder, 'stop')
      .pipe(takeUntil(this._destroyed$))
      .subscribe(() => {
        this._buildAudioClip();
      });
  }

  private _buildAudioClip(): void {
    console.log('_buildAudioClip', this.audioChunks);
    //const clipName = prompt('Enter a name for your sound clip');
    const blob = new Blob(this.audioChunks, { type: 'audio/ogg; codecs=opus' });
    this.audioChunks = [];
    const url = window.URL.createObjectURL(blob);
    this.audioUrl = this._domSanitizer.bypassSecurityTrustResourceUrl(url);

    console.log(this.audioUrl);
    this._changeDetectorRef.detectChanges();
  }
}
