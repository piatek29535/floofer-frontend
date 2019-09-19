export const signInUpReducers = (state = {
    value:0
}, action) => {
  switch(action.type){
      case 'SIGN_UP_CLICKED':
          return {...state, value: action.payload};
      case 'SIGN_IN_CLICKED':
          return {...state, value: action.payload};
      default:
          return state;
  }
};