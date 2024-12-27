// import { Injectable } from '@angular/core';
// import { Actions, ofType, createEffect } from '@ngrx/effects';
// import { of } from 'rxjs';
// import { catchError, map, exhaustMap } from 'rxjs/operators';
// import { AuthService } from './auth.service'; 
// import * as AuthActions from './auth.actions';

// @Injectable()
// export class AuthEffects {
//   login$ = createEffect(() => this.actions$.pipe(
//     ofType(AuthActions.login),
//     exhaustMap(action =>
//       this.authService.login(action.username, action.password).pipe(
//         map(user => AuthActions.loginSuccess({ user })),
//         catchError(error => of(AuthActions.loginFailure({ error })))
//       )
//     )
//   ));

//   register$ = createEffect(() => this.actions$.pipe(
//     ofType(AuthActions.register),
//     exhaustMap(action =>
//       this.authService.register(action.username, action.password).pipe(
//         map(user => AuthActions.registerSuccess({ user })),
//         catchError(error => of(AuthActions.registerFailure({ error })))
//       )
//     )
//   ));

//   constructor(
//     private actions$: Actions,
//     private authService: AuthService
//   ) {}
// }
