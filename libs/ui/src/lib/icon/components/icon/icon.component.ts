import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
@Component({
  selector: 'ui-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() public name: string;
  @Input() public size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  constructor() {}
}
