import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-icon',
  templateUrl: './text-icon.component.html',
  styleUrls: ['./text-icon.component.scss'],
})
export class TextIconComponent {
  @Input() iconName: string = '';
  @Input() iconSrc: string = '';
}
