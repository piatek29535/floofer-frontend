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
    registerStatus:null,
    registerErrorMessage:''
}, action) => {
  switch (action.type) {
      case 'SIGN_UP_BUTTON_FETCHING':
          return {signUpButtonLoading: action.payload, registerStatus: null };
      case 'SIGN_UP_BUTTON_FETCHED':
          return {signUpButtonLoading: false, registerStatus: action.payload.status, registerErrorMessage:''};
      case 'SIGN_UP_BUTTON_FETCHING_ERROR':
          return {signUpButtonLoading: false, registerStatus: action.payload.response.status, registerErrorMessage:action.payload.response.data};
      default:
          return state;
  }
};