import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginDialogComponent } from 'src/app/components/login-dialog/login-dialog.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  title = 'MPR';

  constructor(private dialog: MatDialog) {}

  openLoginForm() {
    this.dialog.open(LoginDialogComponent, {
      height: '400px',
      width: '600px',
      hasBackdrop: true,
    });
  }
}
