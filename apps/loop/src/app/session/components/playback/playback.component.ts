import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'loop-playback',
  templateUrl: './playback.component.html',
  styleUrls: ['./playback.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaybackComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
