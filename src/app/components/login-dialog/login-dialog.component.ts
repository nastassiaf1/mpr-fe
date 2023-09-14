import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Store, select } from '@ngrx/store';
import { GetUser } from 'src/app/store/actions/user.actions';
import { UserService } from 'src/app/services/user.service';
import { getUser } from 'src/app/store/selectors/auth.selectors';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss'],
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ]
})
export class LoginDialogComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.pipe(select(getUser)).subscribe((res) => {
      console.log(res);
    })
  }

  loginForm: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    const login = this.loginForm.controls['login'].value;
    const password = this.loginForm.controls['password'].value;

    this.store.dispatch(new GetUser({ login, password }));
  }
}

