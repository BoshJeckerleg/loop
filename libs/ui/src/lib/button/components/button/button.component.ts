import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() public assistiveText?: string;
  @Input() public disabled?: boolean;
  @Input() public submit?: boolean;
  @Input() public theme: 'primary' | 'secondary' | 'white' = 'primary';

  @Output() public handleClick = new EventEmitter<null>();

  constructor() {}

  public onClick(): void {
    this.handleClick.emit();
  }
}
