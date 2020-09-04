import * as fromImages from './result.reducer'
import { ActionReducerMap, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store'

export interface ImagesState {
  result: fromImages.ImagesState
}

export const reducers: ActionReducerMap<ImagesState> = {
  result: fromImages.reducer
}

export const getUnsplashState = createFeatureSelector<ImagesState>('result');

export const getResultState = createSelector(
  getUnsplashState, (state: ImagesState) => state.result
)

export const getAllImages = createSelector(getResultState, fromImages.getAllImages)
export const getMyImages = createSelector(getResultState, fromImages.getMyImages)