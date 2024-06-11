import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-sidebar-item',
  templateUrl: './navigation-sidebar-item.component.html',
  styleUrls: ['./navigation-sidebar-item.component.css'],
})
export class NavigationSidebarItemComponent {
  @Input() icon!: string;
  @Input() label!: string;
  @Input() link!: string;
}
