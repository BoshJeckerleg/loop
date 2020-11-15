import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'loop-recording',
  templateUrl: './recording.component.html',
  styleUrls: ['./recording.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecordingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
