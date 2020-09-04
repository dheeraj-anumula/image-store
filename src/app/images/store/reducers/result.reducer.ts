import { Image } from '../../models/image-model'
import * as fromImages from '../actions/result.action'
import { Categories } from '../../models/categories-model'

export interface ImagesState {
    allImages: Image[],
    categories: Categories[],
    error: string
}

export const initialState: ImagesState = {
    allImages: [],
    categories: [],
    error: undefined
}

export function reducer(
    state = initialState,
    action
): ImagesState {

    switch (action.type) {
        case fromImages.LOAD_RESULT:
            return state

        case fromImages.LOAD_RESULT_SUCCESS:
            return {
                ...state,
                allImages: [...action.allImages]
            }


        case fromImages.LOAD_RESULT_FAILURE:
            return {
                ...state,
                ...action.error
            }

        case fromImages.ADD_IMAGE:

            let newCategories;
            let oldCategories = state.categories

            let newCategory = new Categories({ id: action.id, images: [action.image] })
            let categoryIndex = oldCategories.findIndex(category => { category.id === newCategory.id })

            if (categoryIndex > -1) {
                oldCategories[categoryIndex].images = [...oldCategories[categoryIndex].images, action.image]
                newCategories = [...oldCategories]
            }
            else {
                newCategories = [...state.categories, { id: action.id, images: [action.image] }]
            }
            return {
                ...state,
                categories: newCategories
            }
        default:
            return state

    }

}

export const getAllImages = (state: ImagesState) => state.allImages
export const getMyImages = (state: ImagesState) => state.categories