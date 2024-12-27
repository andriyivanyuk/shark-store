import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth Page] Login', props<{ username: string; password: string }>());
export const loginSuccess = createAction('[Auth API] Login Success', props<{ user: any }>());
export const loginFailure = createAction('[Auth API] Login Failure', props<{ error: string }>());

export const register = createAction('[Auth Page] Register', props<{ username: string; password: string }>());
export const registerSuccess = createAction('[Auth API] Register Success', props<{ user: any }>());
export const registerFailure = createAction('[Auth API] Register Failure', props<{ error: string }>());
