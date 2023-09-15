import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AccountService } from 'src/app/services/account.service';
import { Store, select } from '@ngrx/store';
import { getUser } from 'src/app/store/selectors/auth.selectors';
import { AppState } from 'src/app/store/state/app.state';
import { RegisterUser } from 'src/app/store/actions/user.actions';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  templateUrl: './register-dialog.component.html',
  styleUrls: ['./register-dialog.component.scss']
})
export class RegisterDialogComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<boolean>();

  constructor(private readonly store: Store<AppState>, private dialogRef: MatDialogRef<RegisterDialogComponent>) {}

  ngOnInit() {
    this.store.pipe(takeUntil(this.destroy$), select(getUser)).subscribe((res) => {
      console.log(res);
    })
  }

  registerForm: FormGroup = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    const login = this.registerForm.controls['login'].value;
    const password = this.registerForm.controls['password'].value;
    const email = this.registerForm.controls['email'].value;

    this.store.dispatch(new RegisterUser({ login, password, email }));
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
