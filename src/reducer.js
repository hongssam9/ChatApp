export const initialState = {
    user: null,
};

export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
        default:
            return state;
    }

};

export default reducer;

/* 
    initial state => how data layer looks (staring off with user not logged in, hence null)
    actionTypes => where we can push info into data layer
        - when we sign in, going to dispatch an action which says
        go ahead and push this user in the data layer
    switch => if dispatched a set user action then go ahead
    and whatever returned is basically to change the data layer.
    So keep state of data layer, but change the user to whatever we dispatched
*/