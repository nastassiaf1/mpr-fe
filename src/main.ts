import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { appReducers } from './app/store/reducers';
import { UserEffects } from './app/store/effects/user.effects';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule),
    provideHttpClient(),
    provideAnimations(),
    provideStore(appReducers),
    provideEffects([UserEffects]),
  ]
})
