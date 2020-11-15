import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Recording } from '@loop/session/interfaces';

@Component({
  selector: 'loop-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecordingComponent implements OnInit {
  @Input() public recording: Recording;

  public safeAudioSrc: SafeUrl;

  constructor(private _domSanitizer: DomSanitizer) {}

  public ngOnInit(): void {
    this.safeAudioSrc = this._domSanitizer.bypassSecurityTrustResourceUrl(this.recording.url);
  }
}
