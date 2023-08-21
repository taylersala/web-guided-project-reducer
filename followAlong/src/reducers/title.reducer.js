import { SET_TITLE, SET_NEW_TEXT_TITLE, TOGGLE_EDITING } from "../actions/title.actions";

export const initialState = {
    title: 'Hello earthlings!',
    editing: false,
    newTitleText: ''
}

export const reducer = (state, action) => {
    switch(action.type) {
        case(SET_TITLE):
            return({...state, title: action.payload, newTitleText: '', editing: false});
        case(TOGGLE_EDITING):
            return({...state, editing: !state.editing});
        case(SET_NEW_TEXT_TITLE):
            return({...state, newTitleText: action.payload});
        default:
            return(state);
    }
};