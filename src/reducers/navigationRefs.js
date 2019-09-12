export const initializeRefs = (state = {
    navigationRefs:[]
}, action) => {
    switch(action.type){
        case'INITIALIZE_REFS':
            return {...state, navigationRefs:action.payload};
        default:
            return state;
    }
};