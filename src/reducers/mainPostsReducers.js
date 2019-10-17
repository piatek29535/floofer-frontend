export const fetchPosts = (state ={
    postsFetching:true,
    postsFetched:[],
    postsError:''
}, action) => {
    switch(action.type){
        case 'POSTS_FETCHING':{
            return {...state, postsFetching:action.payload}
        }
        case 'POSTS_FETCHED':{
            return {...state, postsFetched: action.payload, postsFetching: false}
        }
        case 'POSTS_FETCH_ERROR':{
            return {...state, postsError: action.payload, postsFetching: false}
        }
        default:
            return state;
    }
};

export const toggleDialog = (state = {
    isDialogOpened:false
}, action) => {
  switch (action.type) {
      case 'TOGGLE_ON':
          return {isDialogOpened: action.payload};
      case 'TOGGLE_OFF':
          return {isDialogOpened: action.payload};
      default:
          return state;
  }
};