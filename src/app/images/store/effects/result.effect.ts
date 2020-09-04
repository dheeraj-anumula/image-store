import { Injectable } from '@angular/core';

import { Effect, Actions, ofType, createEffect } from '@ngrx/effects';
import { switchMap, map, catchError, exhaustMap, tap, mergeMap } from 'rxjs/operators'
import * as resultsActions from '../actions'
import { UnsplashService } from '../../services/unsplash.service'
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class ResultEffects {
    constructor(private actions: Actions, private unsplashService: UnsplashService) { }

    loadResults$ = createEffect(() => this.actions.pipe(ofType(resultsActions.LoadResults),
        exhaustMap(action => {
            return this.unsplashService.search(action.query).pipe(
                map(results => resultsActions.LoadResultSuccess({allImages: results})),
                tap( r => console.log(r) ),
                catchError(error => of(resultsActions.LoadResultsFailure(error))
                )
            )
        })
    )
    )

}