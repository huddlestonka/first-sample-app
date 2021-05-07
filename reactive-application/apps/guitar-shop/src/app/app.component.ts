import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

export enum SidenavStatus {
  OPENED = 'opened',
  DISABLED = 'disabled',
  CLOSED = 'closed',
}

@Component({
  selector: 'reactive-application-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'guitar-shop';
  links = [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/courses', icon: 'view_list', title: 'courses' },
    { path: '/lessons', icon: 'assignment', title: 'lessons' },
    { path: '/users', icon: 'account_circle', title: 'users' },
  ];

  isAuthenticated$: Observable<boolean> = of(true);
  sidenavStatus = SidenavStatus.OPENED;

  constructor() {}

  logout() {}

  toggleSidenav() {
    this.sidenavStatus =
      this.sidenavStatus === SidenavStatus.OPENED
        ? SidenavStatus.CLOSED
        : SidenavStatus.OPENED;
  }
}
