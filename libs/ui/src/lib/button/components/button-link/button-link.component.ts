import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ui-button-link',
  templateUrl: './button-link.component.html',
  styleUrls: ['./button-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonLinkComponent {
  @Input() public assistiveText?: string;
  @Input() public disabled?: boolean;
  @Input() public externalPath?: string;
  @Input() public routerPath?: string | string[];
  @Input() public theme?: 'primary' | 'secondary' | 'white' = 'primary';

  constructor() {}
}
