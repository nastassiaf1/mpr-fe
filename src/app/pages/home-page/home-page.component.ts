import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginDialogComponent } from 'src/app/components/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from 'src/app/components/register-dialog/register-dialog.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    LoginDialogComponent,
  ],
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

  openRegistrationForm() {
    this.dialog.open(RegisterDialogComponent, {
      height: '400px',
      width: '600px',
      hasBackdrop: true,
    });
  }
}
