import { FETCH_PROJECTS } from '../action/types';

export default function (state = {}, action) {

    switch (action.type) {
        case FETCH_PROJECTS:
            return [...action.payload.data];

        default:
            return state;
    }
}
