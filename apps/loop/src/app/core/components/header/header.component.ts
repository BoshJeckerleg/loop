import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'loop-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor() {}
}
