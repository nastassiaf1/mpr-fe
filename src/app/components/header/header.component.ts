import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Subject, takeUntil } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { CommonModule } from '@angular/common';

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
    MatDialogModule
  ],
})
export class HeaderComponent implements OnInit {
  private readonly destroy$ = new Subject<boolean>();
  user: User | null = null;

  constructor(private dialog: MatDialog, private readonly store: Store<AppState>) {}

  ngOnInit() {
    this.store.pipe(takeUntil(this.destroy$), select(getUser)).subscribe((user) => {
      this.user = user;
    })
  }

  openLoginForm() {
    this.dialog.open(LoginDialogComponent, {
      height: '400px',
      width: '600px',
      hasBackdrop: true,
    });
  }

  openRegistrationForm() {
    this.dialog.open(RegisterDialogComponent, {
      height: '400px',
      width: '600px',
      hasBackdrop: true,
    });
  }
}
