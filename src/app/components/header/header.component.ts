import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Subject, filter, takeUntil } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { getUser } from 'src/app/store/selectors/auth.selectors';
import { AppState } from 'src/app/store/state/app.state';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    RouterModule,
    MatIconModule,
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<boolean>();
  private readonly dialogConfig = {
    width: '600px',
    height: 'auto',
    hasBackdrop: true,
    panelClass: 'dialog-container'
  };

  user: User | null = null;
  isHomePage: boolean = false;

  constructor(private dialog: MatDialog, private readonly store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.store.pipe(takeUntil(this.destroy$), select(getUser)).subscribe((user) => {
      this.user = user;
    });

    this.router.events.pipe(takeUntil(this.destroy$), filter(event => event instanceof NavigationEnd)).subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomePage = event.url === '/';
      }
    });
  }

  openLoginForm() {
    this.dialog.open(LoginDialogComponent, this.dialogConfig);
  }

  openRegistrationForm() {
    this.dialog.open(RegisterDialogComponent, this.dialogConfig);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
