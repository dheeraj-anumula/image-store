import { Action } from '@ngrx/store';
import { Image } from '../../models/image-model';

export const LOAD_RESULT = '[Result] Load result';
export const LOAD_RESULT_SUCCESS = '[Result] Load Images Success';
export const LOAD_RESULT_FAILURE = '[Result] Load Images Failure';
export const ADD_IMAGE = '[My Images] Add image';

import { createAction, props } from '@ngrx/store';

export const LoadResults = createAction(
  LOAD_RESULT,
  props<{ query: string }>()
);

export const LoadResultSuccess = createAction(
  LOAD_RESULT_SUCCESS,
  props<{ allImages: Image[] }>()
);

export const LoadResultsFailure = createAction(
  LOAD_RESULT_FAILURE,
  props<{ error: string }>()
);

export const AddImage = createAction(
  ADD_IMAGE,
  props<{ id: string, image: Image }>()
)