import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-sidebar',
  templateUrl: './navigation-sidebar.component.html',
  styleUrls: ['./navigation-sidebar.component.css'],
})
export class NavigationSidebarComponent {
  navItems = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fdcf62a26f5ff08c31a3f3b2a48eb0b9cdb81fa8a7af394abee94359859d6ba0?apiKey=1c18aed1385c4ecbbac7a43e90bc0e48&',
      label: 'Home',
      link: '/',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1627aaac0e098f361ff4f386d16e50cd37786328888a3b93cce67b12191fe5f4?apiKey=1c18aed1385c4ecbbac7a43e90bc0e48&',
      label: 'Realtime',
      link: '/realtime',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2a7cff0c8b45f6995520e7d2a3371584cd7233c0560fac8d619e132e30037dcb?apiKey=1c18aed1385c4ecbbac7a43e90bc0e48&',
      label: 'Events',
      link: '/events',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dd7a56f15ec9fcf3904492aa49a48ea38c0105d24d7f169da1c1330e8aa844c0?apiKey=1c18aed1385c4ecbbac7a43e90bc0e48&',
      label: 'Devices',
      link: '/devices',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a3a69797490f16b93f27bb726777dfa406d1000abaae2e374dc9168a6ec20e48?apiKey=1c18aed1385c4ecbbac7a43e90bc0e48&',
      label: 'Domain',
      link: '/domain',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/49d28815e149923bf648db21c065a9c62fc29bdaf5511bdc52186d36f004f1bb?apiKey=1c18aed1385c4ecbbac7a43e90bc0e48&',
      label: 'Settings',
      link: '/settings',
    },
  ];
}
