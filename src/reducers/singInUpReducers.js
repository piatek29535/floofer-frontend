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

export const signInUpButtonReducers = (state = {
    signUpButtonLoading: false,
    signUpButtonData: [],
    signUpButtonError:' '
}, action) => {
  switch (action.type) {
      case 'SIGN_UP_BUTTON_FETCHING':
          return {...state, signUpButtonLoading: action.payload };
      case 'SIGN_UP_BUTTON_FETCHED':
          return {...state, signUpButtonLoading: false, signUpButtonData: action.payload};
      case 'SIGN_UP_BUTTON_FETCHING_ERROR':
          return {...state, signUpButtonLoading: false, signUpButtonError: action.payload};
      default:
          return state;
  }
};